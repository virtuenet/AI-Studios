/**
 * Model price book for the managed SaaS deployment.
 *
 * Each model has a credit cost that covers the provider fee plus a margin.
 * In production, this is stored in Postgres and cached; for now it is a
 * typed constant that the BFF reads at request time.
 *
 * Costs are in "credits" (1 credit = the smallest billable unit).
 */

export interface ModelPrice {
  /** The model ID as it appears in the catalog. */
  modelId: string;
  /** Credits charged for a standard-resolution generation. */
  baseCredits: number;
  /** Extra credits for 4K / high-resolution. */
  credits4K?: number;
  /** Credits per second of video (0 for image models). */
  creditsPerSecond?: number;
  /** Credits per audio generation. */
  creditsPerAudio?: number;
  /** Whether this model is available on the free plan. */
  freeTier: boolean;
  /** Minimum plan required (starter, pro, business, enterprise). */
  minPlan: 'free' | 'starter' | 'pro' | 'business' | 'enterprise';
}

export const MODEL_PRICE_BOOK: ModelPrice[] = [
  // ── Image models ────────────────────────────────────────────
  { modelId: 'flux-2-klein-4b', baseCredits: 1, freeTier: true, minPlan: 'free' },
  { modelId: 'flux-2-pro', baseCredits: 3, freeTier: false, minPlan: 'starter' },
  { modelId: 'gpt-image-2', baseCredits: 2, freeTier: false, minPlan: 'starter' },
  { modelId: 'gpt-image-2.6', baseCredits: 3, credits4K: 5, freeTier: false, minPlan: 'pro' },
  { modelId: 'midjourney-v7-text-to-image', baseCredits: 4, freeTier: false, minPlan: 'pro' },
  { modelId: 'seedream-5.0', baseCredits: 2, freeTier: false, minPlan: 'starter' },
  { modelId: 'wan3.0-text-to-image', baseCredits: 2, freeTier: true, minPlan: 'free' },
  { modelId: 'qwen-image-2.0', baseCredits: 2, freeTier: true, minPlan: 'free' },

  // ── Video models ────────────────────────────────────────────
  { modelId: 'kling-v3.0-standard-text-to-video', baseCredits: 5, creditsPerSecond: 2, freeTier: false, minPlan: 'starter' },
  { modelId: 'seedance-2.5-text-to-video', baseCredits: 4, creditsPerSecond: 2, freeTier: false, minPlan: 'starter' },
  { modelId: 'wan3.0-text-to-video', baseCredits: 3, creditsPerSecond: 1, freeTier: false, minPlan: 'starter' },
  { modelId: 'veo-3-text-to-video', baseCredits: 6, creditsPerSecond: 3, freeTier: false, minPlan: 'pro' },

  // ── Audio models ────────────────────────────────────────────
  { modelId: 'musicgen', baseCredits: 1, creditsPerAudio: 2, freeTier: true, minPlan: 'free' },
];

const priceById = new Map(MODEL_PRICE_BOOK.map((p) => [p.modelId, p]));

/** Look up a model's price. Returns the default (1 credit, free tier) for unknown models. */
export function getModelPrice(modelId: string): ModelPrice {
  return priceById.get(modelId) || { modelId, baseCredits: 1, freeTier: true, minPlan: 'free' };
}

/** Estimate the credit cost for a generation request. */
export function estimateCost(modelId: string, options?: { durationSeconds?: number; is4K?: boolean }): number {
  const price = getModelPrice(modelId);
  let cost = price.baseCredits;
  if (options?.is4K && price.credits4K) cost = price.credits4K;
  if (options?.durationSeconds && price.creditsPerSecond) {
    cost += Math.ceil(options.durationSeconds) * price.creditsPerSecond;
  }
  return cost;
}
