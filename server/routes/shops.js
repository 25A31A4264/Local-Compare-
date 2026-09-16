import express from 'express';
import { db, calculateDistanceKm } from '../data/database.js';

const router = express.Router();

// Get list of shops with distance calculations
router.get('/', (req, res) => {
  const { category, search, lat, lng, radius, status } = req.query;
  const userLat = parseFloat(lat) || 12.9716;
  const userLng = parseFloat(lng) || 77.5946;
  const maxRadius = parseFloat(radius) || 25;

  let shops = db.getCollection('shops');

  // Filter by status if provided, default to active for public customer searches
  if (status) {
    shops = shops.filter((s) => s.status === status);
  } else {
    shops = shops.filter((s) => s.status === 'active');
  }

  if (category && category !== 'all' && category !== 'undefined' && category !== 'null') {
    shops = shops.filter((s) => s.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    shops = shops.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.ownerName.toLowerCase().includes(q)
    );
  }

  const results = shops
    .map((s) => {
      const distance = calculateDistanceKm(userLat, userLng, s.lat, s.lng);
      return { ...s, distance };
    })
    .filter((s) => s.distance <= maxRadius)
    .sort((a, b) => a.distance - b.distance);

  res.json(results);
});

// Get individual shop profile
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userLat = parseFloat(req.query.lat) || 12.9716;
  const userLng = parseFloat(req.query.lng) || 77.5946;

  const shop = db.findById('shops', id);
  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const distance = calculateDistanceKm(userLat, userLng, shop.lat, shop.lng);
  const shopProducts = db.find('shopProducts', (sp) => sp.shopId === id);
  const products = db.getCollection('products');
  const reviews = db.find('reviews', (r) => r.shopId === id);

  // Attach full product details to shop inventory
  const inventory = shopProducts.map((sp) => {
    const product = products.find((p) => p.id === sp.productId);
    return {
      ...sp,
      productName: product?.name || 'Product',
      productBrand: product?.brand,
      productCategory: product?.category,
      productImage: product?.image,
      productMrp: product?.mrp
    };
  });

  res.json({
    shop: { ...shop, distance },
    inventory,
    reviews
  });
});

// Register shop
router.post('/register', (req, res) => {
  const { ownerName, shopName, phone, email, address, category, gstin, photoUrl, description } = req.body;

  if (!shopName || !phone) {
    return res.status(400).json({ error: 'Shop name and phone are required' });
  }

  const shopId = `shop_${Date.now()}`;
  const newShop = {
    id: shopId,
    name: shopName,
    ownerName: ownerName || 'Owner',
    phone,
    whatsapp: phone.replace(/[^0-9+]/g, ''),
    email: email || '',
    address: address || 'Indiranagar, Bengaluru',
    lat: 12.9783 + (Math.random() - 0.5) * 0.03,
    lng: 77.6408 + (Math.random() - 0.5) * 0.03,
    category: category || 'tvs',
    gstin: gstin || 'Pending',
    verified: false,
    status: 'pending', // Awaiting admin approval
    rating: 5.0,
    reviewCount: 0,
    trustScore: 90,
    openingHours: '9:00 AM – 9:00 PM',
    photoUrl: photoUrl || 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80',
    priceAccuracyScore: 100,
    description: description || 'Authorized retail store committed to verified transparent pricing.'
  };

  db.create('shops', newShop);

  res.json({
    success: true,
    message: 'Shop registration submitted successfully. Verification pending admin review.',
    shop: newShop
  });
});

export default router;
