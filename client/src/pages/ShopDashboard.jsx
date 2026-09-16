import React, { useState, useEffect } from 'react';
import {
  Store,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  PlusCircle,
  TrendingUp,
  Phone,
  MessageSquare,
  Eye,
  RefreshCw,
  Sparkles,
  Edit2,
  Trash2,
  Send,
  HelpCircle,
  Check
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import VerificationBadge from '../components/VerificationBadge';
import StockBadge from '../components/StockBadge';

export default function ShopDashboard() {
  const { currentShop, showToast, triggerNotification } = useApp();
  const [inventory, setInventory] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Quick Inline Edit state
  const [editingItemId, setEditingItemId] = useState(null);
  const [editPrice, setEditPrice] = useState('');
  const [editStockStatus, setEditStockStatus] = useState('in_stock');
  const [editQuantity, setEditQuantity] = useState('');

  // Add Product Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newStockStatus, setNewStockStatus] = useState('in_stock');
  const [newQuantity, setNewQuantity] = useState('5');
  const [aiMatchResult, setAiMatchResult] = useState(null);

  // Quote response modal state
  const [respondingReq, setRespondingReq] = useState(null);
  const [quotePrice, setQuotePrice] = useState('');
  const [quoteNotes, setQuoteNotes] = useState('');

  const loadDashboard = () => {
    setLoading(true);
    Promise.all([
      api.getShopInventory(currentShop.id),
      api.getRequests({ shopId: currentShop.id })
    ])
      .then(([inv, reqs]) => {
        setInventory(inv);
        setRequests(reqs);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadDashboard();
  }, [currentShop.id]);

  // ⭐ 6. Most Important Feature: 1-Click Price Confirmation
  // "Is this price still valid? YES / NO"
  const handleVerifyPrice = async (itemId, isConfirmed) => {
    try {
      await api.verifyShopProduct(itemId, { confirmed: isConfirmed });
      showToast('Price & Stock confirmed! Marked 🟢 Verified Just Now.');
      triggerNotification({
        type: 'verified',
        title: 'Price Verified',
        message: 'Price and stock confirmed valid for store listing.'
      });
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Verification failed');
    }
  };

  const handleVerifyAll = async () => {
    try {
      await api.verifyAllShopProducts(currentShop.id);
      showToast('All store products verified fresh! Badges updated to 🟢 Just Now.');
      triggerNotification({
        type: 'verified',
        title: 'Store Verification Complete',
        message: `All ${inventory.length} store materials/products verified fresh for today.`
      });
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Failed to bulk verify');
    }
  };

  // Inline update price and stock
  const handleSaveInline = async (itemId) => {
    try {
      await api.updateShopProduct(itemId, {
        price: editPrice ? Number(editPrice) : undefined,
        stockStatus: editStockStatus,
        quantity: editQuantity ? Number(editQuantity) : undefined
      });
      showToast('Inventory updated and marked 🟢 Verified Just Now.');
      triggerNotification({
        type: 'updated',
        title: 'Material Updated',
        message: `Updated inventory details and refreshed live verified badge.`
      });
      setEditingItemId(null);
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Failed to update product');
    }
  };

  // Delete / Remove material from inventory
  const handleDeleteItem = async (itemId, productName) => {
    if (!window.confirm(`Are you sure you want to remove "${productName || 'this item'}" from store inventory?`)) return;
    try {
      await api.deleteShopProduct(itemId);
      showToast('Item removed from store inventory');
      triggerNotification({
        type: 'removed',
        title: 'Material Removed',
        message: `"${productName || 'Material'}" was removed from ${currentShop.name} inventory.`
      });
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Failed to remove product');
    }
  };

  // AI Product Match preview while typing product title
  const handleTitleBlur = async () => {
    if (!newTitle.trim()) return;
    try {
      const match = await api.aiMatch({ title: newTitle });
      setAiMatchResult(match);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    try {
      let productId = aiMatchResult?.matched ? aiMatchResult.product.id : null;

      // If no catalog item matched, create new
      if (!productId) {
        const prodRes = await api.createProduct({
          name: newTitle,
          mrp: Number(newPrice) * 1.15
        });
        productId = prodRes.product.id;
      }

      await api.addShopProduct({
        shopId: currentShop.id,
        productId,
        price: Number(newPrice),
        stockStatus: newStockStatus,
        quantity: Number(newQuantity)
      });

      showToast(`"${newTitle}" added to store inventory!`);
      triggerNotification({
        type: 'added',
        title: 'Material Added',
        message: `"${newTitle}" added to ${currentShop.name} inventory at ₹${Number(newPrice).toLocaleString('en-IN')}.`
      });
      setShowAddModal(false);
      setNewTitle('');
      setNewPrice('');
      setAiMatchResult(null);
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Failed to add product');
    }
  };

  // Respond to customer request
  const handleSendQuote = async (e) => {
    e.preventDefault();
    if (!respondingReq || !quotePrice) return;

    try {
      await api.respondToRequest(respondingReq.id, {
        shopId: currentShop.id,
        shopName: currentShop.name,
        offeredPrice: Number(quotePrice),
        stockStatus: 'in_stock',
        notes: quoteNotes || 'Item available for immediate store pickup.'
      });
      showToast(`Price quote of ₹${quotePrice} sent to ${respondingReq.customerName}!`);
      setRespondingReq(null);
      setQuotePrice('');
      setQuoteNotes('');
      loadDashboard();
    } catch (err) {
      console.error(err);
      showToast('Failed to send quote');
    }
  };

  // Calculate metrics
  const totalViews = inventory.reduce((sum, item) => sum + (item.viewsCount || 34), 0);
  const totalInquiries = inventory.reduce((sum, item) => sum + (item.clicksCount || 12), 0);

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
      {/* Header with Shop info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h1 style={{ fontSize: '1.85rem', color: '#fff' }}>{currentShop.name}</h1>
            <span
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              Verified Shop ✅
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Shopkeeper Management Center • Indiranagar Hub
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={handleVerifyAll} className="btn btn-primary btn-sm">
            <CheckCircle2 size={16} /> Confirm All Prices (1-Click)
          </button>
          <button onClick={() => setShowAddModal(true)} className="btn btn-indigo btn-sm">
            <PlusCircle size={16} /> Add Product to Shop
          </button>
        </div>
      </div>

      {/* ⭐ 6. Periodic Price Verification Banner */}
      <div className="verification-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#10b981',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <ShieldCheck size={26} strokeWidth={2.5} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>
              ⭐ Daily Price & Stock Verification
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Confirm your prices are still valid to maintain your 🟢 <strong>Verified Just Now</strong> status and prevent customer complaints.
            </p>
          </div>
        </div>

        <button onClick={handleVerifyAll} className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
          Verify All Store Prices Fresh Today
        </button>
      </div>

      {/* Analytics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Eye size={15} color="#60a5fa" /> Customer Views
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
            {totalViews}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#34d399' }}>+18% from last week</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={15} color="#10b981" /> Direct Inquiries & Calls
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
            {totalInquiries}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#34d399' }}>Call & WhatsApp Leads</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Store size={15} color="#a78bfa" /> Active Catalog Items
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
            {inventory.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>In stock & verified</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={15} color="#fbbf24" /> Price Trust Score
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399', margin: '0.35rem 0' }}>
            98%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#34d399' }}>Certified Transparent</div>
        </div>
      </div>

      {/* 19. Incoming Customer Product Requests */}
      {requests.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <HelpCircle size={20} color="#6366f1" />
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
              Nearby Customer Product Requests ({requests.length})
            </h3>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {requests.map((req) => (
              <div
                key={req.id}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderColor: 'rgba(99, 102, 241, 0.3)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase' }}>
                    Customer Request • Within {req.radiusKm || 10} km
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: '0.2rem 0' }}>
                    {req.productName}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Customer Budget: <strong>₹{req.budget ? req.budget.toLocaleString('en-IN') : 'Open'}</strong> • Requested by {req.customerName}
                  </div>
                  {req.notes && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      "{req.notes}"
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {req.responses && req.responses.some((r) => r.shopId === currentShop.id) ? (
                    <span style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700 }}>
                      ✓ Quote Sent: ₹{req.responses.find((r) => r.shopId === currentShop.id)?.offeredPrice?.toLocaleString('en-IN')}
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        setRespondingReq(req);
                        setQuotePrice(req.budget || '');
                      }}
                      className="btn btn-indigo btn-sm"
                    >
                      <Send size={14} /> Send Price Quote
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inventory & 1-Click Periodic Price Confirmation Table */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Store Inventory & Quick Price Verifier</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Confirm "Is this price still valid?" or update stock with one tap
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {inventory.length} products in store
          </span>
        </div>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Current Price</th>
                <th>Stock Status</th>
                <th>Verification Freshness</th>
                <th>Is Price Still Valid?</th>
                <th style={{ textAlign: 'right' }}>Manage</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const isEditing = editingItemId === item.id;
                return (
                  <tr key={item.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <img
                          src={item.product?.image}
                          alt={item.product?.name}
                          style={{ width: 44, height: 44, borderRadius: '6px', objectFit: 'cover' }}
                        />
                        <div>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                            {item.product?.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.product?.brand} • {item.product?.modelNumber}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Price with inline edit */}
                    <td>
                      {isEditing ? (
                        <input
                          type="number"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          style={{
                            width: 100,
                            padding: '0.4rem',
                            background: 'var(--bg-main)',
                            border: '1px solid #3b82f6',
                            borderRadius: '4px',
                            color: '#fff',
                            fontWeight: 700
                          }}
                        />
                      ) : (
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                      )}
                    </td>

                    {/* Stock Status with inline edit */}
                    <td>
                      {isEditing ? (
                        <select
                          value={editStockStatus}
                          onChange={(e) => setEditStockStatus(e.target.value)}
                          style={{
                            padding: '0.4rem',
                            background: 'var(--bg-main)',
                            border: '1px solid #3b82f6',
                            borderRadius: '4px',
                            color: '#fff'
                          }}
                        >
                          <option value="in_stock">In Stock</option>
                          <option value="few_left">Few Left</option>
                          <option value="out_of_stock">Out of Stock</option>
                        </select>
                      ) : (
                        <StockBadge status={item.stockStatus} quantity={item.quantity} />
                      )}
                    </td>

                    {/* Verification status badge */}
                    <td>
                      <VerificationBadge
                        status={item.verificationStatus}
                        label={item.lastPriceConfirmedByOwner ? 'Verified Fresh' : 'Needs Check'}
                      />
                    </td>

                    {/* ⭐ 6. 1-Click Verification Trigger */}
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <button
                          onClick={() => handleVerifyPrice(item.id, true)}
                          className="btn btn-primary btn-sm"
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.775rem' }}
                          title="Confirm price is accurate right now"
                        >
                          <Check size={13} /> YES, Valid
                        </button>
                        <button
                          onClick={() => {
                            setEditingItemId(item.id);
                            setEditPrice(item.price);
                            setEditStockStatus(item.stockStatus);
                            setEditQuantity(item.quantity);
                          }}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.775rem' }}
                        >
                          NO / Edit
                        </button>
                      </div>
                    </td>

                    {/* Actions */}
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                        {isEditing ? (
                          <button
                            onClick={() => handleSaveInline(item.id)}
                            className="btn btn-primary btn-sm"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditingItemId(item.id);
                              setEditPrice(item.price);
                              setEditStockStatus(item.stockStatus);
                              setEditQuantity(item.quantity);
                            }}
                            className="icon-action-btn"
                            title="Edit Price/Stock"
                          >
                            <Edit2 size={14} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteItem(item.id, item.product?.name)}
                          className="icon-action-btn"
                          title="Remove Material from Inventory"
                          style={{ color: '#ef4444' }}
                        >
                          <Trash2 size={14} />
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

      {/* Add Product Modal with AI Match */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem' }}>
              Add Product to Your Store
            </h3>

            <form onSubmit={handleAddProductSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.35rem' }}>
                  Product Title / Model Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samsung 55 inch UHD TV or Sony Bravia 55"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={handleTitleBlur}
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

              {/* 13. AI Product Matcher notification */}
              {aiMatchResult && (
                <div
                  style={{
                    background: aiMatchResult.matched ? 'rgba(16, 185, 129, 0.12)' : 'rgba(99, 102, 241, 0.12)',
                    border: `1px solid ${aiMatchResult.matched ? 'rgba(16, 185, 129, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem',
                    fontSize: '0.85rem',
                    color: '#e5e7eb'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                    <Sparkles size={15} color={aiMatchResult.matched ? '#10b981' : '#818cf8'} />
                    <span>AI Catalog Deduplication:</span>
                  </div>
                  <p style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>
                    {aiMatchResult.message}
                  </p>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.35rem' }}>
                    Your Selling Price (₹)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 47500"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: '#fff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.35rem' }}>
                    Stock Availability
                  </label>
                  <select
                    value={newStockStatus}
                    onChange={(e) => setNewStockStatus(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: '#fff'
                    }}
                  >
                    <option value="in_stock">🟢 In Stock</option>
                    <option value="few_left">🟡 Few Left</option>
                    <option value="out_of_stock">🔴 Out of Stock</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm & List Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quote Response Modal */}
      {respondingReq && (
        <div className="modal-overlay" onClick={() => setRespondingReq(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>
              Send Quote to {respondingReq.customerName}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Requested: <strong>{respondingReq.productName}</strong> (Budget: ₹{respondingReq.budget?.toLocaleString('en-IN') || 'Open'})
            </p>

            <form onSubmit={handleSendQuote}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.35rem' }}>
                  Your Offered Price (₹)
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 28999"
                  value={quotePrice}
                  onChange={(e) => setQuotePrice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.35rem' }}>
                  Note / Delivery or Hold Details
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ready stock in Midnight Black. Can hold for 24 hours."
                  value={quoteNotes}
                  onChange={(e) => setQuoteNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button type="button" onClick={() => setRespondingReq(null)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-indigo">
                  Send Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
