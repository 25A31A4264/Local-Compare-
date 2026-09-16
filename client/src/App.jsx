import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import CustomerHome from './pages/CustomerHome';
import ProductComparison from './pages/ProductComparison';
import ShopProfile from './pages/ShopProfile';
import ShopDashboard from './pages/ShopDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LiveMapView from './pages/LiveMapView';
import ProductRequestModal from './components/ProductRequestModal';
import { ShieldCheck, Heart, Radio, Store } from 'lucide-react';

function AppContent() {
  const { activeTab, setActiveTab, currentRole, switchRole } = useApp();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar onOpenRequestModal={() => setIsRequestModalOpen(true)} />

      {/* Animated Material Add/Remove & Price Notification Bar */}
      <NotificationBar />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <CustomerHome onOpenRequestModal={() => setIsRequestModalOpen(true)} />
        )}
        {activeTab === 'map' && <LiveMapView />}
        {activeTab === 'compare' && <ProductComparison />}
        {activeTab === 'shop_profile' && <ShopProfile />}
        {activeTab === 'shop_dashboard' && <ShopDashboard />}
        {activeTab === 'admin_dashboard' && <AdminDashboard />}
      </main>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '3rem 0 2rem',
          marginTop: 'auto'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                <Radio size={20} color="#10b981" />
                <span>LocalCompare</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                Compare. Verify. Visit. Buy. • Empowering local brick-and-mortar commerce.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  switchRole('customer');
                  setActiveTab('home');
                }}
                className="btn btn-secondary btn-sm"
              >
                👤 Customer View
              </button>
              <button
                onClick={() => {
                  switchRole('customer');
                  setActiveTab('map');
                }}
                className="btn btn-secondary btn-sm"
              >
                🗺️ Live Store Map
              </button>
              <button
                onClick={() => switchRole('shop_owner')}
                className="btn btn-secondary btn-sm"
              >
                🏪 Shop Owner Portal
              </button>
              <button
                onClick={() => switchRole('admin')}
                className="btn btn-secondary btn-sm"
              >
                🛡️ Admin Moderation
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div>
              © 2026 LocalCompare Technologies. All store prices verified periodically.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="#10b981" />
              <span>Real Local Price & Stock Assurance</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Product Request Modal */}
      <ProductRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
