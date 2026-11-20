import { getMediaCapability, type ModelInfo } from './modelCapabilities';

// Synced from the canonical Muapi schema_data.json catalog.
import {
  getAspectRatioOptions,
  I2I_DIMENSION_RATIOS,
  T2I_DIMENSION_RATIOS,
  type ImageSizingModel,
} from './imageSizing';

import { t2iModels as t2iCatalog } from './models/t2iModels.js';
import { t2vModels as t2vCatalog } from './models/t2vModels.js';
import { i2iModels as i2iCatalog } from './models/i2iModels.js';
import { i2vModels as i2vCatalog } from './models/i2vModels.js';
import { v2vModels as v2vCatalog } from './models/v2vModels.js';
import { lipsyncModels as lipsyncCatalog } from './models/lipsyncModels.js';
import { recastModels as recastCatalog } from './models/recastModels.js';
import { motionControlModels as motionControlCatalog } from './models/motionControlModels.js';
import { audioModels as audioCatalog } from './models/audioModels.js';
import { dedupeSharedModels } from './models/sharedModels';
import type { ModelDefinition, ModelInput, ModelInputOption } from './types/models';

/**
 * The catalog data stays plain JS (tens of thousands of lines); consumers get
 * the `ModelDefinition` contract from this typed aggregator.
 */
export const t2iModels = t2iCatalog as ModelDefinition[];
export const t2vModels = t2vCatalog as ModelDefinition[];
export const i2iModels = i2iCatalog as ModelDefinition[];
export const i2vModels = i2vCatalog as ModelDefinition[];
export const v2vModels = v2vCatalog as ModelDefinition[];
export const lipsyncModels = lipsyncCatalog as ModelDefinition[];
export const recastModels = recastCatalog as ModelDefinition[];
export const motionControlModels = motionControlCatalog as ModelDefinition[];
export const audioModels = audioCatalog as ModelDefinition[];

// Keep one canonical object per cross-category model (shared references).
dedupeSharedModels({
  t2iModels, t2vModels, i2iModels, i2vModels, v2vModels,
  lipsyncModels, recastModels, motionControlModels, audioModels,
});

const strings = (options: ModelInputOption[] | undefined): string[] =>
  (options || []).filter((option): option is string => typeof option === 'string');

export const getModelById = (id: string): ModelDefinition | undefined =>
  t2iModels.find((model) => model.id === id);

export const getSelectableAspectRatiosForModel = (modelId: string): string[] => {
  const model = getModelById(modelId);
  return [...getAspectRatioOptions(model as unknown as ImageSizingModel, T2I_DIMENSION_RATIOS)];
};

export const getAspectRatiosForModel = (modelId: string): string[] => {
  const model = getModelById(modelId);
  if (!model) return ['1:1'];

  const arInput = model.inputs?.aspect_ratio;
  if (arInput?.enum) return strings(arInput.enum);
  return ['1:1', '16:9', '9:16', '4:3', '3:2', '21:9'];
};

// ==========================================
// Text-to-Video Models
// ==========================================

export const getVideoModelById = (id: string): ModelDefinition | undefined =>
  t2vModels.find((model) => model.id === id);

const getDependentEnumValues = (
  input: ModelInput | undefined,
  selections: Record<string, unknown> = {}
): ModelInputOption[] => {
  const values = input?.enum || [];
  const dependencies = input?.enum_dependencies;
  if (!dependencies) return values;

  return Object.entries(dependencies).reduce<ModelInputOption[]>((available, [field, rules]) => {
    const selectedValue = selections[field];
    const allowedValues = rules?.[String(selectedValue)];
    if (!allowedValues) return available;
    const allowed = new Set(allowedValues);
    return available.filter((value) => allowed.has(value));
  }, values);
};

export const getAspectRatiosForVideoModel = (modelId: string): string[] => {
  const model = getVideoModelById(modelId);
  if (!model) return ['16:9'];
  const arInput = model.inputs?.aspect_ratio;
  if (arInput?.enum) return strings(arInput.enum);
  return ['16:9', '9:16', '1:1'];
};

const getInputOptions = (input: ModelInput | undefined): ModelInputOption[] => {
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
      (_, index) => Number((input.minValue! + index * step).toFixed(precision)),
    );
  }
  return input.default !== undefined ? [input.default as ModelInputOption] : [];
};

