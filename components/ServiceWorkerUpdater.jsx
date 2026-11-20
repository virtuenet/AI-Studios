'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Registers the service worker and surfaces:
 * - an "update available" prompt (instead of silently activating a new version)
 * - the offline generation queue (count + clear action)
 */
export default function ServiceWorkerUpdater() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [offline, setOffline] = useState(false);
  const [queuedCount, setQueuedCount] = useState(0);

  const requestQueue = useCallback(() => {
    if (typeof navigator === 'undefined' || !navigator.serviceWorker?.controller) return;
    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      const items = event.data?.items;
      if (Array.isArray(items)) setQueuedCount(items.length);
    };
    navigator.serviceWorker.controller.postMessage(
      { type: 'GET_QUEUED_GENERATIONS' },
      [channel.port2]
    );
  }, []);

  const clearQueue = useCallback(() => {
    if (typeof navigator === 'undefined' || !navigator.serviceWorker?.controller) return;
    const channel = new MessageChannel();
    channel.port1.onmessage = () => setQueuedCount(0);
    navigator.serviceWorker.controller.postMessage(
      { type: 'CLEAR_QUEUED_GENERATIONS' },
      [channel.port2]
    );
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return undefined;

    let cancelled = false;

    const promoteIfWaiting = (registration) => {
      if (!cancelled && registration?.waiting && navigator.serviceWorker.controller) {
        setWaitingWorker(registration.waiting);
      }
    };

    const syncOffline = () => setOffline(typeof navigator !== 'undefined' && !navigator.onLine);
    syncOffline();
    window.addEventListener('online', syncOffline);
    window.addEventListener('offline', syncOffline);

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
        requestQueue();
      })
      .catch((error) => {
        console.warn('[SW] Registration failed:', error?.message || error);
      });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      requestQueue();
    });

    const interval = window.setInterval(requestQueue, 30000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener('online', syncOffline);
      window.removeEventListener('offline', syncOffline);
    };
  }, [requestQueue]);

  if (!waitingWorker && !offline && queuedCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[300] flex -translate-x-1/2 flex-col items-center gap-2">
      {waitingWorker && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-3 rounded-xl border border-cyan-500/40 bg-[#0a0a0b] px-4 py-3 text-sm text-white shadow-2xl"
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
      )}

      {(offline || queuedCount > 0) && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-3 rounded-xl border border-amber-500/40 bg-[#0a0a0b] px-4 py-2.5 text-xs text-white shadow-2xl"
        >
          <span>
            {offline ? 'Offline' : 'Online'}
            {queuedCount > 0 ? ` — ${queuedCount} generation${queuedCount === 1 ? '' : 's'} queued` : ''}
          </span>
          {queuedCount > 0 && (
            <button
              type="button"
              onClick={clearQueue}
              className="rounded-md border border-white/15 px-2 py-0.5 font-bold text-white/70 hover:bg-white/10 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}
