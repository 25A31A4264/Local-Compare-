import express from 'express';
import { db, calculateDistanceKm } from '../data/database.js';
import { evaluateShopDeals } from '../services/bestDealEngine.js';
import { parseNaturalLanguageQuery, calculateProductSimilarity } from '../services/aiParser.js';

const router = express.Router();

// Get categories
router.get('/categories', (req, res) => {
  const categories = db.getCollection('categories');
  res.json(categories);
});

// Search and list products
router.get('/', (req, res) => {
  const { category, search, minPrice, maxPrice, lat, lng, radius } = req.query;
  const userLat = parseFloat(lat) || 12.9716;
  const userLng = parseFloat(lng) || 77.5946;
  const maxRadius = parseFloat(radius) || 25;

  let products = db.getCollection('products');
  const shopProducts = db.getCollection('shopProducts');
  const shops = db.getCollection('shops');

  if (category && category !== 'all') {
    products = products.filter((p) => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.aliases && p.aliases.some((a) => a.toLowerCase().includes(q)))
    );
  }

  // Attach shop pricing summary for each product
  const results = products.map((product) => {
    const deals = shopProducts.filter((sp) => sp.productId === product.id);
    const shopDeals = deals
      .map((d) => {
        const shop = shops.find((s) => s.id === d.shopId && s.status === 'active');
        if (!shop) return null;
        const dist = calculateDistanceKm(userLat, userLng, shop.lat, shop.lng);
        return {
          ...d,
          shopName: shop.name,
          shopRating: shop.rating,
          shopVerified: shop.verified,
          distance: dist
        };
      })
      .filter(Boolean)
      .filter((d) => d.distance <= maxRadius);

    const lowestPrice = shopDeals.length > 0 ? Math.min(...shopDeals.map((d) => d.price)) : null;
    const bestPriceShop = shopDeals.find((d) => d.price === lowestPrice);

    return {
      ...product,
      shopCount: shopDeals.length,
      lowestPrice,
      bestPriceShop: bestPriceShop?.shopName || null,
      minDistance: shopDeals.length > 0 ? Math.min(...shopDeals.map((d) => d.distance)) : null
    };
  });

  res.json(results);
});

// AI Natural Language Search
// e.g. "I need a good washing machine for a family of 4 under 30k"
router.get('/ai-search', (req, res) => {
  const { q, lat, lng } = req.query;
  const userLat = parseFloat(lat) || 12.9716;
  const userLng = parseFloat(lng) || 77.5946;

  if (!q) {
    return res.status(400).json({ error: 'Query parameter q is required' });
  }

  const aiInterpretation = parseNaturalLanguageQuery(q);
  let products = db.getCollection('products');
  const shopProducts = db.getCollection('shopProducts');
  const shops = db.getCollection('shops');

  // Filter products by parsed category or keywords
  if (aiInterpretation.category) {
    products = products.filter((p) => p.category === aiInterpretation.category);
  }

  if (aiInterpretation.brand) {
    products = products.filter((p) => p.brand.toLowerCase() === aiInterpretation.brand.toLowerCase());
  }

  if (aiInterpretation.intentKeywords.length > 0) {
    products = products.filter((p) => {
      const fullText = `${p.name} ${p.description} ${p.brand} ${Object.values(p.specs || {}).join(' ')}`.toLowerCase();
      return aiInterpretation.intentKeywords.some((kw) => fullText.includes(kw.toLowerCase()));
    });
  }

  // Calculate pricing & best deal for each matching product
  const matchingDeals = products
    .map((product) => {
      const deals = shopProducts.filter((sp) => sp.productId === product.id);
      const shopDeals = deals
        .map((d) => {
          const shop = shops.find((s) => s.id === d.shopId && s.status === 'active');
          if (!shop) return null;
          const dist = calculateDistanceKm(userLat, userLng, shop.lat, shop.lng);
          return {
            ...d,
            shopName: shop.name,
            shopRating: shop.rating,
            shopAddress: shop.address,
            distance: dist
          };
        })
        .filter(Boolean);

      // Check max budget constraint if parsed
      const validDeals = aiInterpretation.maxBudget
        ? shopDeals.filter((d) => d.price <= aiInterpretation.maxBudget)
        : shopDeals;

      if (validDeals.length === 0 && aiInterpretation.maxBudget) {
        return null;
      }

      const evaluation = evaluateShopDeals(shopDeals);
      return {
        product,
        bestDeal: evaluation.deals[0] || null,
        bestPriceDeal: evaluation.deals.find((d) => d.id === evaluation.bestPriceDealId) || null,
        totalShops: shopDeals.length,
        evaluation
      };
    })
    .filter(Boolean);

  res.json({
    aiInterpretation,
    totalFound: matchingDeals.length,
    results: matchingDeals
  });
});

