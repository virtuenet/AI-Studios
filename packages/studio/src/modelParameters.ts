/**
 * Supplemental model-parameter normalization (non-media, model-specific inputs).
 *
 * Converted from modelParameters.js as part of the incremental TypeScript
 * migration. No runtime behavior changed.
 */

import { getModelMediaCapabilities, type ModelInfo } from './modelCapabilities';

export interface ParameterSchema {
  type?: string;
  default?: unknown;
  enum?: unknown[];
  minValue?: number;
  minimum?: number;
  maxValue?: number;
  maximum?: number;
  step?: number;
  maxItems?: number;
  max_items?: number;
  items?: ParameterSchema;
  properties?: Record<string, ParameterSchema>;
  required?: string[];
  configurable?: boolean;
  field?: string;
  [key: string]: unknown;
}

export interface SupplementalInput {
  key: string;
  schema: ParameterSchema;
}

type ParameterValues = Record<string, unknown>;
type Payload = Record<string, unknown>;

const COMMON_INPUT_KEYS = new Set([
  'prompt',
  'aspect_ratio',
  'resolution',
  'quality',
  'mode',
  'duration',
  'name',
  'api_key',
  'request_id',
  'num_images',
  'batch_size',
]);

function mediaInputKeys(model: ModelInfo): Set<string> {
  const capabilities = getModelMediaCapabilities(model);
  const keys = new Set<string>();
  for (const capability of Object.values(capabilities)) {
    if (capability.field) keys.add(capability.field);
    if (capability.lastField) keys.add(capability.lastField);
  }
  for (const [key, input] of Object.entries(model?.inputs || {})) {
    if (['image', 'video', 'audio'].includes(input?.field || '')) keys.add(key);
  }
  return keys;
}

export function getSupplementalModelInputs(model: ModelInfo | null | undefined): SupplementalInput[] {
  if (!model?.inputs) return [];
  const mediaKeys = mediaInputKeys(model as ModelInfo);
  return Object.entries(model.inputs)
    .filter(([key, schema]) => (schema.configurable || !COMMON_INPUT_KEYS.has(key)) && !mediaKeys.has(key))
    .map(([key, schema]) => ({ key, schema: schema as ParameterSchema }));
}

function defaultValue(schema: ParameterSchema): unknown {
  if (schema.default !== undefined) return schema.default;
  if (schema.type === 'boolean') return false;
  if (schema.type === 'array') return [];
  return '';
}

function clampNumber(value: unknown, schema: ParameterSchema): number | undefined {
  const number = Number(value);
  if (!Number.isFinite(number)) return undefined;
  const minimum = schema.minValue ?? schema.minimum;
  const maximum = schema.maxValue ?? schema.maximum;
  const clamped = Math.min(maximum ?? number, Math.max(minimum ?? number, number));
  const fractionalStep = schema.step !== undefined && !Number.isInteger(Number(schema.step));
  return ['int', 'integer'].includes(schema.type || '') && !fractionalStep
    ? Math.round(clamped)
    : clamped;
}

function normalizeValue(
  value: unknown,
  schema: ParameterSchema,
  { includeEmpty = false }: { includeEmpty?: boolean } = {}
): unknown {
  if (schema.enum) {
    return (schema.enum as unknown[]).includes(value) ? value : schema.default;
  }
  if (schema.type === 'boolean') return typeof value === 'boolean' ? value : !!schema.default;
  if (['number', 'integer', 'int'].includes(schema.type || '')) {
    if (value === '' || value == null) return includeEmpty ? '' : undefined;
    return clampNumber(value, schema);
  }
  if (schema.type === 'array') {
    if (!Array.isArray(value)) return [];
    const maxItems = schema.maxItems ?? schema.max_items ?? value.length;
    return value
      .slice(0, maxItems)
      .map((item) => normalizeValue(item, schema.items || {}, { includeEmpty }))
      .filter((item) => item !== undefined && (includeEmpty || item !== ''));
  }
  if (schema.type === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
    const record = value as Record<string, unknown>;
    const requiredKeys = schema.required || [];
    const stringKeys = Object.entries(schema.properties || {})
      .filter(([, propertySchema]) => propertySchema.type === 'string')
      .map(([key]) => key);
    const identifyingKeys = requiredKeys.length > 0 ? requiredKeys : stringKeys;
    if (
      !includeEmpty &&
      identifyingKeys.length > 0 &&
      identifyingKeys.every((key) => !String(record[key] ?? '').trim())
    ) {
      return undefined;
    }
    const normalized: Record<string, unknown> = {};
    for (const [key, propertySchema] of Object.entries(schema.properties || {})) {
      const propertyValue = normalizeValue(record[key], propertySchema, { includeEmpty });
      if (propertyValue !== undefined && (includeEmpty || propertyValue !== '')) {
        normalized[key] = propertyValue;
      }
    }
    return Object.keys(normalized).length > 0 ? normalized : undefined;
  }
  if (value === null || value === undefined) return includeEmpty ? '' : undefined;
  const stringValue = String(value);
  return includeEmpty || stringValue.trim() ? stringValue : undefined;
}

export function createModelParameterValues(
  model: ModelInfo | null | undefined,
  previousValues: ParameterValues = {}
): ParameterValues {
  const values: ParameterValues = {};
  for (const { key, schema } of getSupplementalModelInputs(model)) {
    const source = Object.hasOwn(previousValues, key)
      ? previousValues[key]
      : defaultValue(schema);
    const normalized = normalizeValue(source, schema, { includeEmpty: true });
    values[key] = normalized === undefined ? defaultValue(schema) : normalized;
  }
  return values;
}

export function mergeModelParameterValues(
  model: ModelInfo | null | undefined,
  previousValues: ParameterValues = {}
): ParameterValues {
  return { ...previousValues, ...createModelParameterValues(model, previousValues) };
}

export function buildSupplementalInputPayload(
  model: ModelInfo | null | undefined,
  values: ParameterValues = {}
): Payload {
  const payload: Payload = {};
  for (const { key, schema } of getSupplementalModelInputs(model)) {
    if (!Object.hasOwn(values, key)) continue;
    const normalized = normalizeValue(values[key], schema);
    const isEmptyArray = Array.isArray(normalized) && normalized.length === 0;
    if (normalized !== undefined && normalized !== '' && !isEmptyArray) {
      payload[key] = normalized;
    }
  }
  return payload;
}
