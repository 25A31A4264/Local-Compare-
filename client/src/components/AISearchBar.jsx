import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Store } from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';

export default function AISearchBar({ onSelectProduct }) {
  const { userLocation } = useApp();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  const suggestedPrompts = [
    'I need a good washing machine for a family of 4 under 30k',
    'Samsung 55 inch 4K TV near me',
    'Apple iPhone 15 under 70k in stock',
    'Bosch impact drill kit for home repairs'
  ];
  const samplePrompts = suggestedPrompts;

  const handleSearch = async (textToSearch) => {
    const q = textToSearch || query;
    if (!q.trim()) return;

    setLoading(true);
    try {
      const data = await api.aiSearch(q, userLocation.lat, userLocation.lng);
      setAiResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(17, 24, 39, 0.85) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        marginBottom: '3rem',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.15)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            padding: '0.35rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          <Sparkles size={13} />
          <span>AI Semantic Search & Matching</span>
        </div>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Describe what you need in plain everyday language
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="e.g. I need a good washing machine for a family of 4 under 30k..."
          style={{
            flex: 1,
            padding: '0.85rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-lg)',
            color: '#fff',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <button
          onClick={() => handleSearch()}
          disabled={loading}
          className="btn btn-indigo"
          style={{ padding: '0.85rem 1.5rem', whiteSpace: 'nowrap' }}
        >
          {loading ? 'Analyzing...' : 'Ask AI'}
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Suggested prompts */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {suggestedPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(p);
              handleSearch(p);
            }}
            style={{
              fontSize: '0.775rem',
              color: '#a5b4fc',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '9999px',
              padding: '0.25rem 0.65rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => (e.target.style.background = 'rgba(99, 102, 241, 0.2)')}
            onMouseOut={(e) => (e.target.style.background = 'rgba(99, 102, 241, 0.1)')}
          >
            "{p}"
          </button>
        ))}
      </div>

      {/* AI Parsed Results */}
      {aiResult && (
        <div
          style={{
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#e0e7ff' }}>
              🧠 AI Extracted Intent:
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                background: 'rgba(99, 102, 241, 0.2)',
                color: '#c7d2fe',
                padding: '0.25rem 0.7rem',
                borderRadius: '9999px',
                border: '1px solid rgba(99, 102, 241, 0.4)'
              }}
            >
              {aiResult.aiInterpretation?.explanation}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Found {aiResult.totalFound} matching product{aiResult.totalFound === 1 ? '' : 's'} across nearby stores
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {aiResult.results?.map((item) => (
              <div
                key={item.product.id}
                onClick={() => onSelectProduct && onSelectProduct(item.product.id)}
                className="glass-card"
                style={{
                  padding: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.925rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.product.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {item.bestDeal ? (
                      <span style={{ color: '#34d399', fontWeight: 700 }}>
                        From ₹{item.bestDeal.price?.toLocaleString('en-IN')}
                      </span>
                    ) : (
                      <span>MRP ₹{item.product.mrp?.toLocaleString('en-IN')}</span>
                    )}
                    {' • '}
                    <span>{item.totalShops} local stores</span>
                  </div>
                  {item.bestDeal && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Best deal at {item.bestDeal.shopName} ({item.bestDeal.distance} km)
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
