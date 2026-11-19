/**
 * Image input contracts — per-model requirements for primary/auxiliary
 * images, prompts, and payload construction.
 *
 * Converted from imageInputContracts.js as part of the incremental
 * TypeScript migration. No runtime behavior changed.
 */

export type ImageMode = 't2i' | 'i2i';

export interface AuxiliaryImage {
  field: string;
  label: string;
  required: boolean;
}

export interface ImageInputContract {
  primaryImageRequired: boolean;
  primaryImageLabel: string;
  promptField: string;
  promptRequired: boolean;
  promptPlaceholder: string;
  auxiliaryImages: readonly AuxiliaryImage[];
}

export interface ImageInputModel {
  id?: string;
  promptRequired?: boolean;
  swapField?: string;
  [key: string]: unknown;
}

export interface ImageInputValidationParams {
  prompt?: string;
  primaryImageUrls?: string[];
  auxiliaryImageUrls?: Record<string, string | undefined>;
  [key: string]: unknown;
}

const BASE_CONTRACT: ImageInputContract = Object.freeze({
  primaryImageRequired: false,
  primaryImageLabel: 'Reference image',
  promptField: 'prompt',
  promptRequired: false,
  promptPlaceholder: 'Describe how to transform this image (optional)',
  auxiliaryImages: Object.freeze([]),
});

const requiredImage = (field: string, label: string): AuxiliaryImage =>
  Object.freeze({
    field,
    label,
    required: true,
  });

const hasText = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export function normalizePrimaryImageUrls(
  imagesList?: string[] | null,
  imageUrl?: string | null
): string[] {
  const validImages = Array.isArray(imagesList) ? imagesList.filter(hasText) : [];
  if (validImages.length > 0) return validImages;
  return hasText(imageUrl) ? [imageUrl] : [];
}

type ContractPatch = Partial<ImageInputContract>;

const CONTRACTS: Record<string, ContractPatch> = Object.freeze({
  't2i:flux-pulid': Object.freeze({
    primaryImageRequired: true,
    promptRequired: true,
  }),
  'i2i:flux-pulid': Object.freeze({ promptRequired: true }),
  't2i:flux-redux': Object.freeze({
    primaryImageRequired: true,
    promptRequired: true,
  }),
  'i2i:flux-redux': Object.freeze({ promptRequired: true }),
  'i2i:ai-dress-change': Object.freeze({
    primaryImageLabel: 'Model image',
    auxiliaryImages: Object.freeze([
      requiredImage('garment_image_url', 'Garment image'),
    ]),
  }),
  'i2i:ai-product-shot': Object.freeze({
    primaryImageLabel: 'Product image',
    promptField: 'scene_description',
    promptRequired: true,
    promptPlaceholder: 'Describe the product scene',
  }),
  'i2i:ai-object-eraser': Object.freeze({
    primaryImageLabel: 'Source image',
    auxiliaryImages: Object.freeze([
      requiredImage('mask_image_url', 'Mask image'),
    ]),
  }),
  'i2i:gpt4o-edit': Object.freeze({
    primaryImageLabel: 'Source image',
    promptRequired: true,
    promptPlaceholder: 'Describe how to edit the image',
    auxiliaryImages: Object.freeze([
      requiredImage('mask_image_url', 'Mask image'),
    ]),
  }),
  'i2i:add-image-watermark': Object.freeze({
    primaryImageLabel: 'Source image',
    auxiliaryImages: Object.freeze([
      requiredImage('watermark_image_url', 'Watermark image'),
    ]),
  }),
});

export function getImageInputContract(
  model: ImageInputModel | null | undefined,
  mode: ImageMode
): ImageInputContract {
  const contractKey = `${mode}:${model?.id}`;
  const patch: ContractPatch = Object.hasOwn(CONTRACTS, contractKey)
    ? CONTRACTS[contractKey]
    : {};
  const isTextToImage = mode === 't2i';
  const promptRequired =
    patch.promptRequired ?? model?.promptRequired ?? isTextToImage;
  return {
    ...BASE_CONTRACT,
    primaryImageRequired: mode === 'i2i' || BASE_CONTRACT.primaryImageRequired,
    promptRequired,
    promptPlaceholder: promptRequired
      ? isTextToImage
        ? 'Describe the image you want to create'
        : 'Describe how to transform this image'
      : BASE_CONTRACT.promptPlaceholder,
    ...patch,
    auxiliaryImages: patch.auxiliaryImages || BASE_CONTRACT.auxiliaryImages,
  };
}

export function getAuxiliaryImageInputs(
  model: ImageInputModel | null | undefined,
  mode: ImageMode
): readonly AuxiliaryImage[] {
  const configured = getImageInputContract(model, mode).auxiliaryImages;
  if (!model?.swapField || configured.some(({ field }) => field === model.swapField)) {
    return configured;
  }
  return [
    requiredImage(model.swapField, 'Swap face image'),
    ...configured,
  ];
}

export function getImageInputValidationError(
  model: ImageInputModel | null | undefined,
  mode: ImageMode,
  {
    prompt = '',
    primaryImageUrls = [],
    auxiliaryImageUrls = {},
  }: ImageInputValidationParams = {}
): string | null {
  const contract = getImageInputContract(model, mode);
  if (contract.primaryImageRequired && !primaryImageUrls.some(hasText)) {
    return `Please upload a ${contract.primaryImageLabel.toLowerCase()}.`;
  }
  if (contract.promptRequired && !hasText(prompt)) {
    return contract.promptField === 'scene_description'
      ? 'Please enter a scene description.'
      : 'Please enter a prompt.';
  }
  const missingImage = getAuxiliaryImageInputs(model, mode).find(
    ({ field, required }) => required && !hasText(auxiliaryImageUrls[field])
  );
  return missingImage
    ? `Please upload a ${missingImage.label.toLowerCase()}.`
    : null;
}

export function buildImageInputPayload(
  model: ImageInputModel | null | undefined,
  mode: ImageMode,
  params: ImageInputValidationParams = {}
): Record<string, string> {
  const contract = getImageInputContract(model, mode);
  const payload: Record<string, string> = {};
  if (hasText(params.prompt)) {
    payload[contract.promptField] = params.prompt;
  }
  for (const { field } of getAuxiliaryImageInputs(model, mode)) {
    const value = params[field];
    if (hasText(value)) payload[field] = value;
  }
  return payload;
}
