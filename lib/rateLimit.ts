/**
 * Rate-limiting middleware for the SaaS control plane.
 *
 * Uses an in-memory token bucket per key (orgId or IP). Swap for Redis
 * (Upstash) in production. Each bucket refills at `rate` tokens per
 * `windowMs` and bursts up to `burst` requests.
 */

interface Bucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, Bucket>();

function refillBucket(bucket: Bucket, rate: number, windowMs: number, burst: number): void {
  const now = Date.now();
  const elapsed = now - bucket.lastRefill;
  const refill = (elapsed / windowMs) * rate;
  bucket.tokens = Math.min(burst, bucket.tokens + refill);
  bucket.lastRefill = now;
}

/**
 * Check whether a key is within its rate limit.
 * Returns `true` when the request is allowed, `false` when it must be delayed.
 */
export function checkRateLimit(
  key: string,
  { rate = 30, windowMs = 60_000, burst = 60 }: RateLimitOptions = {},
): { allowed: boolean; remaining: number; resetMs: number } {
  let bucket = buckets.get(key);
  if (!bucket) {
    bucket = { tokens: burst, lastRefill: Date.now() };
    buckets.set(key, bucket);
  }

  refillBucket(bucket, rate, windowMs, burst);

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return {
      allowed: true,
      remaining: Math.floor(bucket.tokens),
      resetMs: windowMs - (Date.now() - bucket.lastRefill),
    };
  }

  const resetMs = windowMs - (Date.now() - bucket.lastRefill);
  return { allowed: false, remaining: 0, resetMs: Math.max(0, resetMs) };
}

export interface RateLimitOptions {
  /** Number of requests allowed per windowMs. */
  rate?: number;
  /** Window duration in milliseconds. */
  windowMs?: number;
  /** Maximum burst capacity. */
  burst?: number;
}

/** Clean up stale buckets every 5 minutes. */
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (now - bucket.lastRefill > 600_000) buckets.delete(key);
    }
  }, 300_000);
}

// ── Next.js route helper ──────────────────────────────────────────

import { NextResponse, type NextRequest } from 'next/server';

export function rateLimitResponse(
  request: NextRequest,
  key: string,
  options?: RateLimitOptions,
): NextResponse | null {
  const result = checkRateLimit(key, options);
  if (!result.allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(result.resetMs / 1000)),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil((Date.now() + result.resetMs) / 1000)),
        },
      },
    );
  }
  return null;
}

/** Rate-limit by org ID (managed mode) or IP (BYOK mode). */
export function rateLimitKey(request: NextRequest, orgId?: string): string {
  if (orgId) return `org:${orgId}`;
  return `ip:${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'}`;
}
