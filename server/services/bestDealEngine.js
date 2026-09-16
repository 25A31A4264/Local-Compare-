// Best Deal Scoring Algorithm
// Balances Price, Distance, Freshness, Shop Rating, and Stock Availability

export function evaluateShopDeals(shopDeals) {
  if (!shopDeals || shopDeals.length === 0) {
    return {
      deals: [],
      bestPriceDeal: null,
      nearestDeal: null,
      bestOverallDeal: null
    };
  }

  // 1. Find min and max prices
  const prices = shopDeals.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  // 2. Find min and max distances
  const distances = shopDeals.map((d) => d.distance);
  const minDistance = Math.min(...distances);
  const maxDistance = Math.max(...distances);
  const distanceRange = maxDistance - minDistance || 1;

  const now = Date.now();

  const scoredDeals = shopDeals.map((deal) => {
    // Price Score (0 - 40 points, lower price = higher score)
    const priceScore = 40 * (1 - (deal.price - minPrice) / (priceRange * 1.2 || 1));

    // Distance Score (0 - 25 points, closer = higher score)
    const distanceScore = 25 * (1 - (deal.distance - minDistance) / (distanceRange * 1.5 || 1));

    // Freshness Score (0 - 20 points)
    // < 2 hours: 20 pts
    // < 24 hours: 16 pts
    // < 3 days: 8 pts
    // older: 2 pts
    const hoursSinceUpdate = (now - new Date(deal.lastVerifiedAt).getTime()) / (1000 * 60 * 60);
    let freshnessScore = 2;
    let freshnessLabel = 'Price may be outdated';
    let freshnessBadge = 'outdated'; // 'fresh' | 'moderate' | 'outdated'

    if (hoursSinceUpdate < 0.5) {
      const minutes = Math.max(1, Math.round(hoursSinceUpdate * 60));
      freshnessLabel = `Verified ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      freshnessScore = 20;
      freshnessBadge = 'fresh';
    } else if (hoursSinceUpdate < 4) {
      const hours = Math.round(hoursSinceUpdate);
      freshnessLabel = `Verified ${hours} hour${hours > 1 ? 's' : ''} ago`;
      freshnessScore = 18;
      freshnessBadge = 'fresh';
    } else if (hoursSinceUpdate < 24) {
      freshnessLabel = `Updated today`;
      freshnessScore = 15;
      freshnessBadge = 'fresh';
    } else if (hoursSinceUpdate < 72) {
      const days = Math.round(hoursSinceUpdate / 24);
      freshnessLabel = `Updated ${days} day${days > 1 ? 's' : ''} ago`;
      freshnessScore = 8;
      freshnessBadge = 'moderate';
    } else {
      const days = Math.round(hoursSinceUpdate / 24);
      freshnessLabel = `Updated ${days} days ago (Unconfirmed)`;
      freshnessScore = 2;
      freshnessBadge = 'outdated';
    }

    // Stock Score (0 - 10 points)
    let stockScore = 0;
    if (deal.stockStatus === 'in_stock') stockScore = 10;
    else if (deal.stockStatus === 'few_left') stockScore = 6;
    else stockScore = 0;

    // Rating Score (0 - 5 points)
    const ratingScore = ((deal.shopRating || 4.0) / 5) * 5;

    const totalScore = Math.round((priceScore + distanceScore + freshnessScore + stockScore + ratingScore) * 10) / 10;

    return {
      ...deal,
      freshnessLabel,
      freshnessBadge,
      scores: {
        total: totalScore,
        priceScore: Math.round(priceScore * 10) / 10,
        distanceScore: Math.round(distanceScore * 10) / 10,
        freshnessScore: Math.round(freshnessScore * 10) / 10,
        stockScore,
        ratingScore: Math.round(ratingScore * 10) / 10
      }
    };
  });

  // Sort by Best Deal total score descending
  scoredDeals.sort((a, b) => b.scores.total - a.scores.total);

  // Identify Best Price (cheapest), Nearest (closest), and Best Overall (highest score)
  const bestPriceDeal = [...scoredDeals].sort((a, b) => a.price - b.price)[0];
  const nearestDeal = [...scoredDeals].sort((a, b) => a.distance - b.distance)[0];
  const bestOverallDeal = scoredDeals[0];

  // Provide clear human rationale for Best Overall Deal
  let bestDealReason = '';
  if (bestOverallDeal.id === bestPriceDeal.id && bestOverallDeal.id === nearestDeal.id) {
    bestDealReason = 'Cheapest price, closest distance, and high verified stock freshness!';
  } else if (bestOverallDeal.id === bestPriceDeal.id) {
    bestDealReason = `Unbeatable lowest price of ₹${bestOverallDeal.price.toLocaleString('en-IN')} with verified in-store stock.`;
  } else if (bestOverallDeal.id === nearestDeal.id) {
    bestDealReason = `Closest store (${bestOverallDeal.distance} km) with trusted live inventory and verified price.`;
  } else {
    const priceDiff = bestOverallDeal.price - bestPriceDeal.price;
    const distSaved = Math.round((bestPriceDeal.distance - bestOverallDeal.distance) * 10) / 10;
    bestDealReason = `Best balance: Saves ${distSaved} km trip with ${bestOverallDeal.freshnessLabel.toLowerCase()} and ⭐${bestOverallDeal.shopRating} customer rating for just ₹${priceDiff.toLocaleString('en-IN')} difference.`;
  }

  return {
    deals: scoredDeals,
    bestPriceDealId: bestPriceDeal?.id,
    nearestDealId: nearestDeal?.id,
    bestOverallDealId: bestOverallDeal?.id,
    bestDealReason
  };
}
