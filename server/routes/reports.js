import express from 'express';
import { db } from '../data/database.js';

const router = express.Router();

// Get all reports (for Admin)
router.get('/', (req, res) => {
  const reports = db.getCollection('reports');
  const shops = db.getCollection('shops');
  const products = db.getCollection('products');

  const detailed = reports.map((rep) => {
    const shop = shops.find((s) => s.id === rep.shopId);
    const product = products.find((p) => p.id === rep.productId);
    return {
      ...rep,
      shopName: shop?.name || 'Unknown Shop',
      productName: product?.name || 'General Product'
    };
  });

  res.json(detailed.reverse());
});

// Customer submits a report
router.post('/', (req, res) => {
  const { shopId, productId, shopProductId, reportedBy, reason, details } = req.body;

  if (!shopId || !reason) {
    return res.status(400).json({ error: 'shopId and reason are required' });
  }

  const newReport = {
    id: `rep_${Date.now()}`,
    shopId,
    productId: productId || null,
    shopProductId: shopProductId || null,
    reportedBy: reportedBy || 'Anonymous Customer',
    reason, // 'wrong_price' | 'out_of_stock' | 'fake_shop' | 'wrong_location' | 'product_description_incorrect'
    details: details || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  db.create('reports', newReport);

  // Slightly penalize shop trust score on report submission
  const shop = db.findById('shops', shopId);
  if (shop && shop.trustScore > 60) {
    db.update('shops', shopId, {
      trustScore: Math.max(50, shop.trustScore - 2)
    });
  }

  res.json({
    success: true,
    message: 'Report received. Our moderation team will investigate to keep prices accurate.',
    report: newReport
  });
});

// Admin resolves report
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { status, actionTaken } = req.body; // 'resolved' | 'dismissed' | 'investigating'

  const updated = db.update('reports', id, {
    status,
    actionTaken: actionTaken || 'Reviewed by Admin',
    resolvedAt: new Date().toISOString()
  });

  if (!updated) {
    return res.status(404).json({ error: 'Report not found' });
  }

  res.json({
    success: true,
    report: updated
  });
});

export default router;
