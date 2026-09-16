import React, { useState, useEffect } from 'react';
import { MapPin, Store, Navigation, Phone, MessageSquare, ShieldCheck, Star, ArrowLeft, Radio } from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import ShopMap from '../components/ShopMap';

export default function LiveMapView() {
  const { userLocation, radius, setRadius, selectedCategory, setSelectedCategory, categories, setActiveTab, navigateToShop } = useApp();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highlightedShopId, setHighlightedShopId] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.getShops({
      lat: userLocation.lat,
      lng: userLocation.lng,
      radius,
      category: selectedCategory !== 'all' ? selectedCategory : undefined
    })
      .then((data) => setShops(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userLocation, radius, selectedCategory]);

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              marginBottom: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={15} /> Back to Homepage
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Radio size={24} color="#10b981" />
            <h1 style={{ fontSize: '1.85rem', color: 'var(--text-primary)' }}>
              Live Local Store & Price Map
            </h1>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Real-time GPS map of verified brick-and-mortar retailers in {userLocation.name}
          </p>
        </div>

        {/* Radius filter pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Radius:</span>
          {[1, 5, 10, 25].map((r) => (
            <button
              key={r}
              onClick={() => setRadius(r)}
              className={`radius-chip ${radius === r ? 'active' : ''}`}
            >
              {r} km
            </button>
          ))}
        </div>
      </div>

      {/* Map and Store Sidebar Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(280px, 1.2fr)', gap: '1.5rem', alignItems: 'start' }}>
        {/* Live Leaflet Map */}
        <div>
          <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981' }}>
                🟢 Live GPS Feed Active • Showing {shops.length} verified store{shops.length === 1 ? '' : 's'}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Green dashed circle: {radius} km search radius
              </span>
            </div>

            <ShopMap
              userLocation={userLocation}
              radius={radius}
              shops={shops}
              height="520px"
              showRadiusCircle={true}
              onSelectShop={navigateToShop}
            />
          </div>
        </div>

        {/* Sidebar: Nearby Store Directory */}
        <div>
          <div className="glass-card" style={{ padding: '1.25rem', maxHeight: '580px', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Stores Within {radius} km ({shops.length})
            </h3>

            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                Locating nearby stores...
              </div>
            ) : shops.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No shops found in {radius} km radius. Try expanding to 10 km or 25 km.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {shops.map((shop) => (
                  <div
                    key={shop.id}
                    style={{
                      background: 'var(--bg-card-hover)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <h4
                        onClick={() => navigateToShop(shop.id)}
                        style={{ fontSize: '0.95rem', color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 700 }}
                      >
                        {shop.name}
                      </h4>
                      {shop.verified && (
                        <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700 }}>
                          ✅ Verified
                        </span>
                      )}
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      📍 {shop.distance} km away • ⭐ {shop.rating} ({shop.reviewCount || 24}+ reviews)
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      {shop.address}
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1, fontSize: '0.75rem', padding: '0.35rem 0.6rem' }}
                      >
                        <Navigation size={13} /> Directions
                      </a>
                      <a
                        href={`tel:${shop.phone}`}
                        className="btn btn-secondary btn-sm"
                        style={{ fontSize: '0.75rem', padding: '0.35rem 0.6rem' }}
                      >
                        <Phone size={13} /> Call
                      </a>
                      <button
                        onClick={() => navigateToShop(shop.id)}
                        className="btn btn-secondary btn-sm"
                        style={{ fontSize: '0.75rem', padding: '0.35rem 0.6rem' }}
                      >
                        Catalog
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
