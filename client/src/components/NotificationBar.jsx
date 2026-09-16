import React from 'react';
import {
  CheckCircle2,
  Trash2,
  AlertTriangle,
  RefreshCw,
  ShieldCheck,
  Info,
  X,
  PlusCircle,
  Bell
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function NotificationBar() {
  const { activeNotification, deleteNotification } = useApp();

  if (!activeNotification) return null;

  const { type, title, message, timestamp } = activeNotification;

  let bg = 'rgba(16, 185, 129, 0.95)';
  let borderColor = '#10b981';
  let Icon = CheckCircle2;
  let textColor = '#ffffff';

  if (type === 'removed') {
    bg = 'rgba(239, 68, 68, 0.95)';
    borderColor = '#ef4444';
    Icon = Trash2;
  } else if (type === 'added') {
    bg = 'rgba(16, 185, 129, 0.95)';
    borderColor = '#059669';
    Icon = PlusCircle;
  } else if (type === 'updated') {
    bg = 'rgba(59, 130, 246, 0.95)';
    borderColor = '#3b82f6';
    Icon = RefreshCw;
  } else if (type === 'verified') {
    bg = 'rgba(16, 185, 129, 0.95)';
    borderColor = '#10b981';
    Icon = ShieldCheck;
  } else {
    bg = 'rgba(99, 102, 241, 0.95)';
    borderColor = '#6366f1';
    Icon = Info;
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: '68px',
        zIndex: 999,
        width: '100%',
        background: bg,
        backdropFilter: 'blur(12px)',
        borderBottom: `2px solid ${borderColor}`,
        color: textColor,
        padding: '0.65rem 1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff'
            }}
          >
            <Icon size={16} strokeWidth={2.5} />
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <strong style={{ fontSize: '0.9rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              {title}:
            </strong>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
              {message}
            </span>
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              opacity: 0.85,
              background: 'rgba(0, 0, 0, 0.15)',
              padding: '0.15rem 0.5rem',
              borderRadius: '9999px'
            }}
          >
            {timestamp || 'Just now'}
          </span>
        </div>

        <button
          onClick={() => deleteNotification(activeNotification.id)}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: 26,
            height: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          title="Delete this notification"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
