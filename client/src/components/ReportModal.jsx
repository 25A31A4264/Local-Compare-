import React, { useState } from 'react';
import { AlertOctagon, X } from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';

export default function ReportModal({ isOpen, onClose, shop, product }) {
  const { showToast } = useApp();
  const [reason, setReason] = useState('wrong_price');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.submitReport({
        shopId: shop?.shopId || shop?.id,
        productId: product?.id,
        reason,
        details,
        reportedBy: 'Customer Verification Patrol'
      });
      showToast('Report submitted! Our moderation team investigates all price discrepancies.');
      onClose();
    } catch (err) {
      console.error(err);
      showToast('Failed to submit report. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertOctagon color="#ef4444" size={22} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Report Incorrect Information</h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--text-secondary)' }}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Reporting discrepancies helps protect the entire community from wasted trips. Verified false prices reduce shop trust rating.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
              Reason for Report
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                outline: 'none'
              }}
            >
              <option value="wrong_price">Wrong Price (Store quoted higher price)</option>
              <option value="out_of_stock">Product Unavailable (Out of stock despite 'In Stock' badge)</option>
              <option value="fake_shop">Fake or Closed Shop</option>
              <option value="wrong_location">Wrong GPS Location</option>
              <option value="product_description_incorrect">Product Specifications / Model Mismatch</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
              Additional Details (e.g. Quoted Price / Experience)
            </label>
            <textarea
              rows="3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="e.g. Visited the shop today, they quoted ₹50,000 instead of ₹47,500..."
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
              style={{ background: '#ef4444' }}
            >
              {submitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