// Product Comparison - The Heart of the Application
// Returns product info, multi-shop comparison table, Best Price, Nearest, and Best Overall Deal
router.get('/:id/compare', (req, res) => {
  const { id } = req.params;
  const userLat = parseFloat(req.query.lat) || 12.9716;
  const userLng = parseFloat(req.query.lng) || 77.5946;

  const product = db.findById('products', id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const shopProducts = db.find('shopProducts', (sp) => sp.productId === id);
  const shops = db.getCollection('shops');
  const priceHistories = db.find('priceHistories', (ph) => ph.productId === id);
  const reviews = db.getCollection('reviews');

  // Map each shop deal with distance, coordinates, and contact channels
  const rawDeals = shopProducts
    .map((item) => {
      const shop = shops.find((s) => s.id === item.shopId);
      if (!shop) return null;
      const distance = calculateDistanceKm(userLat, userLng, shop.lat, shop.lng);
      return {
        ...item,
        shopName: shop.name,
        shopOwner: shop.ownerName,
        shopPhone: shop.phone,
        shopWhatsapp: shop.whatsapp,
        shopAddress: shop.address,
        shopLat: shop.lat,
        shopLng: shop.lng,
        shopRating: shop.rating,
        shopReviewCount: shop.reviewCount,
        shopVerified: shop.verified,
        shopOpeningHours: shop.openingHours,
        shopPhoto: shop.photoUrl,
        priceAccuracyScore: shop.priceAccuracyScore,
        distance
      };
    })
    .filter(Boolean);

  // Run Best Deal Algorithm
  const dealEvaluation = evaluateShopDeals(rawDeals);

  // Get reviews relevant to these shops
  const shopIds = rawDeals.map((d) => d.shopId);
  const relevantReviews = reviews.filter((r) => shopIds.includes(r.shopId));

  res.json({
    product,
    userLocation: { lat: userLat, lng: userLng },
    deals: dealEvaluation.deals,
    bestPriceDealId: dealEvaluation.bestPriceDealId,
    nearestDealId: dealEvaluation.nearestDealId,
    bestOverallDealId: dealEvaluation.bestOverallDealId,
    bestDealReason: dealEvaluation.bestDealReason,
    priceHistory: priceHistories[0] || null,
    reviews: relevantReviews
  });
});

// AI Product Matching / Deduplication
// Checks whether a shopkeeper's entered product title matches an existing catalog item
router.post('/match', (req, res) => {
  const { title, brand, category } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const products = db.getCollection('products');
  let bestMatch = null;
  let highestScore = 0;

  for (const p of products) {
    const directScore = calculateProductSimilarity(title, p.name);
    let aliasScore = 0;
    if (p.aliases) {
      for (const a of p.aliases) {
        aliasScore = Math.max(aliasScore, calculateProductSimilarity(title, a));
      }
    }
    const score = Math.max(directScore, aliasScore);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = p;
    }
  }

  if (highestScore >= 0.5) {
    res.json({
      matched: true,
      confidence: Math.round(highestScore * 100),
      product: bestMatch,
      message: `AI identified this matches catalog item: "${bestMatch.name}" (${Math.round(highestScore * 100)}% match)`
    });
  } else {
    res.json({
      matched: false,
      confidence: Math.round(highestScore * 100),
      product: null,
      message: 'New unique product detected.'
    });
  }
});

// Create new product (by shopkeeper or admin)
router.post('/', (req, res) => {
  const { name, brand, category, modelNumber, mrp, image, description, specs } = req.body;
  const newProduct = {
    id: `prod_${Date.now()}`,
    name,
    brand: brand || 'Generic',
    category: category || 'accessories',
    modelNumber: modelNumber || `MN-${Date.now().toString().slice(-6)}`,
    mrp: Number(mrp) || 999,
    image: image || 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80',
    description: description || 'High quality local retail product.',
    specs: specs || {},
    aliases: [name]
  };

  db.create('products', newProduct);
  res.json({ success: true, product: newProduct });
});

export default router;
