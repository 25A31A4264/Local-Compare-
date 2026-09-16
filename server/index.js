import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import shopRoutes from './routes/shops.js';
import shopProductRoutes from './routes/shopProducts.js';
import requestRoutes from './routes/requests.js';
import reviewRoutes from './routes/reviews.js';
import reportRoutes from './routes/reports.js';
import adminRoutes from './routes/admin.js';

import { db } from './data/database.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Permissive CORS for local dev and cloud deployment (Vercel, Render, etc.)
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);
app.options('*', cors());

app.use(express.json());

// Request logging for dev
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString().slice(11, 19)}] ${req.method} ${req.url}`);
  next();
});

// Root route - returns API details and status
app.get('/', (req, res, next) => {
  // If client dist exists and this is not an explicit JSON request, fall through to static serving
  const distPath = path.join(__dirname, '../client/dist');
  if (fs.existsSync(distPath) && req.accepts('html')) {
    return next();
  }
  res.json({
    status: 'ok',
    name: 'LocalCompare API Server',
    version: '1.0.0',
    message: 'Backend API is running successfully!',
    endpoints: {
      health: '/api/health',
      categories: '/api/categories',
      products: '/api/products',
      shops: '/api/shops',
      requests: '/api/requests',
      admin: '/api/admin'
    },
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/shop-products', shopProductRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);

// Category shortcut alias
app.get('/api/categories', (req, res) => {
  const categories = db.getCollection('categories');
  res.json(categories || []);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'LocalCompare API',
    tagline: 'Compare. Verify. Visit. Buy.',
    timestamp: new Date().toISOString()
  });
});

// Static assets from client build (for unified cloud deployment)
const clientDist = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Render-compatible host and port binding (process.env.PORT and 0.0.0.0)
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`🚀 LocalCompare API server running on port ${PORT} (${HOST})`);
  console.log(`📡 Local: http://localhost:${PORT}`);
  console.log(`🩺 Health: http://localhost:${PORT}/api/health`);
});

