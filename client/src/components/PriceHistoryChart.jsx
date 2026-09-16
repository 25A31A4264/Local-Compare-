import React from 'react';
import { TrendingDown, Calendar, ShieldCheck } from 'lucide-react';

export default function PriceHistoryChart({ priceHistory, productName }) {
  if (!priceHistory || !priceHistory.history || priceHistory.history.length === 0) {
    return null;
  }

  const history = priceHistory.history;
  const prices = history.map((h) => h.price);
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const range = maxP - minP || 1;

  // Calculate coordinates for SVG
  const width = 600;
  const height = 180;
  const padding = 35;

  const points = history.map((item, idx) => {
    const x = padding + (idx / (history.length - 1 || 1)) * (width - padding * 2);
    // Invert y: minP at bottom, maxP at top
    const y = height - padding - ((item.price - minP) / range) * (height - padding * 2);
    return { ...item, x, y };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={18} color="#6366f1" />
            <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>30-Day Price Trend</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Real recorded store prices across local shops
          </p>
        </div>

        {priceHistory.totalDropPercent > 0 && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.85rem',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '9999px',
              color: '#34d399',
              fontWeight: '700',
              fontSize: '0.875rem'
            }}
          >
            <TrendingDown size={16} />
            <span>Price Dropped {priceHistory.totalDropPercent}%</span>
          </div>
        )}
      </div>

      {/* SVG Line Chart */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', minWidth: '420px' }}>
          <defs>
            <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
          <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.12)" />

          {/* Area fill */}
          <path d={areaD} fill="url(#priceGrad)" />

          {/* Line stroke */}
          <path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Dots and Labels */}
          {points.map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <text
                x={pt.x}
                y={pt.y - 12}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
              >
                ₹{pt.price.toLocaleString('en-IN')}
              </text>
              <text
                x={pt.x}
                y={height - padding + 18}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="10"
                fontFamily="Inter, sans-serif"
              >
                {pt.date}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <ShieldCheck size={14} color="#10b981" />
        <span>Prices verified against actual offline in-store purchases and verified receipts.</span>
      </div>
    </div>
  );
}
