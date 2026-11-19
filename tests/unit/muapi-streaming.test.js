import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockWindow = {
  location: { protocol: 'https:' },
  dispatchEvent: vi.fn(),
  localStorage: { getItem: vi.fn(() => null), setItem: vi.fn(), removeItem: vi.fn(), clear: vi.fn() },
  sessionStorage: { getItem: vi.fn(() => null), setItem: vi.fn(), removeItem: vi.fn(), clear: vi.fn() },
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};
Object.defineProperty(globalThis, 'window', { value: mockWindow, writable: true, configurable: true });

const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

import {
  streamGeneration,
  setStreamingEnabled,
  isStreamingEnabled,
  generateImage,
} from '../../packages/studio/src/muapi';

const KEY = 'test-key';

function sseResponse(chunks, status = 200) {
  const encoder = new TextEncoder();
  let index = 0;
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: { get: (name) => (name.toLowerCase() === 'content-type' ? 'text/event-stream' : null) },
    body: {
      getReader() {
        return {
          async read() {
            if (index >= chunks.length) return { done: true, value: undefined };
            const value = encoder.encode(chunks[index++]);
            return { done: false, value };
          },
        };
      },
    },
  };
}

describe('Streaming API (SSE) with polling fallback', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
    setStreamingEnabled(false);
  });

  afterEach(() => {
    setStreamingEnabled(false);
    vi.useRealTimers();
  });

  it('streaming is disabled by default', () => {
    expect(isStreamingEnabled()).toBe(false);
  });

  it('setStreamingEnabled toggles the flag', () => {
    setStreamingEnabled(true);
    expect(isStreamingEnabled()).toBe(true);
  });

  it('parses SSE progress and completion events', async () => {
    const progress = [];
    mockFetch.mockResolvedValueOnce(
      sseResponse([
        'data: {"status":"processing","progress":10,"request_id":"req-s1"}\n\n',
        'data: {"status":"processing","progress":60,"request_id":"req-s1"}\n\n',
        'data: {"status":"completed","request_id":"req-s1","output":{"url":"https://cdn.example.com/a.png"}}\n\n',
      ])
    );

    const result = await streamGeneration(
      'nano-banana',
      { prompt: 'test' },
      KEY,
      { onProgress: (p) => progress.push(p) }
    );

    expect(progress).toEqual([10, 60]);
    expect(result.url).toBe('https://cdn.example.com/a.png');
    expect(result.request_id).toBe('req-s1');
  });

  it('throws on streamed failure events', async () => {
    mockFetch.mockResolvedValueOnce(
      sseResponse([
        'data: {"status":"failed","error":"Model overloaded"}\n\n',
      ])
    );

    await expect(streamGeneration('nano-banana', {}, KEY)).rejects.toThrow('Model overloaded');
  });

  it('returns null when the endpoint does not support streaming (404)', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404, headers: { get: () => null } });
    const result = await streamGeneration('nano-banana', {}, KEY);
    expect(result).toBeNull();
  });

  it('returns null when content-type is not SSE', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      body: { getReader: () => ({ read: async () => ({ done: true }) }) },
    });
    const result = await streamGeneration('nano-banana', {}, KEY);
    expect(result).toBeNull();
  });

  it('returns null on network error so caller can fall back', async () => {
    mockFetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));
    const result = await streamGeneration('nano-banana', {}, KEY);
    expect(result).toBeNull();
  });

  it('generateImage falls back to submit+poll when streaming returns 404', async () => {
    setStreamingEnabled(true);
    vi.useFakeTimers({ shouldAdvanceTime: true });

    // 1) stream attempt -> 404
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404, headers: { get: () => null } });
    // 2) submit
    mockFetch.mockResolvedValueOnce({
      ok: true, status: 200,
      json: async () => ({ request_id: 'req-fb-1' }),
      text: async () => '',
    });
    // 3) poll -> completed
    mockFetch.mockResolvedValueOnce({
      ok: true, status: 200,
      json: async () => ({ status: 'completed', output: { url: 'https://cdn.example.com/fb.png' } }),
      text: async () => '',
    });

    const promise = generateImage(KEY, { model: 'nano-banana', prompt: 'fallback test' });
    await vi.runAllTimersAsync();
    const result = await promise;

    expect(result.url).toBe('https://cdn.example.com/fb.png');
    // stream attempt + submit + poll
    expect(mockFetch).toHaveBeenCalledTimes(3);
    expect(mockFetch.mock.calls[0][0]).toContain('/stream');
  });

  it('generateImage uses the stream result when available and skips polling', async () => {
    setStreamingEnabled(true);

    mockFetch.mockResolvedValueOnce(
      sseResponse([
        'data: {"status":"completed","request_id":"req-s2","output":{"url":"https://cdn.example.com/stream.png"}}\n\n',
      ])
    );

    const result = await generateImage(KEY, { model: 'nano-banana', prompt: 'stream test' });

    expect(result.url).toBe('https://cdn.example.com/stream.png');
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
