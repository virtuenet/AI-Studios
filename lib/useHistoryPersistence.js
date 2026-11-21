"use client";

import { useEffect, useCallback, useRef } from 'react';

/**
 * History persistence hook for studios that use callback-based saves
 * (e.g., saveHistory(items) pattern). Handles load-on-mount and
 * provides a wrapped saveHistory that persists to localStorage.
 *
 * Usage:
 *   const [history, setHistory] = useState([]);
 *   const saveHistory = useHistoryPersistence(PERSIST_KEY, setHistory);
 */
export default function useHistoryPersistence(storageKey, setHistory) {
  const hasRestored = useRef(false);

  // Load on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(saved)) {
        setHistory(saved);
      }
    } catch {
      // ignore
    }
    hasRestored.current = true;
  }, [storageKey, setHistory]);

  // Return a save function that updates state + persists
  const saveHistory = useCallback((items) => {
    setHistory(items);
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [storageKey, setHistory]);

  return { saveHistory, hasRestored };
}
