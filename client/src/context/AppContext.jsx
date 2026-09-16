import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AppContext = createContext();

export const LOCATION_PRESETS = [
  { name: 'Indiranagar, Bengaluru', lat: 12.9783, lng: 77.6408 },
  { name: 'Koramangala, Bengaluru', lat: 12.9352, lng: 77.6245 },
  { name: 'Brigade Road, Bengaluru', lat: 12.9719, lng: 77.6070 },
  { name: 'Domlur, Bengaluru', lat: 12.9609, lng: 77.6480 },
  { name: 'Commercial St, Bengaluru', lat: 12.9822, lng: 77.6083 }
];

export function AppProvider({ children }) {
  // Theme state: 'light' (warm oat/beige luxury) | 'dark' (warm espresso obsidian)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('localcompare_theme') || 'light';
  });

  const [currentRole, setCurrentRole] = useState('customer'); // 'customer' | 'shop_owner' | 'admin'
  const [currentUser, setCurrentUser] = useState({
    id: 'usr_customer_1',
    name: 'Venkat Rao',
    email: 'venkat@example.com',
    role: 'customer'
  });
  const [currentShop, setCurrentShop] = useState({
    id: 'shop_1',
    name: 'Sri Lakshmi Electronics',
    verified: true,
    rating: 4.6
  });

  const [userLocation, setUserLocation] = useState(LOCATION_PRESETS[0]);
  const [radius, setRadius] = useState(10); // 1 | 5 | 10 | 25
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Active page view in single-page navigation: 'home' | 'compare' | 'shop_profile' | 'requests' | 'shop_dashboard' | 'admin_dashboard' | 'map'
  const [activeTab, setActiveTab] = useState('home');
  const [compareProductId, setCompareProductId] = useState('prod_tv_1'); // default to Samsung 55" TV
  const [viewShopId, setViewShopId] = useState('shop_1');

  // Notification Bar state for material/product additions & removals
  const [activeNotification, setActiveNotification] = useState(null);
  const [notificationHistory, setNotificationHistory] = useState([
    {
      id: 'init_1',
      type: 'added',
      title: 'Material Added',
      message: 'Sri Lakshmi Electronics added Samsung 55" Crystal 4K Smart TV to live inventory.',
      timestamp: '10 minutes ago'
    },
    {
      id: 'init_2',
      type: 'verified',
      title: 'Price Verified',
      message: 'Digital World Superstore confirmed live pricing for Samsung Galaxy S24.',
      timestamp: '25 minutes ago'
    },
    {
      id: 'init_3',
      type: 'removed',
      title: 'Material Removed',
      message: 'Croma Express Hub removed an out-of-stock MacBook Air M2 variant.',
      timestamp: '1 hour ago'
    }
  ]);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('localcompare_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Load initial categories
  useEffect(() => {
    api.getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to load categories:', err));
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Trigger Notification Bar for Added / Removed / Updated materials
  const triggerNotification = ({ type = 'info', title, message }) => {
    const newNotif = {
      id: `notif_${Date.now()}`,
      type, // 'added' | 'removed' | 'updated' | 'verified' | 'info'
      title,
      message,
      timestamp: 'Just now'
    };

    setActiveNotification(newNotif);
    setNotificationHistory((prev) => [newNotif, ...prev.slice(0, 19)]); // keep last 20

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      setActiveNotification((curr) => (curr?.id === newNotif.id ? null : curr));
    }, 6000);
  };

  const dismissNotification = () => {
    setActiveNotification(null);
  };

  // Delete notification manually one by one
  const deleteNotification = (id) => {
    setNotificationHistory((prev) => prev.filter((n) => n.id !== id));
    if (activeNotification?.id === id) {
      setActiveNotification(null);
    }
    showToast('Notification deleted');
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotificationHistory([]);
    setActiveNotification(null);
    showToast('All notifications cleared');
  };

  // Quick switch role (Customer / Shop Owner / Admin)
  const switchRole = async (newRole) => {
    try {
      const res = await api.switchRole(newRole, 'shop_1');
      setCurrentRole(newRole);
      setCurrentUser(res.user);
      if (newRole === 'shop_owner') {
        setActiveTab('shop_dashboard');
      } else if (newRole === 'admin') {
        setActiveTab('admin_dashboard');
      } else {
        setActiveTab('home');
      }
      showToast(`Switched to ${newRole.replace('_', ' ').toUpperCase()} Mode`);
    } catch (err) {
      console.error('Role switch failed:', err);
    }
  };

  const navigateToProduct = (prodId) => {
    setCompareProductId(prodId);
    setActiveTab('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = (sId) => {
    setViewShopId(sId);
    setActiveTab('shop_profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentRole,
        setCurrentRole,
        currentUser,
        currentShop,
        setCurrentShop,
        userLocation,
        setUserLocation,
        radius,
        setRadius,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        compareProductId,
        setCompareProductId,
        viewShopId,
        setViewShopId,
        navigateToProduct,
        navigateToShop,
        switchRole,
        showToast,
        toastMessage,
        activeNotification,
        notificationHistory,
        triggerNotification,
        dismissNotification,
        deleteNotification,
        clearAllNotifications
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
