"use client";

import { useCallback, useRef, useState } from 'react';

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
export default function useGeneration() {
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

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

  const fail = useCallback((cause) => {
    if (cause?.name !== 'AbortError') setError(cause);
    setIsRunning(false);
  }, []);

  const cancel = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setIsRunning(false);
  }, []);

  return { isRunning, error, start, finish, fail, cancel };
}
