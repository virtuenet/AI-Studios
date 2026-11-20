"use client";

import { useCallback, useRef, useState } from 'react';

export interface GenerationState {
  isRunning: boolean;
  error: unknown | null;
  start: () => AbortSignal;
  finish: () => void;
  fail: (cause: unknown) => void;
  cancel: () => void;
}

/**
 * Shared generation lifecycle: running/error state plus an AbortController.
 *
 * Usage:
 *   const gen = useGeneration();
 *   const signal = gen.start();
 *   try { await generateImage(apiKey, { ...params, signal }); }
 *   catch (e) { gen.fail(e); }
 *   finally { gen.finish(); }
 */
export default function useGeneration(): GenerationState {
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const start = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setIsRunning(true);
    setError(null);
    return controller.signal;
  }, []);

  const finish = useCallback(() => {
    setIsRunning(false);
  }, []);

  const fail = useCallback((cause: unknown) => {
    if (!(cause instanceof Error) || cause.name !== 'AbortError') setError(cause);
    setIsRunning(false);
  }, []);

  const cancel = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setIsRunning(false);
  }, []);

  return { isRunning, error, start, finish, fail, cancel };
}
