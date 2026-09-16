import express from 'express';
import { db, calculateDistanceKm } from '../data/database.js';

const router = express.Router();

// List all product requests
router.get('/', (req, res) => {
  const { customerId, shopId, lat, lng } = req.query;
  let requests = db.getCollection('productRequests');

  if (customerId) {
    requests = requests.filter((r) => r.customerId === customerId);
  }

  // Calculate distance from shop or user
  const userLat = parseFloat(lat) || 12.9716;
  const userLng = parseFloat(lng) || 77.5946;

  const results = requests.map((r) => {
    const dist = calculateDistanceKm(userLat, userLng, r.customerLat || 12.9716, r.customerLng || 77.5946);
    return {
      ...r,
      distance: dist
    };
  });

  res.json(results.reverse());
});

// Customer creates product request
router.post('/', (req, res) => {
  const { customerId, customerName, customerPhone, productName, category, budget, radiusKm, notes, lat, lng } = req.body;

  if (!productName) {
    return res.status(400).json({ error: 'Product name is required' });
  }

  const newRequest = {
    id: `req_${Date.now()}`,
    customerId: customerId || 'usr_customer_1',
    customerName: customerName || 'Verified Shopper',
    customerPhone: customerPhone || '+91 98765 43210',
    productName,
    category: category || 'accessories',
    budget: Number(budget) || null,
    radiusKm: Number(radiusKm) || 10,
    customerLat: parseFloat(lat) || 12.9716,
    customerLng: parseFloat(lng) || 77.5946,
    notes: notes || '',
    status: 'open',
    createdAt: new Date().toISOString(),
    responses: []
  };

  db.create('productRequests', newRequest);

  res.json({
    success: true,
    message: 'Product request dispatched to nearby verified shops!',
    request: newRequest
  });
});

// Shopkeeper responds with a quote/deal
router.post('/:id/respond', (req, res) => {
  const { id } = req.params;
  const { shopId, shopName, offeredPrice, stockStatus, notes } = req.body;

  const request = db.findById('productRequests', id);
  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }

  const responseObj = {
    id: `resp_${Date.now()}`,
    shopId,
    shopName: shopName || 'Local Retailer',
    offeredPrice: Number(offeredPrice),
    stockStatus: stockStatus || 'in_stock',
    notes: notes || 'Item available for immediate store pickup.',
    createdAt: new Date().toISOString()
  };

  if (!request.responses) request.responses = [];
  request.responses.push(responseObj);
  db.save();

  res.json({
    success: true,
    message: 'Quote sent directly to the customer!',
    response: responseObj
  });
});

export default router;
