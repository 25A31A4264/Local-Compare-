import express from 'express';
import { db } from '../data/database.js';

const router = express.Router();

// Get all products for a specific shop
router.get('/shop/:shopId', (req, res) => {
  const { shopId } = req.params;
  const shopProducts = db.find('shopProducts', (sp) => sp.shopId === shopId);
  const products = db.getCollection('products');

  const detailed = shopProducts.map((sp) => {
    const product = products.find((p) => p.id === sp.productId);
    return {
      ...sp,
      product
    };
  });

  res.json(detailed);
});

// ⭐ 1-Click Price & Stock Verification by Shopkeeper
// Prompts: "Is this price still valid? YES / NO"
router.post('/:id/verify', (req, res) => {
  const { id } = req.params;
  const { confirmed, newPrice, newStockStatus, newQuantity } = req.body;

  const existing = db.findById('shopProducts', id);
  if (!existing) {
    return res.status(404).json({ error: 'Shop product listing not found' });
  }

  const updates = {
    lastVerifiedAt: new Date().toISOString(),
    lastPriceConfirmedByOwner: true,
    verificationStatus: 'fresh'
  };

  if (newPrice !== undefined && Number(newPrice) > 0) {
    const oldPrice = existing.price;
    updates.price = Number(newPrice);

    // Record in price history if price changed
    const histories = db.find('priceHistories', (h) => h.productId === existing.productId && h.shopId === existing.shopId);
    if (histories && histories.length > 0) {
      histories[0].history.push({
        date: 'Today (Updated)',
        price: Number(newPrice)
      });
      db.save();
    }
  }

  if (newStockStatus) {
    updates.stockStatus = newStockStatus;
  }
  if (newQuantity !== undefined) {
    updates.quantity = Number(newQuantity);
  }

  const updated = db.update('shopProducts', id, updates);

  res.json({
    success: true,
    message: 'Price and stock verified! Listing marked 🟢 Verified Just Now.',
    item: updated
  });
});

// Bulk 1-Click Verification for the entire shop
router.post('/shop/:shopId/verify-all', (req, res) => {
  const { shopId } = req.params;
  const items = db.find('shopProducts', (sp) => sp.shopId === shopId);

  const nowIso = new Date().toISOString();
  items.forEach((item) => {
    item.lastVerifiedAt = nowIso;
    item.lastPriceConfirmedByOwner = true;
    item.verificationStatus = 'fresh';
  });

  db.save();

  res.json({
    success: true,
    message: `All ${items.length} products verified fresh!`,
    count: items.length
  });
});

// Add product to shop inventory
router.post('/', (req, res) => {
  const { shopId, productId, price, stockStatus, quantity } = req.body;

  if (!shopId || !productId || !price) {
    return res.status(400).json({ error: 'shopId, productId, and price are required' });
  }

  const newItem = {
    id: `sp_${Date.now()}`,
    shopId,
    productId,
    price: Number(price),
    stockStatus: stockStatus || 'in_stock',
    quantity: Number(quantity) || 5,
    lastVerifiedAt: new Date().toISOString(),
    lastPriceConfirmedByOwner: true,
    verificationStatus: 'fresh',
    viewsCount: 0,
    clicksCount: 0
  };

  db.create('shopProducts', newItem);

  res.json({
    success: true,
    item: newItem
  });
});

// Update shop product price or stock
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { price, stockStatus, quantity } = req.body;

  const updates = {
    lastVerifiedAt: new Date().toISOString(),
    lastPriceConfirmedByOwner: true,
    verificationStatus: 'fresh'
  };

  if (price !== undefined) updates.price = Number(price);
  if (stockStatus !== undefined) updates.stockStatus = stockStatus;
  if (quantity !== undefined) updates.quantity = Number(quantity);

  const updated = db.update('shopProducts', id, updates);
  if (!updated) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json({
    success: true,
    item: updated
  });
});

// Delete from inventory
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const success = db.remove('shopProducts', id);
  res.json({ success });
});

// Track customer engagement (calls, whatsapp clicks, views)
router.post('/:id/track-interest', (req, res) => {
  const { id } = req.params;
  const { action } = req.body; // 'view' | 'call' | 'whatsapp' | 'directions'
  const item = db.findById('shopProducts', id);
  if (item) {
    if (action === 'view') {
      item.viewsCount = (item.viewsCount || 0) + 1;
    } else {
      item.clicksCount = (item.clicksCount || 0) + 1;
    }
    db.save();
  }
  res.json({ success: true });
});

export default router;
