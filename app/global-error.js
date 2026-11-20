'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ background: '#030303', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ maxWidth: 420, textAlign: 'center' }}>
            <h1 style={{ fontSize: 20, marginBottom: 8 }}>AI Studios failed to load</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
              {error?.message || 'A fatal error occurred.'}
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{ background: '#22d3ee', color: '#000', border: 0, borderRadius: 12, padding: '10px 24px', fontWeight: 700 }}
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
