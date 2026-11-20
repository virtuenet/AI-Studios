/**
 * Format API and studio error messages into clean, user-friendly strings.
 */

type JsonRecord = Record<string, unknown>;

function asRecord(value: unknown): JsonRecord | null {
  return value && typeof value === 'object' ? (value as JsonRecord) : null;
}

function stringValue(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function errorMessage(err: unknown): string | null {
  if (typeof err === 'string') return err;
  const record = asRecord(err);
  return record ? stringValue(record.message) : null;
}

export function formatErrorMessage(err: unknown, fallback = 'Generation failed'): string {
  if (!err) return fallback;
  let message = errorMessage(err) || fallback;

  // If message contains JSON payload (e.g. `API Request Failed: 402 Payment Required - {...}`)
  if (message.includes('{') && message.includes('}')) {
    try {
      const jsonStart = message.indexOf('{');
      const jsonStr = message.slice(jsonStart);
      const data = asRecord(JSON.parse(jsonStr));
      if (data) {
        const detail = stringValue(data.detail);
        if (detail) return detail;

        const nestedError = asRecord(data.error);
        const nestedMessage = nestedError ? stringValue(nestedError.message) : null;
        if (nestedMessage) return nestedMessage;

        const topMessage = stringValue(data.message);
        if (topMessage) return topMessage;
      }
    } catch {
      // Ignore JSON parse error
    }
  }

  // Handle common HTTP error codes
  if (
    message.includes('402') ||
    message.includes('INSUFFICIENT_CREDITS') ||
    message.toLowerCase().includes('insufficient credits')
  ) {
    return 'Insufficient credits. Please top up your wallet.';
  }
  if (message.includes('401') || message.includes('403')) {
    return 'Authentication failed. Please check your account session or API key.';
  }
  if (message.includes('429')) {
    return 'Too many requests. Please wait a moment and try again.';
  }

  // Strip technical prefix like "API Request Failed: 500 Internal Server Error -"
  message = message.replace(/^API Request Failed: \d+ [^-]+ - /, '');

  return message.length > 150 ? `${message.slice(0, 147)}...` : message;
}
