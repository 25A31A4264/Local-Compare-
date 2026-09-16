import express from 'express';
import { db } from '../data/database.js';

const router = express.Router();

// Get reviews for a shop
router.get('/shop/:shopId', (req, res) => {
  const { shopId } = req.params;
  const reviews = db.find('reviews', (r) => r.shopId === shopId);
  res.json(reviews);
});

// Post a review with price accuracy confirmation
router.post('/', (req, res) => {
  const { shopId, customerId, customerName, rating, comment, priceWasAccurate } = req.body;

  if (!shopId || !rating) {
    return res.status(400).json({ error: 'shopId and rating are required' });
  }

  const newReview = {
    id: `rev_${Date.now()}`,
    shopId,
    customerId: customerId || 'usr_customer_1',
    customerName: customerName || 'Verified Buyer',
    rating: Number(rating),
    comment: comment || '',
    priceWasAccurate: Boolean(priceWasAccurate),
    createdAt: new Date().toISOString()
  };

  db.create('reviews', newReview);

  // Recalculate shop average rating and price accuracy score
  const shopReviews = db.find('reviews', (r) => r.shopId === shopId);
  const avgRating = shopReviews.reduce((sum, r) => sum + r.rating, 0) / shopReviews.length;
  const accurateCount = shopReviews.filter((r) => r.priceWasAccurate).length;
  const priceAccuracyScore = Math.round((accurateCount / shopReviews.length) * 100);

  db.update('shops', shopId, {
    rating: Math.round(avgRating * 10) / 10,
    reviewCount: shopReviews.length,
    priceAccuracyScore
  });

  res.json({
    success: true,
    review: newReview,
    updatedStats: {
      rating: Math.round(avgRating * 10) / 10,
      priceAccuracyScore
    }
  });
});

export default router;
