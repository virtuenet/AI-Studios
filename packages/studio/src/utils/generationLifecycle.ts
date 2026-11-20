/**
 * Generation polling lifecycle. Converted from JS as part of the incremental
 * TypeScript migration; no behavior changes.
 */

export interface GenerationResult {
  status?: string;
  error?: string | { message?: string };
  message?: string;
  cost?: { refunded?: boolean; amount_credits?: number };
  [key: string]: unknown;
}

export interface PollOptions {
  baseUrl: string;
  requestId: string;
  apiKey: string;
  maxAttempts?: number;
  interval?: number;
  onAuthRequired?: (status: number, detail: string) => void;
  fetchImpl?: typeof fetch;
}

export type GenerationError = Error & {
  requestId?: string;
  generationResult?: GenerationResult;
};

const SUCCESS_STATUSES = new Set(['completed', 'succeeded', 'success']);
const FAILURE_STATUSES = new Set(['failed', 'error', 'cancelled', 'canceled']);

const wait = (milliseconds: number) => new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

function getGenerationErrorDetail(result: GenerationResult): string {
  if (typeof result?.error === 'string') return result.error;
  if (typeof result?.error?.message === 'string') return result.error.message;
  if (typeof result?.message === 'string') return result.message;
  return 'Unknown error';
}

function createGenerationError(result: GenerationResult, requestId: string): GenerationError {
  const error = new Error(`Generation failed: ${getGenerationErrorDetail(result)}`) as GenerationError;
  error.requestId = requestId;
  error.generationResult = result;
  return error;
}

export function appendGenerationRefundNotice(message: string, error: GenerationError): string {
  const cost = error?.generationResult?.cost;
  if (cost?.refunded !== true) return message;

  const credits = cost.amount_credits;
  const notice = Number.isFinite(credits)
    ? `Refunded ${credits} credit${credits === 1 ? '' : 's'}.`
    : 'The generation cost was refunded.';
  return `${message} ${notice}`;
}

export async function pollForGenerationResult({
  baseUrl,
  requestId,
  apiKey,
  maxAttempts = 900,
  interval = 2000,
  onAuthRequired,
  fetchImpl = fetch,
}: PollOptions): Promise<GenerationResult> {
  const pollUrl = `${baseUrl}/api/v1/predictions/${requestId}/result`;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    await wait(interval);

    let response: Response;
    try {
      response = await fetchImpl(pollUrl, {
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
      });
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      continue;
    }

    if (!response.ok) {
      const detail = await response.text();
      const error = new Error(`Poll Failed: ${response.status} - ${detail.slice(0, 100)}`) as GenerationError;
      error.requestId = requestId;

      if (response.status >= 500 && attempt < maxAttempts) continue;
      onAuthRequired?.(response.status, detail);
      throw error;
    }

    let result: GenerationResult;
    try {
      result = (await response.json()) as GenerationResult;
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      continue;
    }

    const status = result.status?.toLowerCase();
    if (status && SUCCESS_STATUSES.has(status)) return result;
    if (status && FAILURE_STATUSES.has(status)) throw createGenerationError(result, requestId);
  }

  const error = new Error(`Generation timed out after polling. Request ID: ${requestId}`) as GenerationError;
  error.requestId = requestId;
  throw error;
}
