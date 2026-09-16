import express from 'express';
import { db } from '../data/database.js';

const router = express.Router();

// Get Admin dashboard metrics & overview
router.get('/metrics', (req, res) => {
  const shops = db.getCollection('shops');
  const products = db.getCollection('products');
  const shopProducts = db.getCollection('shopProducts');
  const reports = db.getCollection('reports');

  const totalShops = shops.length;
  const activeShops = shops.filter((s) => s.status === 'active').length;
  const pendingShops = shops.filter((s) => s.status === 'pending').length;
  const suspendedShops = shops.filter((s) => s.status === 'suspended').length;
  const totalProducts = products.length;
  const totalListings = shopProducts.length;
  const pendingReports = reports.filter((r) => r.status === 'pending').length;
  const resolvedReports = reports.filter((r) => r.status === 'resolved').length;

  res.json({
    metrics: {
      registeredShops: totalShops,
      activeShops,
      pendingVerification: pendingShops,
      suspendedShops,
      catalogProducts: totalProducts,
      totalShopListings: totalListings,
      pendingReports,
      resolvedReports
    },
    pendingShopsList: shops.filter((s) => s.status === 'pending'),
    allShops: shops,
    recentReports: reports.slice(-10).reverse()
  });
});

// Approve shop
router.post('/shops/:id/approve', (req, res) => {
  const { id } = req.params;
  const shop = db.findById('shops', id);
  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const updated = db.update('shops', id, {
    status: 'active',
    verified: true,
    verifiedAt: new Date().toISOString()
  });

  res.json({
    success: true,
    message: `Shop "${shop.name}" has been approved and verified!`,
    shop: updated
  });
});

// Reject or suspend shop
router.post('/shops/:id/status', (req, res) => {
  const { id } = req.params;
  const { status, reason } = req.body; // 'active' | 'rejected' | 'suspended'

  const shop = db.findById('shops', id);
  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const updated = db.update('shops', id, {
    status,
    verified: status === 'active',
    adminNote: reason || ''
  });

  res.json({
    success: true,
    message: `Shop status updated to ${status}`,
    shop: updated
  });
});

// Adjust shop trust score
router.post('/shops/:id/trust-score', (req, res) => {
  const { id } = req.params;
  const { trustScore } = req.body;

  const updated = db.update('shops', id, {
    trustScore: Math.min(100, Math.max(0, Number(trustScore)))
  });

  res.json({
    success: true,
    shop: updated
  });
});

export default router;
