// @vitest-environment node
import { describe, it, expect } from 'vitest';
import {
  SESSION_COOKIE,
  encryptApiKey,
  decryptApiKey,
  buildSessionCookie,
  buildClearSessionCookie,
  readApiKeyFromCookieStore,
  readApiKeyFromRequest,
} from '../../lib/session';

describe('server sessions', () => {
  it('round-trips an API key', () => {
    const token = encryptApiKey('key-12345');
    expect(token).not.toContain('key-12345');
    expect(decryptApiKey(token)).toBe('key-12345');
  });

  it('produces a unique ciphertext per call (random IV)', () => {
    expect(encryptApiKey('k')).not.toBe(encryptApiKey('k'));
  });

  it('rejects tampered or malformed tokens', () => {
    const token = encryptApiKey('key-12345');
    const [iv, tag, ct] = token.split('.');
    expect(decryptApiKey(`${iv}.${tag}.${ct.slice(0, -2)}AA`)).toBeNull();
    expect(decryptApiKey('not-a-token')).toBeNull();
    expect(decryptApiKey('')).toBeNull();
    expect(decryptApiKey(null)).toBeNull();
  });

  it('builds an HttpOnly, SameSite=Strict cookie', () => {
    const cookie = buildSessionCookie('key-12345');
    expect(cookie.startsWith(`${SESSION_COOKIE}=`)).toBe(true);
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('SameSite=Strict');
    expect(cookie).toContain('Path=/');
    expect(cookie).not.toContain('key-12345');
  });

  it('builds an expiring clear cookie', () => {
    const cookie = buildClearSessionCookie();
    expect(cookie).toContain(`${SESSION_COOKIE}=;`);
    expect(cookie).toContain('Max-Age=0');
  });

  it('reads keys from cookie stores and request headers', () => {
    const token = encryptApiKey('key-abc');
    const store = { get: (name) => (name === SESSION_COOKIE ? { value: token } : undefined) };
    expect(readApiKeyFromCookieStore(store)).toBe('key-abc');
    expect(readApiKeyFromCookieStore({ get: () => undefined })).toBeNull();

    const request = { headers: { get: (h) => (h === 'cookie' ? `a=b; ${SESSION_COOKIE}=${token}` : null) } };
    expect(readApiKeyFromRequest(request)).toBe('key-abc');
    expect(readApiKeyFromRequest({ headers: { get: () => null } })).toBeNull();
  });
});
