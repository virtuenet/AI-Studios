"use client";

import { useState, useCallback } from 'react';

const STORAGE_KEY = 'sidebar_collapsed';

export default function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem(STORAGE_KEY) === 'true';
    return false;
  });

  const toggle = useCallback(() => {
    setIsCollapsed((prev) => {
      const next = !prev;
      try { localStorage.setItem(STORAGE_KEY, next ? 'true' : 'false'); } catch {}
      return next;
    });
  }, []);

  return { isCollapsed, toggle };
}
