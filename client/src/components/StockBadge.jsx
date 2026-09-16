import React from 'react';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function StockBadge({ status, quantity }) {
  if (status === 'in_stock') {
    return (
      <span className="badge badge-stock-in">
        <CheckCircle2 size={13} />
        In Stock {quantity ? `(${quantity} units)` : ''}
      </span>
    );
  }

  if (status === 'few_left') {
    return (
      <span className="badge badge-stock-few">
        <AlertCircle size={13} />
        Few Left {quantity ? `(Only ${quantity} left)` : ''}
      </span>
    );
  }

  return (
    <span className="badge badge-stock-out">
      <XCircle size={13} />
      Out of Stock
    </span>
  );
}
