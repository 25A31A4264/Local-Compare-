import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as seeds from './seedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'db.json');

// Haversine formula for real-time distance in kilometers
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 2.5; // fallback
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

class Database {
  constructor() {
    this.data = null;
    this.init();
  }

  init() {
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        this.data = JSON.parse(raw);
      } catch (err) {
        console.error('Failed to parse existing db.json, re-initializing from seeds:', err);
        this.resetToSeed();
      }
    } else {
      this.resetToSeed();
    }
  }

  resetToSeed() {
    this.data = {
      categories: seeds.categories,
      users: seeds.users,
      shops: seeds.shops,
      products: seeds.products,
      shopProducts: seeds.shopProducts,
      priceHistories: seeds.priceHistories,
      reviews: seeds.reviews,
      reports: seeds.reports,
      productRequests: seeds.productRequests
    };
    this.save();
  }

  save() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error writing db.json:', err);
    }
  }

  // Collection Accessors
  getCollection(name) {
    if (!this.data[name]) {
      this.data[name] = [];
    }
    return this.data[name];
  }

  find(collectionName, predicate) {
    const coll = this.getCollection(collectionName);
    if (!predicate) return coll;
    return coll.filter(predicate);
  }

  findById(collectionName, id) {
    const coll = this.getCollection(collectionName);
    return coll.find((item) => item.id === id);
  }

  create(collectionName, record) {
    const coll = this.getCollection(collectionName);
    coll.push(record);
    this.save();
    return record;
  }

  update(collectionName, id, updates) {
    const coll = this.getCollection(collectionName);
    const index = coll.findIndex((item) => item.id === id);
    if (index === -1) return null;
    coll[index] = { ...coll[index], ...updates, updatedAt: new Date().toISOString() };
    this.save();
    return coll[index];
  }

  remove(collectionName, id) {
    const coll = this.getCollection(collectionName);
    const index = coll.findIndex((item) => item.id === id);
    if (index === -1) return false;
    coll.splice(index, 1);
    this.save();
    return true;
  }
}

export const db = new Database();
