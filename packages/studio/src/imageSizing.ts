/**
 * Image sizing helpers — aspect-ratio vs. width/height model capability
 * detection, dimension resolution, and payload building.
 *
 * Converted from imageSizing.js as part of the incremental TypeScript
 * migration. No runtime behavior changed.
 */

export interface ModelInputField {
  type?: string;
  default?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  enum?: string[];
}

export interface ImageSizingModel {
  inputs?: {
    aspect_ratio?: ModelInputField;
    width?: ModelInputField;
    height?: ModelInputField;
    [key: string]: ModelInputField | undefined;
  };
}

export interface AspectRatioCapability {
  type: 'aspect_ratio';
  input: ModelInputField & { enum: string[] };
}

export interface DimensionsCapability {
  type: 'dimensions';
  width: ModelInputField;
  height: ModelInputField;
}

export interface NoCapability {
  type: 'none';
}

export type ImageSizeCapability = AspectRatioCapability | DimensionsCapability | NoCapability;

export interface ImageDimensions {
  width: number;
  height: number;
}

export const T2I_DIMENSION_RATIOS: readonly string[] = Object.freeze([
  '1:1',
  '16:9',
  '9:16',
  '4:3',
  '3:2',
  '21:9',
]);

export const I2I_DIMENSION_RATIOS: readonly string[] = Object.freeze([
  '1:1',
  '16:9',
  '9:16',
]);

const gcd = (left: number, right: number): number => {
  let a = Math.abs(left);
  let b = Math.abs(right);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const lcm = (left: number, right: number): number => (left * right) / gcd(left, right);

const parseAspectRatio = (aspectRatio: string | undefined): ImageDimensions | null => {
  const match = /^(\d+):(\d+)$/.exec(aspectRatio || '');
  if (!match) return null;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isSafeInteger(width) || !Number.isSafeInteger(height) || width === 0 || height === 0) {
    return null;
  }

  const divisor = gcd(width, height);
  return { width: width / divisor, height: height / divisor };
};

const isDimensionInput = (input: ModelInputField | undefined): boolean => {
  const defaultValue = input?.default;
  const minimum = input?.minValue;
  const maximum = input?.maxValue;
  const step = input?.step;

  return Number.isSafeInteger(defaultValue) &&
    Number.isSafeInteger(minimum) &&
    Number.isSafeInteger(maximum) &&
    Number.isSafeInteger(step) &&
    (minimum as number) > 0 &&
    (step as number) > 0 &&
    (minimum as number) <= (defaultValue as number) &&
    (defaultValue as number) <= (maximum as number) &&
    (minimum as number) % (step as number) === 0;
};

export const getImageSizeCapability = (model: ImageSizingModel | null | undefined): ImageSizeCapability => {
  const aspectRatio = model?.inputs?.aspect_ratio;
  if (Array.isArray(aspectRatio?.enum) && aspectRatio.enum.length > 0) {
    return { type: 'aspect_ratio', input: aspectRatio as AspectRatioCapability['input'] };
  }

  const width = model?.inputs?.width;
  const height = model?.inputs?.height;
  if (isDimensionInput(width) && isDimensionInput(height)) {
    return { type: 'dimensions', width: width as ModelInputField, height: height as ModelInputField };
  }

  return { type: 'none' };
};

export const resolveImageDimensions = (
  model: ImageSizingModel,
  aspectRatio?: string
): ImageDimensions | null => {
  const capability = getImageSizeCapability(model);
  const ratio = parseAspectRatio(aspectRatio);
  if (capability.type !== 'dimensions' || !ratio) return null;

  const widthStep = capability.width.step as number;
  const heightStep = capability.height.step as number;
  const scaleStep = lcm(
    widthStep / gcd(widthStep, ratio.width),
    heightStep / gcd(heightStep, ratio.height),
  );
  const minimumScale = Math.ceil(Math.max(
    (capability.width.minValue as number) / ratio.width,
    (capability.height.minValue as number) / ratio.height,
  ) / scaleStep) * scaleStep;
  const maximumScale = Math.floor(Math.min(
    (capability.width.maxValue as number) / ratio.width,
    (capability.height.maxValue as number) / ratio.height,
  ) / scaleStep) * scaleStep;

  if (minimumScale > maximumScale) return null;

  const defaultArea = (capability.width.default as number) * (capability.height.default as number);
  const targetScale = Math.sqrt(defaultArea / (ratio.width * ratio.height));
  const nearestScale = Math.round(targetScale / scaleStep) * scaleStep;
  const scale = Math.min(maximumScale, Math.max(minimumScale, nearestScale));

  return {
    width: ratio.width * scale,
    height: ratio.height * scale,
  };
};

export const getAspectRatioOptions = (
  model: ImageSizingModel,
  dimensionRatios: readonly string[]
): readonly string[] => {
  const capability = getImageSizeCapability(model);
  if (capability.type === 'aspect_ratio') {
    return capability.input.enum;
  }

  if (capability.type === 'dimensions') {
    return dimensionRatios.filter((ratio) => resolveImageDimensions(model, ratio));
  }

  return [];
};

export const buildImageSizePayload = (
  model: ImageSizingModel,
  aspectRatio?: string
): Record<string, string | number> => {
  const capability = getImageSizeCapability(model);
  if (capability.type === 'aspect_ratio') {
    return aspectRatio && capability.input.enum.includes(aspectRatio)
      ? { aspect_ratio: aspectRatio }
      : {};
  }

  const dimensions = resolveImageDimensions(model, aspectRatio);
  return dimensions ? { width: dimensions.width, height: dimensions.height } : {};
};
