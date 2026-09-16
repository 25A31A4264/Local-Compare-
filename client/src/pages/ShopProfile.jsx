import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Store,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import VerificationBadge from '../components/VerificationBadge';
import StockBadge from '../components/StockBadge';

export default function ShopProfile() {
  const { viewShopId, userLocation, setActiveTab, navigateToProduct } = useApp();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getShopById(viewShopId, userLocation.lat, userLocation.lng)
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [viewShopId, userLocation]);

  if (loading || !data) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading shop profile and live catalog...</p>
      </div>
    );
  }

  const { shop, inventory, reviews } = data;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
      <button
        onClick={() => setActiveTab('home')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginBottom: '1.5rem',
          cursor: 'pointer'
        }}
      >
        <ArrowLeft size={16} /> Back to Search
      </button>

      {/* Shop Hero Card */}
      <div
        className="glass-card"
        style={{
          padding: '2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <img
          src={shop.photoUrl}
          alt={shop.name}
          style={{
            width: '160px',
            height: '160px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}
        />

        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.85rem', color: '#fff' }}>{shop.name}</h1>
            {shop.verified && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: '1px solid rgba(16, 185, 129, 0.35)'
                }}
              >
                <ShieldCheck size={14} /> Verified Shop ✅
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', margin: '0.65rem 0 1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontWeight: 700 }}>
              <Star size={16} fill="#fbbf24" /> {shop.rating} ({shop.reviewCount || 30}+ reviews)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={16} color="#10b981" /> {shop.distance || 2.1} km away • {shop.address}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={16} color="#60a5fa" /> {shop.openingHours || '9:00 AM – 9:00 PM'}
            </span>
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', maxWidth: '700px' }}>
            {shop.description}
          </p>

          {/* Contact & Navigation Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${shop.phone}`}
              className="btn btn-secondary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <Phone size={16} color="#3b82f6" /> Call Store ({shop.phone})
            </a>
            <a
              href={`https://wa.me/${shop.whatsapp || ''}?text=Hello%20${encodeURIComponent(shop.name)},%20I%20am%20interested%20in%20your%20products%20on%20LocalCompare.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <MessageSquare size={16} color="#25d366" /> WhatsApp
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Verified Product Inventory */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Verified Available Products</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Live in-store inventory and confirmed spot pricing
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
            {inventory.length} Verified Listing{inventory.length === 1 ? '' : 's'}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {inventory.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateToProduct(item.productId)}
              className="glass-card"
              style={{
                padding: '1.25rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.85rem' }}
                />
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10b981', fontWeight: 700 }}>
                  {item.productBrand}
                </div>
                <h4 style={{ fontSize: '1rem', color: '#fff', marginTop: '0.2rem', lineHeight: 1.3 }}>
                  {item.productName}
                </h4>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Store Price:</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#34d399' }}>
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <StockBadge status={item.stockStatus} quantity={item.quantity} />
                  <VerificationBadge status={item.verificationStatus} label={item.lastPriceConfirmedByOwner ? 'Verified' : 'Updated'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
