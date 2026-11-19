import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockWindow = {
  location: { href: 'https://app.example/studio/image', protocol: 'https:' },
  dispatchEvent: vi.fn(),
  localStorage: { getItem: vi.fn(() => null), setItem: vi.fn(), removeItem: vi.fn(), clear: vi.fn() },
  sessionStorage: {
    _data: {},
    getItem(key) { return this._data[key] ?? null; },
    setItem(key, value) { this._data[key] = String(value); },
    removeItem(key) { delete this._data[key]; },
    clear() { this._data = {}; },
  },
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};
Object.defineProperty(globalThis, 'window', { value: mockWindow, writable: true, configurable: true });
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'vitest' }, writable: true, configurable: true });

const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

import {
  reportError,
  getErrorBuffer,
  clearErrorBuffer,
} from '../../packages/studio/src/utils/errorReporter';

describe('Error reporter', () => {
  beforeEach(() => {
    clearErrorBuffer();
    mockFetch.mockReset();
    delete mockWindow.__AI_STUDIOS_ERROR_ENDPOINT__;
    mockWindow.sessionStorage.clear();
  });

  it('buffers reported errors', async () => {
    await reportError({ source: 'test', error: new Error('boom'), context: { studio: 'image' } });
    const buffer = getErrorBuffer();
    expect(buffer).toHaveLength(1);
    expect(buffer[0].message).toBe('boom');
    expect(buffer[0].source).toBe('test');
    expect(buffer[0].context.studio).toBe('image');
  });

  it('caps the buffer at 50 entries', async () => {
    // Advance time between batches to stay under the per-minute rate limit.
    const realNow = Date.now;
    let clock = realNow();
    Date.now = () => clock;
    try {
      for (let i = 0; i < 55; i++) {
        if (i > 0 && i % 5 === 0) clock += 61_000;
        await reportError({ source: 'test', error: `error ${i}` });
      }
    } finally {
      Date.now = realNow;
    }
    const buffer = getErrorBuffer();
    expect(buffer).toHaveLength(50);
    expect(buffer[buffer.length - 1].message).toBe('error 54');
  });

  it('suppresses duplicate reports within 5 seconds', async () => {
    await reportError({ source: 'dup', error: 'same failure' });
    await reportError({ source: 'dup', error: 'same failure' });
    expect(getErrorBuffer().filter((e) => e.message === 'same failure')).toHaveLength(1);
  });

  it('rate limits to 10 reports per minute', async () => {
    for (let i = 0; i < 15; i++) {
      await reportError({ source: `rate-${i}`, error: `unique ${i}` });
    }
    expect(getErrorBuffer()).toHaveLength(10);
  });

  it('persists the buffer to sessionStorage', async () => {
    await reportError({ source: 'test', error: 'persisted' });
    expect(mockWindow.sessionStorage.getItem('ai_studios_error_buffer_v1')).toContain('persisted');
  });

  it('does not call fetch when no endpoint is configured', async () => {
    await reportError({ source: 'test', error: 'no endpoint' });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('posts to the configured endpoint with keepalive', async () => {
    mockWindow.__AI_STUDIOS_ERROR_ENDPOINT__ = 'https://errors.example/collect';
    mockFetch.mockResolvedValueOnce({ ok: true });

    const accepted = await reportError({
      source: 'generation',
      error: new Error('api failed'),
      context: { model: 'nano-banana' },
    });

    expect(accepted).toBe(true);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe('https://errors.example/collect');
    expect(options.keepalive).toBe(true);
    expect(JSON.parse(options.body).message).toBe('api failed');
  });

  it('never throws when the endpoint is unreachable', async () => {
    mockWindow.__AI_STUDIOS_ERROR_ENDPOINT__ = 'https://errors.example/collect';
    mockFetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));

    await expect(
      reportError({ source: 'test', error: 'network down' })
    ).resolves.toBe(false);
  });

  it('suppresses console noise but still records', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    await reportError({ source: 'quiet', error: 'logged once' });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    expect(getErrorBuffer()).toHaveLength(1);
  });
});
