"use client";

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'ai_studios_notifications_v1';
const MAX_VISIBLE = 3;

function loadStored() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]');
    const now = Date.now();
    return Array.isArray(stored)
      ? stored.filter((n) => n.expiresAt > now).slice(0, MAX_VISIBLE)
      : [];
  } catch {
    return [];
  }
}

function persist(items) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Notification persistence is optional.
  }
}

/**
 * Global generation notifications — survives tab switches.
 */
export default function useNotifications() {
  const [notifications, setNotifications] = useState(() =>
    typeof window === 'undefined' ? [] : loadStored()
  );

  const pushNotification = useCallback((notif) => {
    const now = Date.now();
    const entry = { ...notif, id: `notif-${Date.now()}-${Math.random()}`, expiresAt: now + 12000 };
    setNotifications((prev) => {
      const next = [...prev.filter((n) => n.expiresAt > now), entry].slice(-MAX_VISIBLE);
      persist(next);
      return next;
    });
  }, []);

  const dismissNotification = useCallback((id) => {
    setNotifications((prev) => {
      const next = prev.filter((n) => n.id !== id);
      persist(next);
      return next;
    });
  }, []);

  // Persist on change
  useEffect(() => {
    persist(notifications);
  }, [notifications]);

  // Auto-expire
  useEffect(() => {
    if (notifications.length === 0) return undefined;
    const nextExpiry = Math.min(...notifications.map((n) => n.expiresAt));
    const timer = window.setTimeout(() => {
      const now = Date.now();
      setNotifications((prev) => prev.filter((n) => n.expiresAt > now));
    }, Math.max(0, nextExpiry - Date.now()));
    return () => window.clearTimeout(timer);
  }, [notifications]);

  return { notifications, pushNotification, dismissNotification };
}
