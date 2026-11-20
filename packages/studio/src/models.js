import { getMediaCapability } from "./modelCapabilities";

// Synced from the canonical Muapi schema_data.json catalog.
import {
  getAspectRatioOptions,
  I2I_DIMENSION_RATIOS,
  T2I_DIMENSION_RATIOS,
} from './imageSizing';

import { t2iModels } from './models/t2iModels.js';
import { t2vModels } from './models/t2vModels.js';
import { i2iModels } from './models/i2iModels.js';
import { i2vModels } from './models/i2vModels.js';
import { v2vModels } from './models/v2vModels.js';
import { lipsyncModels } from './models/lipsyncModels.js';
import { recastModels } from './models/recastModels.js';
import { motionControlModels } from './models/motionControlModels.js';
import { audioModels } from './models/audioModels.js';
import { dedupeSharedModels } from './models/sharedModels.js';

// Keep one canonical object per cross-category model (shared references).
dedupeSharedModels({
  t2iModels, t2vModels, i2iModels, i2vModels, v2vModels,
  lipsyncModels, recastModels, motionControlModels, audioModels,
});

// Re-export the arrays so existing imports from './models.js' keep working.
export { t2iModels, t2vModels, i2iModels, i2vModels, v2vModels, lipsyncModels, recastModels, motionControlModels, audioModels };


export const getModelById = (id) => t2iModels.find(m => m.id === id);

export const getSelectableAspectRatiosForModel = (modelId) => {
  const model = getModelById(modelId);
  return getAspectRatioOptions(model, T2I_DIMENSION_RATIOS);
};

export const getAspectRatiosForModel = (modelId) => {
  const model = getModelById(modelId);
  if (!model) return ['1:1'];

  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) return arInput.enum;
  return ['1:1', '16:9', '9:16', '4:3', '3:2', '21:9'];
};

// ==========================================
// Text-to-Video Models
// ==========================================

export const getVideoModelById = (id) => t2vModels.find(m => m.id === id);

const getDependentEnumValues = (input, selections = {}) => {
  const values = input?.enum || [];
  const dependencies = input?.enum_dependencies;
  if (!dependencies) return values;

  return Object.entries(dependencies).reduce((available, [field, rules]) => {
    const selectedValue = selections[field];
    const allowedValues = rules?.[String(selectedValue)];
    if (!allowedValues) return available;
    const allowed = new Set(allowedValues);
    return available.filter(value => allowed.has(value));
  }, values);
};

export const getAspectRatiosForVideoModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return ['16:9'];
  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) return arInput.enum;
  return ['16:9', '9:16', '1:1'];
};

const getInputOptions = (input) => {
  if (!input) return [];
  if (input.enum) return input.enum;
  if (input.minValue !== undefined && input.maxValue !== undefined) {
    const step = input.step ?? 1;
    const precision = Math.max(
      String(input.minValue).split('.')[1]?.length || 0,
      String(step).split('.')[1]?.length || 0,
    );
    const count = Math.floor((input.maxValue - input.minValue) / step + 1e-9);
    return Array.from(
      { length: count + 1 },
      (_, index) => Number((input.minValue + index * step).toFixed(precision)),
    );
  }
  return input.default !== undefined ? [input.default] : [];
};

export const getDurationsForModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return [5];
  return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForVideoModel = (modelId, selections = {}) => {
  const model = getVideoModelById(modelId);
  if (!model) return [];
  const resInput = model.inputs?.resolution;
  if (resInput?.enum) return getDependentEnumValues(resInput, selections);
  return [];
};
// Auto-generated from schema_data.json — Image to Image models

// Auto-generated from schema_data.json — Image to Video models

export const getI2IModelById = (id) => i2iModels.find(m => m.id === id);
export const getI2VModelById = (id) => i2vModels.find(m => m.id === id);

export const getMaxImagesForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model ? getMediaCapability(model, 'image').maxItems : 1;
};

export const getSelectableAspectRatiosForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return getAspectRatioOptions(model, I2I_DIMENSION_RATIOS);
};

export const getAspectRatiosForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return ['1:1'];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['1:1', '16:9', '9:16'];
};

export const getAspectRatiosForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return ['16:9'];
    if (model.aspectRatioMode === 'inherited') return [];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['16:9', '9:16', '1:1'];
};

export const getDurationsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForI2VModel = (modelId, selections = {}) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    const res = model.inputs && model.inputs.resolution;
    if (res?.enum) return getDependentEnumValues(res, selections);
    return [];
};

// Effect-style models declare `inputs.name` as an enum of effect types.
export const getEffectsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model?.inputs?.name?.default || null;
};

export const getResolutionsForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

export const getEffectsForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model?.inputs?.name?.default || null;
};

// Returns the payload field name for quality/resolution for a t2i model ('resolution', 'quality', or null)
export const getQualityFieldForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns quality/resolution options for a t2i model
export const getResolutionsForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

// Returns the payload field name for quality/resolution for an i2i model ('resolution', 'quality', or null)
export const getQualityFieldForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns the maximum number of images an i2i model accepts (defaults to 1)
export const getMaxImagesForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model ? getMediaCapability(model, 'image').maxItems : 1;
};

// ─── Video-to-Video models ────────────────────────────────────────────────────

// ─── LipSync / Speech-to-Video models ────────────────────────────────────────
// Image-based: portrait image + audio → talking video
// Video-based: existing video + audio → lipsync video

export const getLipSyncModelById = (id) => lipsyncModels.find(m => m.id === id);

export const getResolutionsForLipSyncModel = (id) => {
  const model = lipsyncModels.find(m => m.id === id);
  return model?.inputs?.resolution?.enum || [];
};

export const imageLipSyncModels = lipsyncModels.filter(m => m.category === 'image');
export const videoLipSyncModels = lipsyncModels.filter(m => m.category === 'video');

export const getV2VModelById = (id) => v2vModels.find(m => m.id === id);

// ─── Recast / Body Swap models ───────────────────────────────────────────────
// Source video (the performance / motion) + character image (the new identity)
// → a video of the new character performing the source video's motion.

export const getRecastModelById = (id) => recastModels.find(m => m.id === id);

export const getAspectRatiosForRecastModel = (id) => {
  const model = recastModels.find(m => m.id === id);
  return model?.inputs?.aspect_ratio?.enum || [];
};

// ─── Motion Control Models (Seedance) ───────────────────────────────────────────────

export const getMotionControlModelById = (id) => motionControlModels.find(m => m.id === id) || motionControlModels[0];
export const getAspectRatiosForMotionControlModel = (id) => {
  const model = getMotionControlModelById(id);
  return model?.aspectRatios || ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9"];
};



// ── Audio Models ──────────────────────────────────────────────────────────

export const getAudioModelById = (id) => audioModels.find(m => m.id === id);

