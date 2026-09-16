import React, { useState } from 'react';
import { Award, Info, Phone, MessageSquare, Navigation, CheckCircle } from 'lucide-react';
import VerificationBadge from './VerificationBadge';
import StockBadge from './StockBadge';

export default function BestDealCard({ deal, reason, onSelectShop }) {
  const [showExplanation, setShowExplanation] = useState(false);

  if (!deal) return null;

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(17, 24, 39, 0.95) 100%)',
        border: '1.5px solid rgba(16, 185, 129, 0.4)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        marginBottom: '2rem',
        position: 'relative',
        boxShadow: '0 8px 30px rgba(16, 185, 129, 0.18)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '9999px',
              background: '#10b981',
              color: '#000'
            }}
          >
            <Award size={20} strokeWidth={2.5} />
          </span>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#34d399' }}>
              Algorithm Recommended
            </span>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
              🏆 Best Overall Deal: {deal.shopName}
            </h3>
          </div>
        </div>

        <button
          onClick={() => setShowExplanation(!showExplanation)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '0.35rem 0.8rem',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            cursor: 'pointer'
          }}
        >
          <Info size={14} />
          <span>{showExplanation ? 'Hide Scoring' : 'Why this deal?'}</span>
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
            ₹{deal.price.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            📍 {deal.distance} km away • ⭐ {deal.shopRating} ({deal.shopReviewCount || 40}+ reviews)
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <VerificationBadge status={deal.freshnessBadge} label={deal.freshnessLabel} />
          <StockBadge status={deal.stockStatus} quantity={deal.quantity} />
        </div>

        <div className="action-buttons-group">
          <a
            href={`tel:${deal.shopPhone}`}
            className="btn btn-secondary btn-sm"
            title="Call Store"
            style={{ display: 'inline-flex', gap: '0.35rem' }}
          >
            <Phone size={14} color="#3b82f6" /> Call
          </a>
          <a
            href={`https://wa.me/${deal.shopWhatsapp || ''}?text=Hi%20${encodeURIComponent(deal.shopName)},%20is%20the%20price%20₹${deal.price}%20still%20available?`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
            title="WhatsApp Shop"
            style={{ display: 'inline-flex', gap: '0.35rem' }}
          >
            <MessageSquare size={14} color="#25d366" /> WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${deal.shopLat || 12.9783},${deal.shopLng || 77.6408}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
            title="Navigate in Maps"
          >
            <Navigation size={14} /> Directions
          </a>
        </div>
      </div>

      {reason && (
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
            color: '#e5e7eb',
            borderLeft: '3px solid #10b981'
          }}
        >
          💡 <strong>Why we picked this:</strong> {reason}
        </div>
      )}

      {/* Scoring Breakdown Accordion */}
      {showExplanation && deal.scores && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: '#fff' }}>
            LocalCompare Deal Score Breakdown (Total: {deal.scores.total} / 100)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', fontSize: '0.8rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--text-secondary)' }}>Price Value</div>
              <div style={{ fontWeight: 700, color: '#34d399' }}>{deal.scores.priceScore} / 40 pts</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--text-secondary)' }}>Proximity</div>
              <div style={{ fontWeight: 700, color: '#60a5fa' }}>{deal.scores.distanceScore} / 25 pts</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--text-secondary)' }}>Price Freshness</div>
              <div style={{ fontWeight: 700, color: '#fbbf24' }}>{deal.scores.freshnessScore} / 20 pts</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--text-secondary)' }}>Live Stock</div>
              <div style={{ fontWeight: 700, color: '#a78bfa' }}>{deal.scores.stockScore} / 10 pts</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--text-secondary)' }}>Shop Rating</div>
              <div style={{ fontWeight: 700, color: '#f472b6' }}>{deal.scores.ratingScore} / 5 pts</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
