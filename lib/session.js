/**
 * Server-side API-key sessions.
 *
 * The BYOK key lives in the browser for direct proxy calls, but server-rendered
 * pages (/agents/*) must not trust a JavaScript-writable cookie. We instead
 * issue an AES-256-GCM encrypted, HttpOnly, Secure (in production),
 * SameSite=Strict cookie. The key never appears in the cookie in plaintext and
 * server components cannot be impersonated by script-injected cookies.
 *
 * Configure SESSION_SECRET (32+ bytes) in production. In development a fixed
 * fallback is used so the app remains runnable; it is rejected in production.
 */
import crypto from 'crypto';

export const SESSION_COOKIE = 'ai_studios_session';
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

const DEV_SECRET = 'ai-studios-development-session-secret-do-not-use-in-production';
const ALGORITHM = 'aes-256-gcm';
// process-local fallback secret used when SESSION_SECRET is missing; sessions do
// not survive restarts, but encryption still protects the cookie contents.
const FALLBACK_SECRET = crypto.randomBytes(32).toString('hex');
let warnedMissingSecret = false;

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === 'production') {
    if (!warnedMissingSecret) {
      warnedMissingSecret = true;
      console.warn(
        '[session] SESSION_SECRET is not set; using a process-local secret. ' +
          'Sessions will be invalidated on restart. Set SESSION_SECRET (32+ chars) in production.'
      );
    }
    return FALLBACK_SECRET;
  }
  return DEV_SECRET;
}

function deriveKey() {
  return crypto.createHash('sha256').update(getSecret()).digest();
}

/** Encrypt an API key into a compact URL-safe token (iv.tag.ciphertext). */
export function encryptApiKey(apiKey) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGORITHM, deriveKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(apiKey, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, ciphertext].map((part) => part.toString('base64url')).join('.');
}

/** Decrypt a session token; returns null for malformed/tampered input. */
export function decryptApiKey(token) {
  if (typeof token !== 'string' || token.split('.').length !== 3) return null;
  try {
    const [iv, tag, ciphertext] = token.split('.').map((part) => Buffer.from(part, 'base64url'));
    const decipher = crypto.createDecipheriv(ALGORITHM, deriveKey(), iv);
    decipher.setAuthTag(tag);
    const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return plaintext.toString('utf8');
  } catch {
    return null;
  }
}

/** Build the Set-Cookie value for a session. */
export function buildSessionCookie(apiKey, { maxAge = SESSION_MAX_AGE_SECONDS } = {}) {
  const token = encryptApiKey(apiKey);
  const attributes = [
    `${SESSION_COOKIE}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${maxAge}`,
  ];
  if (process.env.NODE_ENV === 'production') attributes.push('Secure');
  return attributes.join('; ');
}

/** Build the Set-Cookie value that clears the session. */
export function buildClearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${
    process.env.NODE_ENV === 'production' ? '; Secure' : ''
  }`;
}

/**
 * Read the API key from a Next.js cookie store (or any object with `get`).
 * Returns null when absent or tampered with.
 */
export function readApiKeyFromCookieStore(cookieStore) {
  const raw = cookieStore?.get?.(SESSION_COOKIE)?.value;
  if (!raw) return null;
  return decryptApiKey(raw);
}

/** Extract the session API key from a Request's Cookie header. */
export function readApiKeyFromRequest(request) {
  const header = request?.headers?.get?.('cookie');
  if (!header) return null;
  const match = header
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));
  if (!match) return null;
  return decryptApiKey(match.slice(SESSION_COOKIE.length + 1));
}
