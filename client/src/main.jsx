import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#FAF7F2',
          color: '#181513',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '650px',
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 10px 35px rgba(0,0,0,0.08)',
            border: '1px solid #E5DED5'
          }}>
            <h2 style={{ fontSize: '1.4rem', color: '#dc2626', marginBottom: '0.75rem' }}>
              ⚠️ Application Notice
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A443D', marginBottom: '1.25rem' }}>
              A client-side error occurred while rendering. You can reload or reset the session below.
            </p>
            <pre style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.825rem',
              color: '#334155',
              overflowX: 'auto',
              maxHeight: '220px',
              marginBottom: '1.5rem',
              whiteSpace: 'pre-wrap'
            }}>
              {this.state.error?.toString()}
              {'\n'}
              {this.state.errorInfo?.componentStack}
            </pre>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '0.65rem 1.25rem',
                  background: '#181513',
                  color: '#FAF7F2',
                  border: 'none',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                🔄 Refresh Page
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                style={{
                  padding: '0.65rem 1.25rem',
                  background: '#F2ECE4',
                  color: '#181513',
                  border: '1px solid #E5DED5',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                🧹 Clear Storage & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