export const getDurationsForModel = (modelId: string): ModelInputOption[] => {
  const model = getVideoModelById(modelId);
  if (!model) return [5];
  return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForVideoModel = (
  modelId: string,
  selections: Record<string, unknown> = {}
): ModelInputOption[] => {
  const model = getVideoModelById(modelId);
  if (!model) return [];
  const resInput = model.inputs?.resolution;
  if (resInput?.enum) return getDependentEnumValues(resInput, selections);
  return [];
};

export const getI2IModelById = (id: string): ModelDefinition | undefined =>
  i2iModels.find((model) => model.id === id);
export const getI2VModelById = (id: string): ModelDefinition | undefined =>
  i2vModels.find((model) => model.id === id);

export const getMaxImagesForI2VModel = (modelId: string): number => {
  const model = getI2VModelById(modelId);
  return model ? getMediaCapability(model as ModelInfo, 'image').maxItems : 1;
};

export const getSelectableAspectRatiosForI2IModel = (modelId: string): string[] => {
  const model = getI2IModelById(modelId);
  return [...getAspectRatioOptions(model as unknown as ImageSizingModel, I2I_DIMENSION_RATIOS)];
};

export const getAspectRatiosForI2IModel = (modelId: string): string[] => {
  const model = getI2IModelById(modelId);
  if (!model) return ['1:1'];
  const input = model.inputs?.aspect_ratio;
  if (input?.enum) return strings(input.enum);
  return ['1:1', '16:9', '9:16'];
};

export const getAspectRatiosForI2VModel = (modelId: string): string[] => {
  const model = getI2VModelById(modelId);
  if (!model) return ['16:9'];
  if (model.aspectRatioMode === 'inherited') return [];
  const input = model.inputs?.aspect_ratio;
  if (input?.enum) return strings(input.enum);
  return ['16:9', '9:16', '1:1'];
};

export const getDurationsForI2VModel = (modelId: string): ModelInputOption[] => {
  const model = getI2VModelById(modelId);
  if (!model) return [];
  return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForI2VModel = (
  modelId: string,
  selections: Record<string, unknown> = {}
): ModelInputOption[] => {
  const model = getI2VModelById(modelId);
  if (!model) return [];
  const res = model.inputs?.resolution;
  if (res?.enum) return getDependentEnumValues(res, selections);
  return [];
};

// Effect-style models declare `inputs.name` as an enum of effect types.
export const getEffectsForI2VModel = (modelId: string): ModelInputOption[] => {
  const model = getI2VModelById(modelId);
  return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2VModel = (modelId: string): unknown => {
  const model = getI2VModelById(modelId);
  return model?.inputs?.name?.default ?? null;
};

export const getResolutionsForI2IModel = (modelId: string): string[] => {
  const model = getI2IModelById(modelId);
  if (!model) return [];
  return strings(model.inputs?.resolution?.enum) || strings(model.inputs?.quality?.enum);
};

export const getEffectsForI2IModel = (modelId: string): ModelInputOption[] => {
  const model = getI2IModelById(modelId);
  return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2IModel = (modelId: string): unknown => {
  const model = getI2IModelById(modelId);
  return model?.inputs?.name?.default ?? null;
};

// Returns the payload field name for quality/resolution for a t2i model ('resolution', 'quality', or null)
export const getQualityFieldForModel = (modelId: string): 'resolution' | 'quality' | null => {
  const model = getModelById(modelId);
  if (!model) return null;
  if (model.inputs?.resolution) return 'resolution';
  if (model.inputs?.quality) return 'quality';
  return null;
};

// Returns quality/resolution options for a t2i model
export const getResolutionsForModel = (modelId: string): string[] => {
  const model = getModelById(modelId);
  if (!model) return [];
  return strings(model.inputs?.resolution?.enum) || strings(model.inputs?.quality?.enum);
};

// Returns the payload field name for quality/resolution for an i2i model ('resolution', 'quality', or null)
export const getQualityFieldForI2IModel = (modelId: string): 'resolution' | 'quality' | null => {
  const model = getI2IModelById(modelId);
  if (!model) return null;
  if (model.inputs?.resolution) return 'resolution';
  if (model.inputs?.quality) return 'quality';
  return null;
};

// Returns the maximum number of images an i2i model accepts (defaults to 1)
export const getMaxImagesForI2IModel = (modelId: string): number => {
  const model = getI2IModelById(modelId);
  return model ? getMediaCapability(model as ModelInfo, 'image').maxItems : 1;
};

// ─── LipSync / Speech-to-Video models ────────────────────────────────────────
// Image-based: portrait image + audio → talking video
// Video-based: existing video + audio → lipsync video

export const getLipSyncModelById = (id: string): ModelDefinition | undefined =>
  lipsyncModels.find((model) => model.id === id);

export const getResolutionsForLipSyncModel = (id: string): string[] => {
  const model = lipsyncModels.find((item) => item.id === id);
  return strings(model?.inputs?.resolution?.enum);
};

export const imageLipSyncModels: ModelDefinition[] = lipsyncModels.filter((model) => model.category === 'image');
export const videoLipSyncModels: ModelDefinition[] = lipsyncModels.filter((model) => model.category === 'video');

export const getV2VModelById = (id: string): ModelDefinition | undefined =>
  v2vModels.find((model) => model.id === id);

// ─── Recast / Body Swap models ───────────────────────────────────────────────
// Source video (the performance / motion) + character image (the new identity)
// → a video of the new character performing the source video's motion.

export const getRecastModelById = (id: string): ModelDefinition | undefined =>
  recastModels.find((model) => model.id === id);

export const getAspectRatiosForRecastModel = (id: string): string[] => {
  const model = recastModels.find((item) => item.id === id);
  return strings(model?.inputs?.aspect_ratio?.enum);
};

// ─── Motion Control Models (Seedance) ───────────────────────────────────────────────

export const getMotionControlModelById = (id: string): ModelDefinition | undefined =>
  motionControlModels.find((model) => model.id === id) || motionControlModels[0];
export const getAspectRatiosForMotionControlModel = (id: string): string[] => {
  const model = getMotionControlModelById(id);
  return model?.aspectRatios || ['16:9', '9:16', '1:1', '4:3', '3:4', '21:9'];
};

// ── Audio Models ──────────────────────────────────────────────────────────

export const getAudioModelById = (id: string): ModelDefinition | undefined =>
  audioModels.find((model) => model.id === id);
