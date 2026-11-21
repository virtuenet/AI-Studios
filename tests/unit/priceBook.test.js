import { describe, it, expect } from 'vitest';
import { getModelPrice, estimateCost } from '../../packages/studio/src/client/priceBook';

describe('model price book', () => {
  it('returns the default for unknown models', () => {
    const price = getModelPrice('nonexistent');
    expect(price.baseCredits).toBe(1);
    expect(price.freeTier).toBe(true);
  });

  it('returns the correct price for known models', () => {
    const price = getModelPrice('midjourney-v7-text-to-image');
    expect(price.baseCredits).toBe(4);
    expect(price.freeTier).toBe(false);
    expect(price.minPlan).toBe('pro');
  });

  it('estimates video costs with duration', () => {
    const cost = estimateCost('kling-v3.0-standard-text-to-video', { durationSeconds: 5 });
    expect(cost).toBe(15); // 5 base + 5*2 per second
  });

  it('estimates 4K costs', () => {
    const cost = estimateCost('gpt-image-2.6', { is4K: true });
    expect(cost).toBe(5); // 4K override
  });
});
