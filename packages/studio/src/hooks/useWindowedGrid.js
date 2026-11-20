"use client";

import { startTransition, useEffect, useMemo, useState } from 'react';

/**
 * Minimal windowed grid: renders only rows intersecting the scroll viewport
 * (plus overscan) and reports spacer heights for the skipped rows.
 */
export default function useWindowedGrid({
  count,
  columns = 4,
  rowHeight = 400,
  scrollRef,
  overscan = 2,
  threshold = 40,
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);

  useEffect(() => {
    const element = scrollRef?.current;
    if (!element) return undefined;
    const update = () => {
      setScrollTop(element.scrollTop);
      setViewportHeight(element.clientHeight || 800);
    };
    startTransition(update);
    element.addEventListener('scroll', update, { passive: true });
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(element);
    return () => {
      element.removeEventListener('scroll', update);
      observer?.disconnect();
    };
  }, [scrollRef]);

  const enabled = count > threshold;

  return useMemo(() => {
    if (!enabled) {
      return {
        enabled,
        startIndex: 0,
        endIndex: count,
        topSpacer: 0,
        bottomSpacer: 0,
      };
    }
    const rows = Math.ceil(count / columns);
    const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
    const visibleRows = Math.ceil(viewportHeight / rowHeight) + overscan * 2;
    const endRow = Math.min(rows, startRow + visibleRows);
    return {
      enabled,
      startIndex: startRow * columns,
      endIndex: Math.min(count, endRow * columns),
      topSpacer: startRow * rowHeight,
      bottomSpacer: Math.max(0, (rows - endRow) * rowHeight),
    };
  }, [enabled, count, columns, rowHeight, scrollTop, viewportHeight, overscan]);
}
