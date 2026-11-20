"use client";

import { useEffect, useRef } from 'react';

export interface PersistentObjectOptions<T> {
  storageKey: string;
  onLoad: (data: T | null) => void;
  getState: () => T;
  deps?: unknown[];
  delayMs?: number;
  enabled?: boolean;
}

/**
 * Persist a studio's composite state to localStorage without repeating the
 * load/debounce-save effects in every studio.
 *
 * - `onLoad(data)` runs once per key with the parsed JSON (or null).
 * - `getState()` returns the current serializable state.
 * - Saves are debounced by `delayMs` and skipped until the first load ran, so
 *   a fresh mount never overwrites stored data with initial values.
 */
export default function usePersistentObject<T>({
  storageKey,
  onLoad,
  getState,
  deps,
  delayMs = 500,
  enabled = true,
}: PersistentObjectOptions<T>): void {
  const loadedRef = useRef(false);
  const onLoadRef = useRef(onLoad);
  const getStateRef = useRef(getState);
  useEffect(() => {
    onLoadRef.current = onLoad;
  }, [onLoad]);
  useEffect(() => {
    getStateRef.current = getState;
  }, [getState]);

  useEffect(() => {
    loadedRef.current = false;
    if (!enabled || !storageKey || typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      onLoadRef.current(raw ? (JSON.parse(raw) as T) : null);
    } catch (error) {
      console.warn(`[usePersistentObject] failed to load ${storageKey}:`, error);
      onLoadRef.current(null);
    } finally {
      loadedRef.current = true;
    }
  }, [storageKey, enabled]);

  useEffect(() => {
    if (!enabled || !storageKey || typeof window === 'undefined') return undefined;
    const timer = setTimeout(() => {
      if (!loadedRef.current) return; // don't clobber stored state before load
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(getStateRef.current()));
      } catch (error) {
        console.warn(`[usePersistentObject] failed to save ${storageKey}:`, error);
      }
    }, delayMs);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, enabled, delayMs, ...(deps || [])]);
}
