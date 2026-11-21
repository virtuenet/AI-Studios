import { describe, it, expect, vi, beforeEach } from 'vitest';
import { checkRateLimit } from '../../lib/rateLimit';

describe('rateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('allows requests within the rate', () => {
    const result = checkRateLimit('key1', { rate: 5, windowMs: 1000, burst: 5 });
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it('blocks requests that exceed the burst', () => {
    const key = 'key2';
    for (let i = 0; i < 3; i++) checkRateLimit(key, { rate: 3, windowMs: 1000, burst: 3 });
    const blocked = checkRateLimit(key, { rate: 3, windowMs: 1000, burst: 3 });
    expect(blocked.allowed).toBe(false);
    expect(blocked.remaining).toBe(0);
  });

  it('refills tokens over time', () => {
    const key = 'key3';
    checkRateLimit(key, { rate: 2, windowMs: 1000, burst: 2 }); // 1 left
    checkRateLimit(key, { rate: 2, windowMs: 1000, burst: 2 }); // 0 left
    vi.advanceTimersByTime(1000); // refill 2 tokens
    const result = checkRateLimit(key, { rate: 2, windowMs: 1000, burst: 2 });
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(1);
  });

  it('isolates keys', () => {
    const a = checkRateLimit('a', { rate: 1, burst: 1 });
    const b = checkRateLimit('b', { rate: 1, burst: 1 });
    expect(a.allowed).toBe(true);
    expect(b.allowed).toBe(true);
  });
});
