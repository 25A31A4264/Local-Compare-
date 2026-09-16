// AI Natural Language Search & Product Matcher Engine

export function parseNaturalLanguageQuery(queryText) {
  const text = (queryText || '').toLowerCase();
  const parsed = {
    originalQuery: queryText,
    category: null,
    maxBudget: null,
    minBudget: null,
    brand: null,
    specsExtracted: {},
    intentKeywords: [],
    explanation: ''
  };

  // 1. Budget extraction: e.g. "under 30k", "below 50000", "< 30000", "around 25k"
  const underMatch = text.match(/(?:under|below|less than|<|max|within)\s*(?:rs\.?|inr|₹)?\s*(\d+)(k)?/i);
  if (underMatch) {
    let amount = parseInt(underMatch[1], 10);
    if (underMatch[2] || amount < 1000) {
      amount *= 1000;
    }
    parsed.maxBudget = amount;
  }

  // 2. Category intent mapping
  if (/washing machine|dryer|washer/i.test(text)) {
    parsed.category = 'home_appliances';
    parsed.subCategory = 'Washing Machine';
    parsed.intentKeywords.push('washing machine');
  } else if (/tv|television|screen|oled|qled|smart tv/i.test(text)) {
    parsed.category = 'tvs';
    parsed.intentKeywords.push('tv');
  } else if (/phone|mobile|smartphone|iphone|galaxy/i.test(text)) {
    parsed.category = 'mobiles';
    parsed.intentKeywords.push('phone');
  } else if (/laptop|macbook|notebook|pc|computer/i.test(text)) {
    parsed.category = 'laptops';
    parsed.intentKeywords.push('laptop');
  } else if (/fridge|refrigerator/i.test(text)) {
    parsed.category = 'home_appliances';
    parsed.intentKeywords.push('refrigerator');
  } else if (/drill|tool|hardware|hammer/i.test(text)) {
    parsed.category = 'hardware';
    parsed.intentKeywords.push('hardware');
  } else if (/grocery|atta|oil|flour/i.test(text)) {
    parsed.category = 'grocery';
    parsed.intentKeywords.push('grocery');
  } else if (/shoes|sneakers|footwear/i.test(text)) {
    parsed.category = 'footwear';
    parsed.intentKeywords.push('shoes');
  } else if (/chair|table|furniture|desk/i.test(text)) {
    parsed.category = 'furniture';
    parsed.intentKeywords.push('furniture');
  }

  // 3. Family or capacity inference (e.g. "family of 4" -> 7-9kg washer)
  if (/family of [3-5]|family of four|medium family/i.test(text)) {
    parsed.specsExtracted['capacity'] = '7-8 kg';
    parsed.intentKeywords.push('family capacity (7-8kg)');
  } else if (/large family|family of 6|joint family/i.test(text)) {
    parsed.specsExtracted['capacity'] = '8-10 kg';
    parsed.intentKeywords.push('large capacity (8kg+)');
  }

  // 4. Brand recognition
  const brands = ['Samsung', 'LG', 'Apple', 'Sony', 'Nike', 'Bosch', 'Prestige', 'Philips', 'Levi', 'Wakefit'];
  for (const b of brands) {
    if (new RegExp(`\\b${b}\\b`, 'i').test(text)) {
      parsed.brand = b;
      break;
    }
  }

  // Build human AI explanation
  const parts = [];
  if (parsed.subCategory) parts.push(`Category: ${parsed.subCategory}`);
  else if (parsed.category) parts.push(`Category: ${parsed.category}`);
  if (parsed.maxBudget) parts.push(`Budget ≤ ₹${parsed.maxBudget.toLocaleString('en-IN')}`);
  if (parsed.specsExtracted['capacity']) parts.push(`Capacity ≈ ${parsed.specsExtracted['capacity']}`);
  if (parsed.brand) parts.push(`Brand: ${parsed.brand}`);

  parsed.explanation = parts.length > 0 ? parts.join(' • ') : 'Natural query parsed';

  return parsed;
}

// AI Product Matcher / Canonical Deduplication
// Identifies if two product titles refer to the same catalog item
export function calculateProductSimilarity(nameA, nameB) {
  const cleanA = normalizeTitle(nameA);
  const cleanB = normalizeTitle(nameB);

  if (cleanA === cleanB) return 1.0;

  const wordsA = new Set(cleanA.split(/\s+/));
  const wordsB = new Set(cleanB.split(/\s+/));

  let common = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) common++;
  }

  const union = new Set([...wordsA, ...wordsB]).size;
  return union === 0 ? 0 : common / union;
}

function normalizeTitle(title) {
  return (title || '')
    .toLowerCase()
    .replace(/["'”’]/g, '')
    .replace(/\b(inch|in|-inch)\b/g, '')
    .replace(/\b(uhd|ultra hd)\b/g, '4k')
    .replace(/\btelevision\b/g, 'tv')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();
}
