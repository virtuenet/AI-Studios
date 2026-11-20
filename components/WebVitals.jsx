'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Reports Core Web Vitals. Logs in development and POSTs to
 * NEXT_PUBLIC_WEB_VITALS_ENDPOINT when configured.
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const payload = {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      pathname: typeof window !== 'undefined' ? window.location.pathname : undefined,
    };

    if (process.env.NODE_ENV !== 'production') {
      console.debug('[web-vitals]', payload);
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
    if (!endpoint) return;
    try {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, body);
      } else {
        fetch(endpoint, { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } });
      }
    } catch {
      // Metrics must never affect the app.
    }
  });

  return null;
}
