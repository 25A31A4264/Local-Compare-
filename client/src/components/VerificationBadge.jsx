import React from 'react';
import { ShieldCheck, Clock, AlertTriangle } from 'lucide-react';

export default function VerificationBadge({ status, label, showTooltip = true }) {
  // status: 'fresh' | 'moderate' | 'outdated'
  let badgeClass = 'badge-fresh';
  let Icon = ShieldCheck;
  let defaultLabel = 'Verified Recently';

  if (status === 'moderate') {
    badgeClass = 'badge-moderate';
    Icon = Clock;
    defaultLabel = 'Updated 2 Days Ago';
  } else if (status === 'outdated') {
    badgeClass = 'badge-outdated';
    Icon = AlertTriangle;
    defaultLabel = 'Price May Be Outdated';
  }

  return (
    <div
      className={`badge ${badgeClass}`}
      title={
        showTooltip
          ? status === 'fresh'
            ? 'Confirmed directly by shop owner recently. High price certainty.'
            : status === 'moderate'
            ? 'Updated in last 48 hours. Likely accurate.'
            : 'Not confirmed recently. Call shop before visiting.'
          : undefined
      }
    >
      <Icon size={14} />
      <span>{label || defaultLabel}</span>
    </div>
  );
}
