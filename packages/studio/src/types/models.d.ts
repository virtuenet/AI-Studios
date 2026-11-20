/**
 * Core type definitions for the AI Studios model catalog and API.
 *
 * The large catalog files under `models/` remain plain data (tens of thousands
 * of lines). These exported contracts are what the aggregator, capabilities and
 * studio components consume, so a catalog edit is checked at the boundary
 * instead of forcing a line-by-line migration.
 *
 * @module types/models
 */

/** Supported model input types. */
export type ModelInputType =
  | 'string'
  | 'int'
  | 'integer'
  | 'boolean'
  | 'array'
  | 'number'
  | 'object';

/** One enum option: flat scalar, or `{ value, label }` style object. */
export type ModelInputOption = string | number | boolean | Record<string, unknown>;

/** A single model input parameter definition. */
export interface ModelInput {
  type?: ModelInputType | string;
  title?: string;
  name?: string;
  description?: string;
  default?: unknown;
  enum?: ModelInputOption[];
  enum_dependencies?: Record<string, Record<string, ModelInputOption[]>>;
  minValue?: number;
  maxValue?: number;
  step?: number;
  minItems?: number;
  maxItems?: number;
  field?: string;
  isEdit?: boolean;
  configurable?: boolean;
  items?: ModelInput;
  properties?: Record<string, ModelInput>;
  required?: string[];
}

/** A single AI model definition in the catalog. */
export interface ModelDefinition {
  id: string;
  name?: string;
  endpoint?: string;
  inputs?: Record<string, ModelInput>;
  provider?: string;
  provider_name?: string;
  family?: string;
  hasPrompt?: boolean;
  promptRequired?: boolean;
  imageField?: string;
  videoField?: string;
  audioField?: string;
  category?: string;
  maxImages?: number;
  maxVideos?: number;
  maxAudios?: number;
  aspectRatioMode?: string;
  aspectRatios?: string[];
  required?: string[];
  [key: string]: unknown;
}

/** Model category identifiers. */
export type ModelCategory =
  | 't2i'
  | 't2v'
  | 'i2i'
  | 'i2v'
  | 'v2v'
  | 'lipsync'
  | 'recast'
  | 'audio'
  | 'motionControl';

/** Generation request parameters passed by studio components. */
export interface GenerationParams {
  model?: string;
  prompt?: string;
  aspect_ratio?: string;
  resolution?: string;
  quality?: string;
  duration?: number;
  image_url?: string;
  images_list?: string[];
  video_url?: string;
  audio_url?: string;
  seed?: number;
  strength?: number;
  generate_audio?: boolean;
  mode?: string;
  onRequestId?: (requestId: string) => void;
  [key: string]: unknown;
}

/** Polling result from the Muapi API. */
export interface PollResult {
  status?: string;
  request_id?: string;
  url?: string;
  output?: Record<string, unknown>;
  outputs?: string[];
  error?: string | { message?: string };
  [key: string]: unknown;
}

/** File upload result from the Muapi API. */
export interface UploadResult {
  url?: string;
  file_url?: string;
  data?: { url?: string; [key: string]: unknown };
  [key: string]: unknown;
}

/** User balance information. */
export interface UserBalance {
  balance?: number;
  email?: string;
  [key: string]: unknown;
}

/** Error boundary crash report. */
export interface CrashReport {
  studio: string;
  error: string;
  componentStack: string;
  timestamp: number;
}
