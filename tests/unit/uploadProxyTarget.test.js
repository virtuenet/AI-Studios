import { describe, it, expect } from 'vitest';
import {
  getApiKeyFromRequest,
  isBlockedFileType,
  validateUploadProxyTarget,
} from '../../lib/uploadProxyTarget';

const ENV = { UPLOAD_PROXY_ALLOWED_HOSTS: 'cdn.example.com, files.example.org' };

describe('uploadProxyTarget — SSRF guard', () => {
  it('rejects missing or invalid targets', () => {
    expect(validateUploadProxyTarget('', { env: ENV })).toEqual({ ok: false, reason: 'missing_target' });
    expect(validateUploadProxyTarget('not a url', { env: ENV }).reason).toBe('invalid_url');
    expect(validateUploadProxyTarget(null, { env: ENV }).reason).toBe('missing_target');
  });

  it('rejects non-HTTPS protocols', () => {
    expect(validateUploadProxyTarget('http://cdn.example.com/a.png', { env: ENV }).reason)
      .toBe('unsafe_protocol');
    expect(validateUploadProxyTarget('file:///etc/passwd', { env: ENV }).reason)
      .toBe('unsafe_protocol');
  });

  it('blocks loopback, private ranges, link-local and IP literals', () => {
    for (const target of [
      'https://localhost/a.png',
      'https://127.0.0.1/a.png',
      'https://10.0.0.5/a.png',
      'https://192.168.1.10/a.png',
      'https://172.16.0.1/a.png',
      'https://169.254.169.254/latest/meta-data',
      'https://[::1]/a.png',
      'https://8.8.8.8/a.png',
    ]) {
      expect(validateUploadProxyTarget(target, { env: ENV }).reason, target).toBe('host_not_allowed');
    }
  });

  it('allows configured hosts only', () => {
    expect(validateUploadProxyTarget('https://cdn.example.com/a.png', { env: ENV }).ok).toBe(true);
    expect(validateUploadProxyTarget('https://files.example.org/a.png', { env: ENV }).ok).toBe(true);
    expect(validateUploadProxyTarget('https://evil.example.net/a.png', { env: ENV }).reason)
      .toBe('host_not_allowed');
  });

  it('allows S3 hosts (virtual-hosted, path-style, regional)', () => {
    for (const target of [
      'https://s3.amazonaws.com/bucket/key.png',
      'https://my-bucket.s3.amazonaws.com/key.png',
      'https://s3.us-east-1.amazonaws.com/bucket/key.png',
      'https://my-bucket.s3.us-west-2.amazonaws.com/key.png',
    ]) {
      expect(validateUploadProxyTarget(target, { env: ENV }).ok, target).toBe(true);
    }
  });

  it('rejects malformed S3 hostnames', () => {
    for (const target of [
      'https://.s3.amazonaws.com/key.png',
      'https://bucket..s3.amazonaws.com/key.png',
      'https://s3..amazonaws.com/key.png',
      'https://s3.UPPER_region.amazonaws.com/key.png',
    ]) {
      expect(validateUploadProxyTarget(target, { env: ENV }).reason, target).toBe('host_not_allowed');
    }
  });

  it('normalizes trailing dots and works with no allowlist', () => {
    expect(validateUploadProxyTarget('https://cdn.example.com./a.png', { env: ENV }).ok).toBe(true);
    expect(validateUploadProxyTarget('https://cdn.example.com/a.png', { env: {} }).reason)
      .toBe('host_not_allowed');
  });
});

describe('uploadProxyTarget — file type guard', () => {
  it('blocks dangerous extensions', () => {
    for (const name of ['payload.html', 'x.svg', 'run.exe', 'a.php', 'b.js', 'c.sh', 'd.py']) {
      expect(isBlockedFileType(name)).toBe(true);
    }
  });

  it('blocks dangerous MIME types', () => {
    for (const mime of ['text/html', 'image/svg+xml', 'application/javascript', 'application/x-msdownload']) {
      expect(isBlockedFileType('file.png', mime)).toBe(true);
    }
  });

  it('allows normal media types', () => {
    expect(isBlockedFileType('photo.png', 'image/png')).toBe(false);
    expect(isBlockedFileType('clip.mp4', 'video/mp4; codecs=avc1')).toBe(false);
    expect(isBlockedFileType('song.mp3', 'audio/mpeg')).toBe(false);
    expect(isBlockedFileType('', '')).toBe(false);
  });
});

describe('uploadProxyTarget — API key extraction', () => {
  const requestWith = (headers) => ({ headers: { get: (k) => headers[k] ?? null } });

  it('prefers bearer tokens', () => {
    expect(getApiKeyFromRequest(requestWith({ Authorization: 'Bearer abc123' }))).toBe('abc123');
  });

  it('falls back to x-api-key', () => {
    expect(getApiKeyFromRequest(requestWith({ 'x-api-key': '  key-1  ' }))).toBe('key-1');
  });

  it('returns null when absent or malformed', () => {
    expect(getApiKeyFromRequest(requestWith({}))).toBeNull();
    expect(getApiKeyFromRequest(requestWith({ Authorization: 'Basic xyz' }))).toBeNull();
    expect(getApiKeyFromRequest(requestWith({ Authorization: 'Bearer   ' }))).toBeNull();
    expect(getApiKeyFromRequest(null)).toBeNull();
    expect(getApiKeyFromRequest({})).toBeNull();
  });
});
