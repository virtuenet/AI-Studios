import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useGeneration from '../../packages/studio/src/hooks/useGeneration';
import usePersistentObject from '../../packages/studio/src/hooks/usePersistentObject';

describe('useGeneration', () => {
  it('starts, finishes and exposes an abort signal', () => {
    const { result } = renderHook(() => useGeneration());
    let signal;
    act(() => { signal = result.current.start(); });
    expect(result.current.isRunning).toBe(true);
    expect(signal.aborted).toBe(false);

    act(() => result.current.cancel());
    expect(signal.aborted).toBe(true);
    expect(result.current.isRunning).toBe(false);
  });

  it('records errors but ignores aborts', () => {
    const { result } = renderHook(() => useGeneration());
    act(() => result.current.fail(new Error('boom')));
    expect(result.current.error?.message).toBe('boom');

    const abort = new Error('aborted');
    abort.name = 'AbortError';
    act(() => result.current.fail(abort));
    expect(result.current.error?.message).toBe('boom');
  });

  it('aborts a previous run when starting again', () => {
    const { result } = renderHook(() => useGeneration());
    let first;
    act(() => { first = result.current.start(); });
    act(() => { result.current.start(); });
    expect(first.aborted).toBe(true);
  });
});

describe('usePersistentObject', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });
  afterEach(() => vi.useRealTimers());

  it('loads stored JSON once and saves debounced state', () => {
    localStorage.setItem('studio-key', JSON.stringify({ model: 'x' }));
    const onLoad = vi.fn();
    const getState = vi.fn(() => ({ model: 'y' }));

    renderHook(() =>
      usePersistentObject({ storageKey: 'studio-key', onLoad, getState, deps: ['y'] })
    );

    expect(onLoad).toHaveBeenCalledWith({ model: 'x' });

    act(() => { vi.advanceTimersByTime(600); });
    expect(getState).toHaveBeenCalled();
    expect(JSON.parse(localStorage.getItem('studio-key'))).toEqual({ model: 'y' });
  });

  it('does not save before load and skips when disabled', () => {
    const getState = vi.fn(() => ({ a: 1 }));
    const { rerender } = renderHook(
      ({ enabled }) =>
        usePersistentObject({ storageKey: 'k2', onLoad: vi.fn(), getState, deps: [enabled], enabled }),
      { initialProps: { enabled: false } }
    );
    act(() => { vi.advanceTimersByTime(600); });
    expect(getState).not.toHaveBeenCalled();

    rerender({ enabled: true });
    act(() => { vi.advanceTimersByTime(600); });
    expect(getState).toHaveBeenCalled();
  });

  it('handles corrupt stored data without throwing', () => {
    localStorage.setItem('bad', '{not json');
    const onLoad = vi.fn();
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    renderHook(() => usePersistentObject({ storageKey: 'bad', onLoad, getState: () => ({}), deps: [] }));
    expect(onLoad).toHaveBeenCalledWith(null);
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});
