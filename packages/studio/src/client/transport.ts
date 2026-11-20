/**
 * Generation transport interface.
 *
 * The studio components currently call muapi.js functions directly. For a
 * managed SaaS deployment we need to route those calls through a server-side
 * BFF that owns the Muapi key, reserves credits, and tracks usage.
 *
 * This interface is the seam between the two worlds. The BYOK implementation
 * delegates to the existing muapi.js functions; the managed implementation
 * calls the SaaS control plane. Studio components can be migrated one at a
 * time by accepting an optional transport prop.
 */

import type { ModelDefinition } from '../types/models';

export interface GenerationRequest {
  model: ModelDefinition;
  prompt?: string;
  aspectRatio?: string;
  resolution?: string;
  quality?: string;
  duration?: number;
  imageUrls?: string[];
  endImageUrl?: string | null;
  videoUrls?: string[];
  audioUrls?: string[];
  seed?: number;
  strength?: number;
  params?: Record<string, unknown>;
}

export interface GenerationResult {
  id: string;
  status: 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';
  url?: string;
  outputs?: string[];
  requestId?: string;
  error?: string;
  cost?: number;
  refunded?: boolean;
}

export interface AssetUploadRequest {
  file: File;
  onProgress?: (percent: number) => void;
}

export interface AssetUploadResult {
  url: string;
}

export interface BalanceResult {
  balance: number;
  email?: string;
}

/**
 * Transport layer for generation, uploads, and account operations.
 *
 * BYOK mode: the browser holds the user's Muapi key and calls muapi.js.
 * Managed mode: the browser holds a session JWT and calls the BFF, which
 * holds the server's Muapi key.
 */
export interface GenerationTransport {
  /** Submit a text-to-image generation. */
  submitImage(request: GenerationRequest): Promise<GenerationResult>;

  /** Submit an image-to-image generation. */
  submitImageToImage(request: GenerationRequest): Promise<GenerationResult>;

  /** Submit a text-to-video generation. */
  submitVideo(request: GenerationRequest): Promise<GenerationResult>;

  /** Submit an image-to-video generation. */
  submitImageToVideo(request: GenerationRequest): Promise<GenerationResult>;

  /** Submit a video-to-video generation. */
  submitVideoToVideo(request: GenerationRequest): Promise<GenerationResult>;

  /** Submit an audio generation. */
  submitAudio(request: GenerationRequest): Promise<GenerationResult>;

  /** Upload a file and return its hosted URL. */
  uploadAsset(request: AssetUploadRequest): Promise<AssetUploadResult>;

  /** Get the current account balance. */
  getBalance(): Promise<BalanceResult>;

  /** Cancel an in-flight generation. */
  cancel(jobId: string): Promise<void>;
}
