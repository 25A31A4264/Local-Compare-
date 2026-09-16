import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Store,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Package,
  Clock,
  Eye,
  FileText
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';

export default function AdminDashboard() {
  const { showToast } = useApp();
  const [metricsData, setMetricsData] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAdminData = () => {
    setLoading(true);
    Promise.all([api.getAdminMetrics(), api.getReports()])
      .then(([metricsRes, reportsRes]) => {
        setMetricsData(metricsRes);
        setReports(reportsRes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleApproveShop = async (shopId, shopName) => {
    try {
      await api.approveShop(shopId);
      showToast(`Shop "${shopName}" approved & certified!`);
      loadAdminData();
    } catch (err) {
      console.error(err);
      showToast('Action failed');
    }
  };

  const handleSuspendShop = async (shopId, shopName) => {
    try {
      await api.updateShopStatus(shopId, 'suspended', 'Multiple price discrepancies reported');
      showToast(`Shop "${shopName}" suspended.`);
      loadAdminData();
    } catch (err) {
      console.error(err);
      showToast('Action failed');
    }
  };

  const handleResolveReport = async (reportId) => {
    try {
      await api.resolveReport(reportId, 'resolved', 'Verified offline with store manager. Price corrected.');
      showToast('Report marked resolved.');
      loadAdminData();
    } catch (err) {
      console.error(err);
      showToast('Action failed');
    }
  };

  if (loading || !metricsData) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading platform security & moderation data...</p>
      </div>
    );
  }

  const { metrics, pendingShopsList, allShops } = metricsData;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShieldAlert size={28} color="#8b5cf6" />
          <h1 style={{ fontSize: '1.85rem', color: '#fff' }}>Admin Moderation & Trust Center</h1>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Monitor price veracity, approve new local retail applications, and resolve consumer complaints.
        </p>
      </div>

      {/* 12. Dashboard Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Store size={15} color="#60a5fa" /> Registered Shops
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
            {metrics.registeredShops.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#34d399' }}>{metrics.activeShops} actively verified</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={15} color="#fbbf24" /> Pending Approvals
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fbbf24', margin: '0.35rem 0' }}>
            {metrics.pendingVerification}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Awaiting license check</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Package size={15} color="#a78bfa" /> Catalog Products
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
            {metrics.catalogProducts.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#60a5fa' }}>{metrics.totalShopListings} live price points</div>
        </div>

        <div className="summary-card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertTriangle size={15} color="#ef4444" /> Discrepancy Reports
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: metrics.pendingReports > 0 ? '#f87171' : '#34d399', margin: '0.35rem 0' }}>
            {metrics.pendingReports}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{metrics.resolvedReports} resolved</div>
        </div>
      </div>

      {/* Pending Shop Approvals Queue */}
      <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
              Pending Shop Registrations ({pendingShopsList.length})
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              Verify physical address and GST before granting the 🟢 Verified Shop badge
            </p>
          </div>
        </div>

        {pendingShopsList.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            ✓ All shop applications have been reviewed. No pending verifications!
          </div>
        ) : (
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Shop Name & Owner</th>
                  <th>Contact Info</th>
                  <th>Location / Category</th>
                  <th>GST Number</th>
                  <th style={{ textAlign: 'right' }}>Admin Controls</th>
                </tr>
              </thead>
              <tbody>
                {pendingShopsList.map((shop) => (
                  <tr key={shop.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#fff' }}>{shop.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Owner: {shop.ownerName}</div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: '#fff' }}>{shop.phone}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{shop.email}</div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: '#fff' }}>{shop.address}</div>
                      <div style={{ fontSize: '0.75rem', color: '#60a5fa', textTransform: 'capitalize' }}>
                        {shop.category}
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: '#fbbf24' }}>
                        {shop.gstin}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleApproveShop(shop.id, shop.name)}
                          className="btn btn-primary btn-sm"
                        >
                          <CheckCircle size={14} /> Approve & Verify
                        </button>
                        <button
                          onClick={() => handleSuspendShop(shop.id, shop.name)}
                          className="btn btn-secondary btn-sm"
                          style={{ color: '#ef4444' }}
                        >
                          <XCircle size={14} /> Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Discrepancy Reports Moderation Queue */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
              Customer Price & Stock Discrepancy Reports ({reports.length})
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              Investigate customer complaints to prevent misleading prices
            </p>
          </div>
        </div>

        {reports.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No unresolved reports. Community trust is 100%!
          </div>
        ) : (
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Target Shop</th>
                  <th>Reason</th>
                  <th>Customer Complaint Details</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((rep) => (
                  <tr key={rep.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#fff' }}>{rep.shopName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Product: {rep.productName}
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: '#f87171',
                          background: 'rgba(239, 68, 68, 0.12)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px'
                        }}
                      >
                        {rep.reason?.replace('_', ' ')}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        "{rep.details || 'Customer reported price differed from offline store'}"
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        By {rep.reportedBy} • {new Date(rep.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: rep.status === 'resolved' ? '#34d399' : '#fbbf24'
                        }}
                      >
                        {rep.status?.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {rep.status !== 'resolved' ? (
                        <button
                          onClick={() => handleResolveReport(rep.id)}
                          className="btn btn-primary btn-sm"
                        >
                          Resolve & Correct
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          ✓ Resolved
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
