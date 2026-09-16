import React, { useState } from 'react';
import {
  MapPin,
  Store,
  ShieldCheck,
  ShoppingBag,
  Radio,
  MessageSquarePlus,
  UserCheck,
  ShieldAlert,
  Sun,
  Moon,
  Map as MapIcon,
  Bell,
  CheckCircle2,
  Trash2,
  PlusCircle,
  X
} from 'lucide-react';
import { useApp, LOCATION_PRESETS } from '../context/AppContext';

export default function Navbar({ onOpenRequestModal }) {
  const {
    theme,
    toggleTheme,
    currentRole,
    switchRole,
    userLocation,
    setUserLocation,
    activeTab,
    setActiveTab,
    toastMessage,
    notificationHistory,
    deleteNotification,
    clearAllNotifications
  } = useApp();

  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Brand Logo & Tagline */}
          <div
            className="nav-brand"
            onClick={() => setActiveTab('home')}
            style={{ cursor: 'pointer' }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Radio size={22} />
            </div>
            <div>
              <div style={{ lineHeight: 1.1 }}>
                Local<span>Compare</span>
              </div>
              <div style={{ fontSize: '0.675rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
                COMPARE • VERIFY • VISIT • BUY
              </div>
            </div>
          </div>

          {/* Navigation Links (Home & Live Map) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('home')}
              className={`btn btn-sm ${activeTab === 'home' ? 'btn-secondary' : 'btn-outline'}`}
              style={{ fontSize: '0.825rem' }}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`btn btn-sm ${activeTab === 'map' ? 'btn-primary' : 'btn-outline'}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.825rem' }}
              title="View all nearby verified stores on interactive live map"
            >
              <MapIcon size={14} />
              <span>Live Map</span>
            </button>
          </div>

          {/* Location Selector */}
          <div className="location-selector">
            <MapPin size={15} color="#10b981" />
            <select
              value={userLocation.name}
              onChange={(e) => {
                const found = LOCATION_PRESETS.find((l) => l.name === e.target.value);
                if (found) setUserLocation(found);
              }}
            >
              {LOCATION_PRESETS.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Switcher (White/Black background) + Notifications + Role Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {/* Background Theme Toggle (White & Black) */}
            <button
              onClick={toggleTheme}
              className="icon-action-btn"
              title={theme === 'dark' ? 'Switch to White Background (Light Mode)' : 'Switch to Black Background (Dark Mode)'}
              style={{
                borderRadius: '50%',
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0',
                color: theme === 'dark' ? '#fbbf24' : '#0f172a',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Notification Center Bell */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowNotificationDrawer(!showNotificationDrawer)}
                className="icon-action-btn"
                title="Material & Product Activity Log"
                style={{
                  position: 'relative',
                  borderRadius: '50%',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Bell size={16} color="var(--text-primary)" />
                {notificationHistory.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#10b981',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {notificationHistory.length}
                  </span>
                )}
              </button>

              {/* Notification History Dropdown */}
              {showNotificationDrawer && (
                <div
                  style={{
                    position: 'absolute',
                    top: '44px',
                    right: 0,
                    width: '340px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1rem',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 1100
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Activity & Materials ({notificationHistory.length})
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {notificationHistory.length > 0 && (
                        <button
                          onClick={clearAllNotifications}
                          style={{
                            fontSize: '0.725rem',
                            color: '#ef4444',
                            cursor: 'pointer',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: 'rgba(239, 68, 68, 0.08)'
                          }}
                          title="Clear all notifications"
                        >
                          Clear All
                        </button>
                      )}
                      <button
                        onClick={() => setShowNotificationDrawer(false)}
                        style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {notificationHistory.length === 0 ? (
                    <div style={{ padding: '1.75rem 1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      ✓ All notifications deleted. You're all caught up!
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {notificationHistory.map((notif) => {
                        const isAdded = notif.type === 'added';
                        const isRemoved = notif.type === 'removed';
                        return (
                          <div
                            key={notif.id}
                            style={{
                              padding: '0.65rem',
                              borderRadius: 'var(--radius-sm)',
                              background: isRemoved ? 'rgba(239, 68, 68, 0.08)' : isAdded ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card-hover)',
                              borderLeft: `3px solid ${isRemoved ? '#ef4444' : isAdded ? '#10b981' : '#3b82f6'}`,
                              fontSize: '0.8rem',
                              position: 'relative'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                              <strong style={{ color: isRemoved ? '#ef4444' : isAdded ? '#10b981' : 'var(--text-primary)' }}>
                                {notif.title}
                              </strong>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                  {notif.timestamp}
                                </span>
                                <button
                                  onClick={() => deleteNotification(notif.id)}
                                  title="Delete this notification"
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    padding: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '3px'
                                  }}
                                  onMouseOver={(e) => (e.currentTarget.style.color = '#ef4444')}
                                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '0.5rem' }}>
                              {notif.message}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Role Switcher (Customer / Shop Owner / Admin) */}
            <div className="role-switcher">
              <button
                className={`role-pill ${currentRole === 'customer' ? 'active' : ''}`}
                onClick={() => switchRole('customer')}
                title="Customer Search & Comparison Experience"
              >
                👤 Customer
              </button>
              <button
                className={`role-pill shop ${currentRole === 'shop_owner' ? 'active shop' : ''}`}
                onClick={() => switchRole('shop_owner')}
                title="Shopkeeper Inventory & Price Verifier"
              >
                🏪 Shop Owner
              </button>
              <button
                className={`role-pill admin ${currentRole === 'admin' ? 'active admin' : ''}`}
                onClick={() => switchRole('admin')}
                title="Platform Moderation & Approvals"
              >
                🛡️ Admin
              </button>
            </div>

            {/* Request Product CTA for Customer */}
            {currentRole === 'customer' && (
              <button
                onClick={onOpenRequestModal}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', gap: '0.35rem', borderColor: 'rgba(99, 102, 241, 0.4)' }}
              >
                <MessageSquarePlus size={14} color="#6366f1" />
                <span>Request Product</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: 'var(--bg-surface)',
            border: '1px solid #10b981',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1.25rem',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.9rem',
            fontWeight: 500,
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <ShieldCheck size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
