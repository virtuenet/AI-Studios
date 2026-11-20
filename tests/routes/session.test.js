// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { POST, GET, DELETE } from '../../app/api/session/route';
import { SESSION_COOKIE, decryptApiKey } from '../../lib/session';

function jsonRequest(body, headers = {}) {
  return new Request('http://localhost/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', host: 'localhost', ...headers },
    body: JSON.stringify(body),
  });
}

describe('/api/session', () => {
  it('stores a valid key in an encrypted HttpOnly cookie', async () => {
    const response = await POST(jsonRequest({ apiKey: 'valid-key-123' }));
    expect(response.status).toBe(200);
    const setCookie = response.headers.get('set-cookie');
    expect(setCookie).toContain('HttpOnly');
    expect(setCookie).toContain('SameSite=Strict');
    const token = setCookie.split(';')[0].split('=').slice(1).join('=');
    expect(decryptApiKey(token)).toBe('valid-key-123');
  });

  it('rejects missing or header-unsafe keys', async () => {
    expect((await POST(jsonRequest({ apiKey: '' }))).status).toBe(400);
    expect((await POST(jsonRequest({ apiKey: 'bad\nkey' }))).status).toBe(400);
  });

  it('rejects malformed JSON', async () => {
    const request = new Request('http://localhost/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', host: 'localhost' },
      body: '{not json',
    });
    expect((await POST(request)).status).toBe(400);
  });

  it('rejects cross-origin writes', async () => {
    const response = await POST(jsonRequest({ apiKey: 'valid-key' }, { origin: 'https://evil.example' }));
    expect(response.status).toBe(403);
  });

  it('reports session presence without leaking the key', async () => {
    const response = await GET(new Request('http://localhost/api/session'));
    const body = await response.json();
    expect(body).toEqual({ hasSession: false });
  });

  it('clears the session', async () => {
    const response = await DELETE(new Request('http://localhost/api/session', { headers: { host: 'localhost' } }));
    expect(response.status).toBe(200);
    expect(response.headers.get('set-cookie')).toContain(`${SESSION_COOKIE}=;`);
  });
});
