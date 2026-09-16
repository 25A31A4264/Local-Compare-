import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function ShopMap({
  userLocation,
  radius = 10,
  shops = [],
  onSelectShop,
  height = '400px',
  showRadiusCircle = true
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const circleGroupRef = useRef(null);

  // Cleanup map instance on component unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.warn('Map cleanup error:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const centerLat = userLocation?.lat || 12.9716;
    const centerLng = userLocation?.lng || 77.5946;

    // Check if map already initialized on this container
    if (!mapInstanceRef.current) {
      if (mapContainerRef.current._leaflet_id) {
        delete mapContainerRef.current._leaflet_id;
      }
      try {
        const map = L.map(mapContainerRef.current, {
          center: [centerLat, centerLng],
          zoom: 13,
          zoomControl: true,
          attributionControl: false
        });

        // OpenStreetMap standard tile layer
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        mapInstanceRef.current = map;
        circleGroupRef.current = L.layerGroup().addTo(map);
        markersGroupRef.current = L.layerGroup().addTo(map);

        // Force Leaflet to recalculate container dimensions
        setTimeout(() => map.invalidateSize(), 150);
        setTimeout(() => map.invalidateSize(), 500);
      } catch (err) {
        console.warn('Leaflet init warning:', err);
      }
    }

    const map = mapInstanceRef.current;
    if (!map) return;

    try {
      // Invalidate size in case tab/layout switched
      map.invalidateSize();

      // Clear previous layers
      if (markersGroupRef.current) markersGroupRef.current.clearLayers();
      if (circleGroupRef.current) circleGroupRef.current.clearLayers();


    // 1. Draw radius circle around User Location
    if (showRadiusCircle && radius) {
      L.circle([centerLat, centerLng], {
        color: '#10b981',
        fillColor: '#10b981',
        fillOpacity: 0.08,
        weight: 2,
        dashArray: '5, 5',
        radius: radius * 1000 // in meters
      }).addTo(circleGroupRef.current);
    }

    // 2. Add "📍 YOU" marker
    const youHtml = `
      <div style="background:#2563eb; color:#ffffff; padding:5px 10px; border-radius:9999px; font-size:12px; font-weight:800; border:2px solid #ffffff; box-shadow:0 3px 12px rgba(0,0,0,0.5); display:inline-flex; align-items:center; gap:4px; white-space:nowrap;">
        <span>📍 YOU</span>
      </div>
    `;
    const youIcon = L.divIcon({
      html: youHtml,
      className: 'custom-user-marker',
      iconSize: [64, 26],
      iconAnchor: [32, 26]
    });
    L.marker([centerLat, centerLng], { icon: youIcon })
      .addTo(markersGroupRef.current)
      .bindPopup(`<strong>Your Location</strong><br/>${userLocation?.name || 'Center'}`);

    // 3. Add Shop Markers
    const validShops = shops.filter((s) => {
      const lat = s.shopLat || s.lat;
      const lng = s.shopLng || s.lng;
      return lat && lng;
    });

    validShops.forEach((shop) => {
      const lat = shop.shopLat || shop.lat;
      const lng = shop.shopLng || shop.lng;
      const isBestOverall = shop.isBestOverall;
      const priceText = shop.price ? `₹${shop.price.toLocaleString('en-IN')}` : 'Store';
      const bg = isBestOverall ? '#10b981' : '#1e293b';
      const border = isBestOverall ? '#34d399' : '#64748b';

      const shopHtml = `
        <div style="background:${bg}; color:#ffffff; padding:5px 9px; border-radius:8px; font-size:11px; font-weight:800; border:2px solid ${border}; box-shadow:0 4px 12px rgba(0,0,0,0.45); text-align:center; cursor:pointer; white-space:nowrap; transition:transform 0.15s ease;">
          <div style="color:${isBestOverall ? '#ffffff' : '#f8fafc'}; font-size:11px;">🏪 ${shop.shopName || shop.name}</div>
          <div style="color:${isBestOverall ? '#ffffff' : '#34d399'}; font-size:13px; font-weight:900;">${priceText}</div>
        </div>
      `;

      const shopIcon = L.divIcon({
        html: shopHtml,
        className: 'custom-shop-marker',
        iconSize: [130, 42],
        iconAnchor: [65, 42]
      });

      const marker = L.marker([lat, lng], { icon: shopIcon }).addTo(markersGroupRef.current);

      const popupDiv = document.createElement('div');
      popupDiv.style.fontFamily = 'Inter, sans-serif';
      popupDiv.style.color = '#0f172a';
      popupDiv.innerHTML = `
        <div style="padding:4px;">
          <strong style="font-size:13px; color:#0f172a;">${shop.shopName || shop.name}</strong>
          ${shop.verified || shop.shopVerified ? ' <span style="color:#059669; font-weight:bold;">✅ Verified</span>' : ''}
          <div style="font-size:11px; color:#64748b; margin:3px 0;">
            📍 ${shop.distance ? `${shop.distance} km away` : shop.address} • ⭐ ${shop.shopRating || shop.rating || 4.5}
          </div>
          <div style="font-size:15px; font-weight:800; color:#059669; margin:6px 0;">
            ${priceText}
          </div>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" style="background:#10b981; color:#ffffff; padding:4px 9px; border-radius:6px; font-size:11px; text-decoration:none; font-weight:700; display:inline-block;">Directions</a>
            ${shop.phone || shop.shopPhone ? `<a href="tel:${shop.phone || shop.shopPhone}" style="background:#2563eb; color:#ffffff; padding:4px 9px; border-radius:6px; font-size:11px; text-decoration:none; font-weight:700; display:inline-block;">Call</a>` : ''}
          </div>
        </div>
      `;

      marker.bindPopup(popupDiv);
    });

    // Adjust view bounds to show YOU and all nearby shops
    if (validShops.length > 0) {
      const bounds = L.latLngBounds([[centerLat, centerLng]]);
      validShops.forEach((s) => {
        const lat = s.shopLat || s.lat;
        const lng = s.shopLng || s.lng;
        bounds.extend([lat, lng]);
      });
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    } else {
      map.setView([centerLat, centerLng], 13);
    }
  } catch (err) {
    console.warn('Leaflet layer update error:', err);
  }
}, [userLocation, shops, radius, showRadiusCircle]);

  // Handle manual container resizing on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [height]);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '1.5rem' }}>
      <div
        ref={mapContainerRef}
        style={{
          width: '100%',
          height: height,
          minHeight: '340px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          background: '#e2e8f0',
          zIndex: 1
        }}
      />
    </div>
  );
}
