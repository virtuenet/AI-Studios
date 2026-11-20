import { describe, it, expect, vi, afterEach } from 'vitest';
import { formatErrorMessage } from '../../packages/studio/src/utils/formatError';
import { getImageDownloadFilename, downloadImage } from '../../packages/studio/src/utils/downloadImage';
import { clientTimestamp, createClientId, randomUnit } from '../../packages/studio/src/utils/clientIds';

describe('formatErrorMessage', () => {
  it('uses the fallback for empty errors', () => {
    expect(formatErrorMessage(null)).toBe('Generation failed');
    expect(formatErrorMessage(undefined, 'Nope')).toBe('Nope');
    expect(formatErrorMessage({}, 'Nope')).toBe('Nope');
  });

  it('extracts detail, nested error and top-level message from JSON payloads', () => {
    expect(formatErrorMessage('API Request Failed: 400 Bad Request - {"detail":"bad prompt"}')).toBe('bad prompt');
    expect(formatErrorMessage('{"error":{"message":"quota"}}')).toBe('quota');
    expect(formatErrorMessage('{"message":"slow down"}')).toBe('slow down');
  });

  it('maps common HTTP statuses to friendly messages', () => {
    expect(formatErrorMessage('402 Payment Required')).toMatch(/Insufficient credits/);
    expect(formatErrorMessage('INSUFFICIENT_CREDITS')).toMatch(/Insufficient credits/);
    expect(formatErrorMessage('401 Unauthorized')).toMatch(/Authentication failed/);
    expect(formatErrorMessage('429 Too Many Requests')).toMatch(/Too many requests/);
  });

  it('strips the technical prefix and truncates long messages', () => {
    expect(formatErrorMessage('API Request Failed: 500 Internal Server Error - boom')).toBe('boom');
    const long = 'x'.repeat(200);
    expect(formatErrorMessage(long)).toHaveLength(150);
    expect(formatErrorMessage(long).endsWith('...')).toBe(true);
  });

  it('keeps plain messages and ignores malformed JSON', () => {
    expect(formatErrorMessage('plain failure')).toBe('plain failure');
    expect(formatErrorMessage('{not json}')).toBe('{not json}');
  });
});

describe('image downloads', () => {
  it('replaces the extension with the MIME type one', () => {
    expect(getImageDownloadFilename('photo.png', 'image/jpeg')).toBe('photo.jpg');
    expect(getImageDownloadFilename('photo', 'image/webp')).toBe('photo.webp');
    expect(getImageDownloadFilename('photo.png', 'application/octet-stream')).toBe('photo.png');
  });

  it('downloads through an object URL and revokes it', async () => {
    const click = vi.fn();
    const remove = vi.fn();
    const anchor = { href: '', download: '', click };
    vi.spyOn(document, 'createElement').mockReturnValue(anchor);
    vi.spyOn(document.body, 'appendChild').mockReturnValue(anchor);
    vi.spyOn(document.body, 'removeChild').mockImplementation(remove);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      blob: async () => ({ type: 'image/png' }),
    }));
    const createObjectURL = vi.fn().mockReturnValue('blob:test');
    const revokeObjectURL = vi.fn();
    vi.stubGlobal('URL', { ...URL, createObjectURL, revokeObjectURL });

    await downloadImage('https://cdn/x', 'shot.jpeg');

    expect(anchor.download).toBe('shot.png');
    expect(click).toHaveBeenCalledOnce();
    expect(remove).toHaveBeenCalledOnce();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:test');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
});

describe('client ids', () => {
  it('creates unique-ish ids and timestamps', () => {
    expect(randomUnit()).toBeGreaterThanOrEqual(0);
    expect(randomUnit()).toBeLessThan(1);
    expect(createClientId()).not.toBe(createClientId());
    expect(typeof clientTimestamp()).toBe('number');
  });
});
