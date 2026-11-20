/**
 * Cross-category model deduplication.
 *
 * These IDs are intentionally exposed by more than one generation mode (for
 * example text-to-image and image-to-image). Each pair currently duplicates the
 * full model literal in both category files. After the arrays are imported we
 * keep only one canonical object instance and make the later categories
 * reference it, so edits/objects are shared instead of silently diverging.
 */
import type { ModelDefinition } from '../types/models';

export type ModelLike = Pick<ModelDefinition, 'id'> & Record<string, unknown>;

export const SHARED_MODEL_IDS: readonly string[] = Object.freeze([
  'flux-pulid',
  'flux-redux',
  'qwen-text-to-image-2512',
  'infinitetalk-video-to-video',
  'volcengine-video-to-video-lip-sync',
]);

/**
 * Replace duplicate model objects in later categories with the first canonical
 * object reference. Mutates the category arrays in place and returns them.
 */
export function dedupeSharedModels(
  categories: Record<string, ModelLike[]>
): Record<string, ModelLike[]> {
  const canonical = new Map<string, ModelLike>();
  for (const models of Object.values(categories)) {
    if (!Array.isArray(models)) continue;
    for (let index = 0; index < models.length; index += 1) {
      const model = models[index];
      if (!model || !SHARED_MODEL_IDS.includes(model.id)) continue;
      if (canonical.has(model.id)) {
        models[index] = canonical.get(model.id) as ModelLike;
      } else {
        canonical.set(model.id, model);
      }
    }
  }
  return categories;
}
