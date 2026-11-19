'use client';

import { useEffect, useState } from 'react';

/**
 * Registers the service worker and surfaces an "update available" prompt when
 * a new version is installed, instead of silently activating it (which can mix
 * old and new chunks across an open session).
 */
export default function ServiceWorkerUpdater() {
  const [waitingWorker, setWaitingWorker] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return undefined;

    let cancelled = false;

    const promoteIfWaiting = (registration) => {
      if (!cancelled && registration?.waiting && navigator.serviceWorker.controller) {
        setWaitingWorker(registration.waiting);
      }
    };

    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        promoteIfWaiting(registration);
        registration.addEventListener('updatefound', () => {
          const installing = registration.installing;
          if (!installing) return;
          installing.addEventListener('statechange', () => {
            if (installing.state === 'installed') promoteIfWaiting(registration);
          });
        });
      })
      .catch((error) => {
        console.warn('[SW] Registration failed:', error?.message || error);
      });

    const handleControllerChange = () => window.location.reload();
    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  if (!waitingWorker) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-[300] -translate-x-1/2 flex items-center gap-3 rounded-xl border border-cyan-500/40 bg-[#0a0a0b] px-4 py-3 text-sm text-white shadow-2xl"
    >
      <span>A new version of AI Studios is available.</span>
      <button
        type="button"
        onClick={() => waitingWorker.postMessage({ type: 'SKIP_WAITING' })}
        className="rounded-md bg-[#22d3ee] px-3 py-1 text-xs font-bold text-black hover:bg-[#e5ff33]"
      >
        Reload
      </button>
    </div>
  );
}
