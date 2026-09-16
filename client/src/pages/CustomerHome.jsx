import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Tag,
  Radio,
  Map as MapIcon,
  Grid,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Navigation,
  Clock,
  Sparkles,
  Smartphone,
  Laptop,
  Tv,
  Home,
  Zap,
  Shirt,
  Footprints,
  Armchair,
  Utensils,
  HeartPulse,
  Briefcase,
  BookOpen,
  Wrench,
  ShoppingCart
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import AISearchBar from '../components/AISearchBar';
import ShopMap from '../components/ShopMap';

const CATEGORY_ICON_MAP = {
  Smartphone,
  Laptop,
  Tv,
  Home,
  Zap,
  Shirt,
  Sparkles,
  Footprints,
  Armchair,
  Utensils,
  HeartPulse,
  Briefcase,
  BookOpen,
  Wrench,
  ShoppingCart
};

export default function CustomerHome({ onOpenRequestModal }) {
  const {
    userLocation,
    radius,
    setRadius,
    categories,
    selectedCategory,
    setSelectedCategory,
    navigateToProduct,
    navigateToShop,
    setActiveTab
  } = useApp();

  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [nearbyShops, setNearbyShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLiveMap, setShowLiveMap] = useState(true);

  // Load products based on category, search, and radius
  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.getProducts({
        category: selectedCategory,
        search: searchInput,
        lat: userLocation.lat,
        lng: userLocation.lng,
        radius
      }),
      api.getShops({
        lat: userLocation.lat,
        lng: userLocation.lng,
        radius,
        category: selectedCategory !== 'all' ? selectedCategory : undefined
      })
    ])
      .then(([prods, shops]) => {
        setProducts(prods);
        setNearbyShops(shops);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [selectedCategory, searchInput, userLocation, radius]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Top showcased products for circular pedestals (like in FurDeco reference)
  const showcaseItems = products.slice(0, 4);

  return (
    <div className="container">
      {/* 1. Hero Section (FurDeco Warm Luxury Architectural Banner) */}
      <section className="hero-backdrop-banner">
        <div className="hero-banner-inner">
          <div className="hero-tagline-badge">
            <ShieldCheck size={14} />
            <span>Local Price & Stock Discovery</span>
          </div>

          <h1>Transform how you shop with verified local store prices</h1>
          <p className="subtitle">
            Know the real price and actual stock availability before you step out of your home.
          </p>

          {/* Floating Pill Search Card */}
          <div className="search-card">
            <form onSubmit={handleSearchSubmit}>
              <div className="search-input-row">
                <Search size={19} color="var(--text-secondary)" />
                <input
                  type="text"
                  placeholder="What product are you looking for? (e.g. Samsung 55 inch TV, iPhone 15...)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => setSearchInput('')}
                    style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('browse-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary btn-sm"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Search Store Deals
                </button>
              </div>

              {/* Radius filter pills */}
              <div className="radius-filter-row">
                <div className="radius-label">
                  <MapPin size={14} color="#10b981" />
                  <span>Within {userLocation.name.split(',')[0]}:</span>
                </div>

                <div className="radius-options">
                  {[1, 5, 10, 25].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRadius(r)}
                      className={`radius-chip ${radius === r ? 'active' : ''}`}
                    >
                      {r} km
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('map')}
                  className="btn btn-outline btn-sm"
                  style={{ display: 'inline-flex', gap: '0.35rem' }}
                >
                  <MapIcon size={14} color="#10b981" /> Full Store Map
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Circular Pedestals Showcase (Exactly matching the Reference Image) */}
      <section className="showcase-section">
        <div className="showcase-header">
          <div>
            <h2>Explore our<br />newest verified collections</h2>
          </div>
          <div className="showcase-arrows">
            <button
              onClick={() => {
                const el = document.getElementById('browse-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="arrow-circle-btn"
              title="Previous collection"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('browse-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="arrow-circle-btn"
              title="Next collection"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Circular pedestals row */}
        <div className="pedestals-grid">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateToProduct(item.id)}
              className="pedestal-item"
            >
              <div className="pedestal-circle">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="pedestal-title">{item.name}</div>
              <div className="pedestal-price">
                From ₹{(item.lowestPrice || item.mrp).toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            const el = document.getElementById('categories-list');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn btn-primary"
          style={{ padding: '0.75rem 2rem' }}
        >
          View all 15 categories
        </button>
      </section>

      {/* 3. Benefits / Trust Section (Directly from Reference Image layout) */}
      <section className="benefits-section">
        <h2>Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-col">
            <div className="benefit-icon-circle">
              <ShieldCheck size={24} strokeWidth={1.8} />
            </div>
            <div className="benefit-title">Verified Offline Prices</div>
            <div className="benefit-desc">
              Confirmed directly by local shopkeepers within hours. No outdated false quotes.
            </div>
          </div>

          <div className="benefit-col">
            <div className="benefit-icon-circle">
              <Clock size={24} strokeWidth={1.8} />
            </div>
            <div className="benefit-title">Real-Time In-Store Stock</div>
            <div className="benefit-desc">
              Live status: In Stock, Few Left, or Out of Stock so you never travel in vain.
            </div>
          </div>

          <div className="benefit-col">
            <div className="benefit-icon-circle">
              <Navigation size={24} strokeWidth={1.8} />
            </div>
            <div className="benefit-title">Direct Store Connect</div>
            <div className="benefit-desc">
              One-tap direct Call, WhatsApp store verification, and GPS driving directions.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Map Section on Homepage */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-card"
          style={{
            padding: '1.75rem',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                🗺️ Live Store & Price Map ({nearbyShops.length} Stores in {radius} km)
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Real-time GPS positions of physical retail shops with confirmed live deals
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setShowLiveMap(!showLiveMap)}
                className="btn btn-secondary btn-sm"
              >
                {showLiveMap ? 'Hide Map' : 'Show Map'}
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className="btn btn-primary btn-sm"
              >
                Full Screen Map
              </button>
            </div>
          </div>

          {showLiveMap && (
            <ShopMap
              userLocation={userLocation}
              radius={radius}
              shops={nearbyShops}
              height="380px"
              showRadiusCircle={true}
              onSelectShop={navigateToShop}
            />
          )}
        </div>
      </section>

      {/* 5. AI Product Search Assistant */}
      <AISearchBar onSelectProduct={navigateToProduct} />

      {/* 6. 15 Product Categories Grid */}
      <section id="categories-list" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
              Browse by Category (15 Categories)
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Explore electronics, appliances, fashion, furniture, grocery and more
            </p>
          </div>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              style={{ fontSize: '0.85rem', color: '#10b981', cursor: 'pointer', fontWeight: 600 }}
            >
              Reset to All
            </button>
          )}
        </div>

        <div className="categories-grid">
          <div
            onClick={() => setSelectedCategory('all')}
            className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            <div className="category-icon">
              <Tag size={20} />
            </div>
            <span className="category-name">All Items</span>
          </div>

          {categories.map((cat) => {
            const IconComponent = CATEGORY_ICON_MAP[cat.icon] || Tag;
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-card ${isSelected ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-icon">
                  <IconComponent size={20} />
                </div>
                <span className="category-name">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Catalog Product Comparison Cards */}
      <section id="browse-catalog" style={{ textAlign: 'left', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              {selectedCategory === 'all' ? 'Featured Verified Products' : `Products in ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}`}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Showing verified prices across local stores within {radius} km of {userLocation.name}
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {products.length} product{products.length === 1 ? '' : 's'} available
          </span>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            Verifying nearby store deals...
          </div>
        ) : products.length === 0 ? (
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              No products found matching your current filter in this radius.
            </p>
            <button onClick={onOpenRequestModal} className="btn btn-primary">
              Request This Product from Local Stores
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigateToProduct(prod.id)}
                className="glass-card"
                style={{
                  padding: '1.35rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div style={{ width: '100%', height: '190px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem', background: 'var(--bg-pedestal)' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onMouseOver={(e) => (e.target.style.transform = 'scale(1.04)')}
                      onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                    />
                  </div>

                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {prod.brand} • {prod.category?.replace('_', ' ')}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '0.25rem', lineHeight: 1.35, minHeight: '2.8rem' }}>
                    {prod.name}
                  </h4>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Best Local Deal:</span>
                    <span style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      ₹{(prod.lowestPrice || prod.mrp).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>
                      📍 {prod.shopCount} store{prod.shopCount === 1 ? '' : 's'} ({prod.minDistance || 1.2} km)
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      Compare <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 8. About Section (matching FurDeco reference) */}
      <section style={{ textAlign: 'center', padding: '3.5rem 1rem 2rem', borderTop: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
          About LocalCompare
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
          At LocalCompare, we believe in transparent local brick-and-mortar commerce. We empower shoppers to verify real offline store pricing and live stock before traveling, helping local shop owners connect with high-intent buyers in their neighborhood.
        </p>
        <button
          onClick={() => setActiveTab('map')}
          className="btn btn-secondary"
          style={{ padding: '0.65rem 1.75rem' }}
        >
          Explore Verified Local Stores
        </button>
      </section>
    </div>
  );
}
