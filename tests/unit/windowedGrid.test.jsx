import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useWindowedGrid from '../../packages/studio/src/hooks/useWindowedGrid';

function fakeScrollRef(height = 800) {
  const element = {
    scrollTop: 0,
    clientHeight: height,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  return { current: element };
}

describe('useWindowedGrid', () => {
  it('renders everything below the threshold', () => {
    const ref = fakeScrollRef();
    const { result } = renderHook(() => useWindowedGrid({ count: 10, scrollRef: ref }));
    expect(result.current.enabled).toBe(false);
    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(10);
    expect(result.current.topSpacer).toBe(0);
  });

  it('windows large grids and reports spacers', () => {
    const ref = fakeScrollRef(800);
    const { result } = renderHook(() =>
      useWindowedGrid({ count: 400, columns: 4, rowHeight: 400, scrollRef: ref, overscan: 1 })
    );
    expect(result.current.enabled).toBe(true);
    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBeGreaterThan(0);
    expect(result.current.endIndex).toBeLessThan(400);
    expect(result.current.bottomSpacer).toBeGreaterThan(0);
  });

  it('advances the window when scrolled', () => {
    const ref = fakeScrollRef(800);
    const { result } = renderHook(() =>
      useWindowedGrid({ count: 400, columns: 4, rowHeight: 400, scrollRef: ref, overscan: 0 })
    );
    const before = result.current.startIndex;
    ref.current.scrollTop = 4000;
    act(() => {
      const handler = ref.current.addEventListener.mock.calls[0][1];
      handler();
    });
    expect(result.current.startIndex).toBeGreaterThan(before);
  });

  it('handles zero items', () => {
    const ref = fakeScrollRef();
    const { result } = renderHook(() => useWindowedGrid({ count: 0, scrollRef: ref }));
    expect(result.current.endIndex).toBe(0);
  });
});
