// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { middleware } from '../../middleware';

function request(pathname) {
  return new NextRequest(`http://localhost${pathname}`);
}

describe('middleware hardening', () => {
  it('sets security headers on HTML routes', () => {
    const response = middleware(request('/studio/image'));
    expect(response.headers.get('x-content-type-options')).toBe('nosniff');
    expect(response.headers.get('x-frame-options')).toBe('DENY');
    expect(response.headers.get('referrer-policy')).toBe('strict-origin-when-cross-origin');
    expect(response.headers.get('content-security-policy')).toContain("default-src 'self'");
    expect(response.headers.get('x-locale')).toBe('en');
    expect(response.headers.get('x-request-id')).toMatch(/[0-9a-f-]{8,}/);
  });

  it('propagates an incoming request id', () => {
    const req = new NextRequest('http://localhost/studio/image', {
      headers: { 'x-request-id': 'req-test-123' },
    });
    expect(middleware(req).headers.get('x-request-id')).toBe('req-test-123');
  });

  it('detects locale prefixes', () => {
    expect(middleware(request('/ja/studio/video')).headers.get('x-locale')).toBe('ja');
    expect(middleware(request('/fr/studio/audio')).headers.get('x-locale')).toBe('fr');
  });

  it('rewrites standard API calls to Muapi', () => {
    const response = middleware(request('/api/v1/flux-dev'));
    const rewrite = response.headers.get('x-middleware-rewrite');
    expect(rewrite).toContain('api.muapi.ai');
    expect(rewrite).toContain('/api/v1/flux-dev');
  });

  it('leaves dedicated route handlers untouched', () => {
    for (const path of [
      '/api/v1/creative-agent/generate',
      '/api/v1/get_upload_url',
      '/api/v1/upload-binary',
      '/api/workflow/list',
      '/api/agents/by-slug/x',
    ]) {
      const response = middleware(request(path));
      const rewrite = response.headers.get('x-middleware-rewrite');
      expect(rewrite, path).toBeNull();
    }
  });
});
