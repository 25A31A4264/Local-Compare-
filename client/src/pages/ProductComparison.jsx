import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  ShieldCheck,
  Phone,
  MessageSquare,
  Navigation,
  AlertTriangle,
  Award,
  Store,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  Star
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import VerificationBadge from '../components/VerificationBadge';
import StockBadge from '../components/StockBadge';
import BestDealCard from '../components/BestDealCard';
import ShopMap from '../components/ShopMap';
import PriceHistoryChart from '../components/PriceHistoryChart';
import ReportModal from '../components/ReportModal';

export default function ProductComparison() {
  const {
    compareProductId,
    userLocation,
    setActiveTab,
    navigateToShop,
    showToast
  } = useApp();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reportingShop, setReportingShop] = useState(null);

  // Review Form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewShopId, setReviewShopId] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [priceWasAccurate, setPriceWasAccurate] = useState(true);

  const loadData = () => {
    setLoading(true);
    api.getProductCompare(compareProductId, userLocation.lat, userLocation.lng)
      .then((res) => {
        setData(res);
        if (res.deals && res.deals.length > 0) {
          setReviewShopId(res.deals[0].shopId);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, [compareProductId, userLocation]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewShopId) return;
    try {
      await api.submitReview({
        shopId: reviewShopId,
        rating,
        comment,
        priceWasAccurate
      });
      showToast('Review submitted! Thank you for verifying price accuracy.');
      setShowReviewForm(false);
      setComment('');
      loadData();
    } catch (err) {
      console.error(err);
      showToast('Failed to submit review');
    }
  };

  if (loading || !data) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Comparing real-time store prices and stock...</p>
      </div>
    );
  }

  const { product, deals, bestPriceDealId, nearestDealId, bestOverallDealId, bestDealReason, priceHistory, reviews } = data;

  const bestPriceDeal = deals.find((d) => d.id === bestPriceDealId);
  const nearestDeal = deals.find((d) => d.id === nearestDealId);
  const bestOverallDeal = deals.find((d) => d.id === bestOverallDealId);

  // Mark shops with special flags for Map
  const mapShops = deals.map((d) => ({
    ...d,
    isBestOverall: d.id === bestOverallDealId
  }));

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
      {/* Back button */}
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

      {/* Product Hero Header */}
      <div
        className="glass-card"
        style={{
          padding: '1.75rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}
        />

        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#10b981', fontWeight: 700, letterSpacing: '0.05em' }}>
            {product.brand} • {product.category?.replace('_', ' ')} • Model: {product.modelNumber}
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#fff', margin: '0.35rem 0 0.75rem' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Catalog MRP: </span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                ₹{product.mrp?.toLocaleString('en-IN')}
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Best Local Store Price: </span>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#34d399' }}>
                ₹{bestPriceDeal?.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Summary Highlights Bar: Best Price, Nearest, Best Overall */}
      <div className="deal-summary-bar">
        {/* Best Price */}
        <div className="summary-card best-price">
          <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#60a5fa', marginBottom: '0.35rem' }}>
            💰 Lowest Price In Town
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
            ₹{bestPriceDeal?.price.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            Available at <strong>{bestPriceDeal?.shopName}</strong> ({bestPriceDeal?.distance} km)
          </div>
        </div>

        {/* Nearest */}
        <div className="summary-card nearest">
          <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.35rem' }}>
            📍 Nearest Available Store
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
            {nearestDeal?.distance} km away
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            <strong>{nearestDeal?.shopName}</strong> (₹{nearestDeal?.price.toLocaleString('en-IN')})
          </div>
        </div>

        {/* Best Overall Deal */}
        <div className="summary-card best-overall">
          <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#34d399', marginBottom: '0.35rem' }}>
            🏆 Best Overall Deal
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
            {bestOverallDeal?.shopName}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            ₹{bestOverallDeal?.price.toLocaleString('en-IN')} • {bestOverallDeal?.distance} km • Score: {bestOverallDeal?.scores?.total}/100
          </div>
        </div>
      </div>

      {/* 14. Best Overall Deal Highlight Component */}
      <BestDealCard deal={bestOverallDeal} reason={bestDealReason} onSelectShop={navigateToShop} />

      {/* 5. Heart of Application: Comparison Table */}
      <div className="comparison-container">
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Local Offline Store Comparison</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              Prices and stock verified directly with retail managers
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
            🟢 Live Verification System Active
          </span>
        </div>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Shop</th>
                <th>Price</th>
                <th>Distance</th>
                <th>Stock Status</th>
                <th>Price Verification</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => {
                const isBestOverall = deal.id === bestOverallDealId;
                const isLowestPrice = deal.id === bestPriceDealId;

                return (
                  <tr key={deal.id} className={isBestOverall ? 'deal-highlight-row' : ''}>
                    {/* Shop details */}
                    <td>
                      <div
                        onClick={() => navigateToShop(deal.shopId)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>{deal.shopName}</span>
                          {deal.shopVerified && (
                            <span title="Verified Retailer" style={{ color: '#10b981', fontSize: '0.8rem' }}>
                              ✅
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          ⭐ {deal.shopRating} ({deal.shopReviewCount || 20}+ reviews) • {deal.shopAddress?.split(',')[0]}
                        </div>
                        {isBestOverall && (
                          <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 800, color: '#34d399', marginTop: '0.25rem' }}>
                            ★ BEST OVERALL DEAL
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Price */}
                    <td>
                      <div className="price-cell">
                        ₹{deal.price.toLocaleString('en-IN')}
                      </div>
                      {isLowestPrice && (
                        <span style={{ fontSize: '0.725rem', color: '#60a5fa', fontWeight: 700 }}>
                          LOWEST PRICE
                        </span>
                      )}
                    </td>

                    {/* Distance */}
                    <td>
                      <div className="distance-cell">
                        📍 {deal.distance} km
                      </div>
                    </td>

                    {/* Stock Status */}
                    <td>
                      <StockBadge status={deal.stockStatus} quantity={deal.quantity} />
                    </td>

                    {/* 6. Price Verification Badge */}
                    <td>
                      <VerificationBadge status={deal.freshnessBadge} label={deal.freshnessLabel} />
                    </td>

                    {/* Quick Action buttons */}
                    <td style={{ textAlign: 'right' }}>
                      <div className="action-buttons-group" style={{ justifyContent: 'flex-end' }}>
                        <a
                          href={`tel:${deal.shopPhone}`}
                          className="icon-action-btn call"
                          title={`Call ${deal.shopName}`}
                        >
                          <Phone size={15} />
                        </a>
                        <a
                          href={`https://wa.me/${deal.shopWhatsapp || ''}?text=Hi%20${encodeURIComponent(deal.shopName)},%20I%20saw%20${encodeURIComponent(product.name)}%20for%20₹${deal.price}%20on%20LocalCompare.%20Is%20it%20available?`}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-action-btn whatsapp"
                          title="WhatsApp Store"
                        >
                          <MessageSquare size={15} />
                        </a>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${deal.shopLat},${deal.shopLng}`}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-action-btn directions"
                          title="Get Directions"
                        >
                          <Navigation size={15} />
                        </a>
                        <button
                          onClick={() => setReportingShop(deal)}
                          className="icon-action-btn"
                          title="Report Wrong Price / Stock Issue"
                          style={{ color: '#ef4444' }}
                        >
                          <AlertTriangle size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9. Map Integration Component */}
      <ShopMap userLocation={userLocation} shops={mapShops} onSelectShop={navigateToShop} />

      {/* 15. Price History Graph */}
      <PriceHistoryChart priceHistory={priceHistory} productName={product.name} />

      {/* 16. Customer Reviews & Price Accuracy Confirmation */}
      <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Verified Customer Reviews & Price Audit</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Real shopper feedback on store pricing truthfulness and in-store experience
            </p>
          </div>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="btn btn-primary btn-sm"
          >
            {showReviewForm ? 'Cancel Review' : 'Rate a Store Visit'}
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <form
            onSubmit={handleReviewSubmit}
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem'
            }}
          >
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>
              Did you visit a store for this product?
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Which store did you visit?
                </label>
                <select
                  value={reviewShopId}
                  onChange={(e) => setReviewShopId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff'
                  }}
                >
                  {deals.map((d) => (
                    <option key={d.shopId} value={d.shopId}>
                      {d.shopName} (₹{d.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Overall Rating (1 - 5 Stars)
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff'
                  }}
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                  <option value={3}>⭐⭐⭐ (3 - Average)</option>
                  <option value={2}>⭐⭐ (2 - Poor)</option>
                  <option value={1}>⭐ (1 - Terrible)</option>
                </select>
              </div>
            </div>

            {/* Crucial Question: Was displayed price correct? */}
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 600 }}>
                ⭐ Was the displayed price on LocalCompare accurate in the shop?
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setPriceWasAccurate(true)}
                  className={`btn btn-sm ${priceWasAccurate ? 'btn-primary' : 'btn-secondary'}`}
                >
                  <CheckCircle2 size={14} /> YES, Price Was Correct
                </button>
                <button
                  type="button"
                  onClick={() => setPriceWasAccurate(false)}
                  className={`btn btn-sm ${!priceWasAccurate ? 'btn-primary' : 'btn-secondary'}`}
                  style={!priceWasAccurate ? { background: '#ef4444' } : {}}
                >
                  <XCircle size={14} /> NO, Quoted Higher
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                Comments / Feedback
              </label>
              <textarea
                rows="2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your in-store purchasing experience..."
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-sm">
              Post Verified Review
            </button>
          </form>
        )}

        {/* Existing Reviews List */}
        {reviews.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            No reviews posted for these stores yet. Be the first to confirm in-store pricing!
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '0.85rem' }}>
            {reviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>
                      {rev.customerName}
                    </span>
                    <span style={{ color: '#fbbf24', fontSize: '0.85rem' }}>
                      {'★'.repeat(rev.rating)}
                    </span>
                  </div>

                  {rev.priceWasAccurate ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        color: '#34d399',
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={12} /> Displayed Price Was 100% Accurate
                    </span>
                  ) : (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        color: '#f87171',
                        background: 'rgba(239, 68, 68, 0.12)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        fontWeight: 600
                      }}
                    >
                      <XCircle size={12} /> Price Mismatch Reported
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specifications Box */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem' }}>Technical Specifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{key}</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Report Modal */}
      <ReportModal
        isOpen={Boolean(reportingShop)}
        onClose={() => setReportingShop(null)}
        shop={reportingShop}
        product={product}
      />
    </div>
  );
}
