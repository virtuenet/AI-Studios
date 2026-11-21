/**
 * Inter-frame API key bridge.
 *
 * DesignAgentStudio embeds a CreativeCanvas iframe that reads the API key
 * from localStorage. This utility centralizes that write so the key name
 * and the sessionStorage flag are defined once and the communication
 * contract is documented.
 *
 * This is NOT a persistence pattern — it is synchronous inter-frame
 * communication via the shared browser storage. The iframe reads the
 * token on mount and the flag tells it which studio triggered the load.
 */

const TOKEN_KEY = 'token';
const FROM_STUDIO_KEY = 'fromDesignAgent';

/**
 * Pass the API key and a source flag to the embedded iframe.
 * Called once when the DesignAgentStudio mounts.
 */
export function bridgeApiKeyToIframe(apiKey) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(FROM_STUDIO_KEY, 'true');
    window.localStorage.setItem(TOKEN_KEY, apiKey);
  } catch {
    // Storage may be unavailable (private mode) — the iframe will prompt.
  }
}

/**
 * Clear the bridge when the studio unmounts.
 */
export function clearIframeBridge() {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(FROM_STUDIO_KEY);
    window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore
  }
}
