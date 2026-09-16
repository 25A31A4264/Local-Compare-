import express from 'express';
import { db } from '../data/database.js';

const router = express.Router();

// Quick switch / demo login or standard login
router.post('/login', (req, res) => {
  const { email, role } = req.body;
  const users = db.getCollection('users');

  let user = null;
  if (email) {
    user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  } else if (role) {
    user = users.find((u) => u.role === role);
  }

  if (!user) {
    // Default to customer if not found
    user = users[0];
  }

  // Generate mock JWT token
  const token = `demo_token_${user.id}_${Date.now()}`;

  res.json({
    success: true,
    user,
    token
  });
});

// Switch role instantaneously for seamless evaluation
router.post('/switch-role', (req, res) => {
  const { role, shopId } = req.body;
  const users = db.getCollection('users');

  let user = null;
  if (role === 'shop_owner') {
    user = users.find((u) => u.role === 'shop_owner' && (!shopId || u.shopId === shopId)) || users.find((u) => u.role === 'shop_owner');
  } else if (role === 'admin') {
    user = users.find((u) => u.role === 'admin');
  } else {
    user = users.find((u) => u.role === 'customer');
  }

  res.json({
    success: true,
    user,
    token: `demo_token_${user?.id}`
  });
});

// Customer or Shop Owner Signup
router.post('/register', (req, res) => {
  const { name, email, role, phone, shopName, address, category } = req.body;
  const users = db.getCollection('users');

  const existing = users.find((u) => u.email?.toLowerCase() === email?.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }

  const userId = `usr_${Date.now()}`;
  let shopId = null;

  if (role === 'shop_owner') {
    shopId = `shop_${Date.now()}`;
    const newShop = {
      id: shopId,
      name: shopName || 'My Retail Store',
      ownerName: name,
      phone: phone || '+91 98000 00000',
      whatsapp: (phone || '+91 98000 00000').replace(/[^0-9+]/g, ''),
      email,
      address: address || 'Indiranagar, Bengaluru',
      lat: 12.9783 + (Math.random() - 0.5) * 0.04,
      lng: 77.6408 + (Math.random() - 0.5) * 0.04,
      category: category || 'tvs',
      gstin: '29ABCDE0000A1Z5',
      verified: false,
      status: 'pending', // Pending Admin approval
      rating: 5.0,
      reviewCount: 0,
      trustScore: 90,
      openingHours: '9:00 AM – 9:00 PM',
      photoUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80',
      priceAccuracyScore: 100,
      description: 'Newly registered local retailer pending admin certification.'
    };
    db.create('shops', newShop);
  }

  const newUser = {
    id: userId,
    name,
    email,
    role: role || 'customer',
    phone,
    shopId
  };

  db.create('users', newUser);

  res.json({
    success: true,
    user: newUser,
    token: `token_${userId}`
  });
});

export default router;
