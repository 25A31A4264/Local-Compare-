// Client API Service Layer

const RAW_API_URL = (import.meta.env.VITE_API_URL || '').trim();
const normalizedUrl = RAW_API_URL.replace(/\/+$/, '').replace(/\/api$/, '');
const BASE_URL = normalizedUrl ? `${normalizedUrl}/api` : '/api';

function buildQuery(params = {}) {
  const cleaned = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '' && v !== 'undefined' && v !== 'null') {
      cleaned[k] = v;
    }
  }
  return new URLSearchParams(cleaned).toString();
}

export async function fetchApi(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  const config = {
    ...options,
    headers
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `HTTP error ${response.status}`);
  }

  return data;
}

export const api = {
  // Health check
  getHealth: () => fetchApi('/health'),

  // Products & AI Search
  getProducts: (params = {}) => {
    const query = buildQuery(params);
    return fetchApi(`/products${query ? `?${query}` : ''}`);
  },
  getCategories: () => fetchApi('/products/categories'),
  getProductCompare: (id, lat, lng) => fetchApi(`/products/${id}/compare?lat=${lat}&lng=${lng}`),
  aiSearch: (q, lat, lng) => fetchApi(`/products/ai-search?q=${encodeURIComponent(q)}&lat=${lat}&lng=${lng}`),
  aiMatch: (data) => fetchApi('/products/match', { method: 'POST', body: data }),
  createProduct: (data) => fetchApi('/products', { method: 'POST', body: data }),

  // Shops
  getShops: (params = {}) => {
    const query = buildQuery(params);
    return fetchApi(`/shops${query ? `?${query}` : ''}`);
  },
  getShopById: (id, lat, lng) => fetchApi(`/shops/${id}?lat=${lat}&lng=${lng}`),
  registerShop: (data) => fetchApi('/shops/register', { method: 'POST', body: data }),

  // Shop Owner Inventory & 1-Click Verification
  getShopInventory: (shopId) => fetchApi(`/shop-products/shop/${shopId}`),
  verifyShopProduct: (id, data) => fetchApi(`/shop-products/${id}/verify`, { method: 'POST', body: data }),
  verifyAllShopProducts: (shopId) => fetchApi(`/shop-products/shop/${shopId}/verify-all`, { method: 'POST' }),
  addShopProduct: (data) => fetchApi('/shop-products', { method: 'POST', body: data }),
  updateShopProduct: (id, data) => fetchApi(`/shop-products/${id}`, { method: 'PUT', body: data }),
  deleteShopProduct: (id) => fetchApi(`/shop-products/${id}`, { method: 'DELETE' }),
  trackInterest: (id, action) => fetchApi(`/shop-products/${id}/track-interest`, { method: 'POST', body: { action } }),

  // Product Requests
  getRequests: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchApi(`/requests?${query}`);
  },
  createRequest: (data) => fetchApi('/requests', { method: 'POST', body: data }),
  respondToRequest: (id, data) => fetchApi(`/requests/${id}/respond`, { method: 'POST', body: data }),

  // Reviews & Reports
  submitReview: (data) => fetchApi('/reviews', { method: 'POST', body: data }),
  submitReport: (data) => fetchApi('/reports', { method: 'POST', body: data }),

  // Admin
  getAdminMetrics: () => fetchApi('/admin/metrics'),
  approveShop: (id) => fetchApi(`/admin/shops/${id}/approve`, { method: 'POST' }),
  updateShopStatus: (id, status, reason) => fetchApi(`/admin/shops/${id}/status`, { method: 'POST', body: { status, reason } }),
  getReports: () => fetchApi('/reports'),
  resolveReport: (id, status, actionTaken) => fetchApi(`/reports/${id}`, { method: 'PATCH', body: { status, actionTaken } }),

  // Auth & Fast Demo Switch
  switchRole: (role, shopId) => fetchApi('/auth/switch-role', { method: 'POST', body: { role, shopId } }),
  login: (credentials) => fetchApi('/auth/login', { method: 'POST', body: credentials }),
  registerUser: (data) => fetchApi('/auth/register', { method: 'POST', body: data })
};
