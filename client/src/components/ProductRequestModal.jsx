import React, { useState } from 'react';
import { Send, X, HelpCircle } from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';

export default function ProductRequestModal({ isOpen, onClose }) {
  const { userLocation, showToast } = useApp();
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('mobiles');
  const [budget, setBudget] = useState('');
  const [radiusKm, setRadiusKm] = useState(10);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName) return;

    setLoading(true);
    try {
      await api.createRequest({
        productName,
        category,
        budget: budget ? Number(budget) : undefined,
        radiusKm: Number(radiusKm),
        notes,
        lat: userLocation.lat,
        lng: userLocation.lng
      });
      showToast(`Request for "${productName}" broadcasted to verified local stores!`);
      onClose();
    } catch (err) {
      console.error(err);
      showToast('Error broadcasting request. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HelpCircle color="#6366f1" size={22} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Can't Find a Product? Request It!</h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--text-secondary)' }}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Broadcast your requirement to all verified offline retailers within your radius. Shops will reply with price quotes & live availability.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#fff' }}>
              Product Name / Model
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sony WH-1000XM6 or iPad Air M2 256GB"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#fff' }}>
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                <option value="mobiles">Mobiles</option>
                <option value="laptops">Laptops</option>
                <option value="tvs">TVs</option>
                <option value="home_appliances">Home Appliances</option>
                <option value="accessories">Accessories</option>
                <option value="hardware">Hardware</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#fff' }}>
                Your Target Budget (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 30000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#fff' }}>
              Search Radius: <span style={{ color: '#10b981' }}>{radiusKm} km</span>
            </label>
            <input
              type="range"
              min="1"
              max="25"
              value={radiusKm}
              onChange={(e) => setRadiusKm(e.target.value)}
              style={{ width: '100%', accentColor: '#10b981' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#fff' }}>
              Notes / Color Preferences
            </label>
            <input
              type="text"
              placeholder="e.g. Need Black color, ready to buy today"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn btn-indigo">
              <Send size={16} />
              {loading ? 'Broadcasting...' : 'Broadcast to Local Shops'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
