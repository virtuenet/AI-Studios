/**
 * Tiny, dependency-free locale-copy resolver shared by every Studio
 * component in this package.
 *
 * Converted from i18nUtils.js as part of the incremental TypeScript
 * migration. `resolveCopy` deep-merges a locale override over English so a
 * partial translation still renders — missing keys fall back to English.
 */

export type CopyValue = string | number | boolean | null | CopyObject | CopyValue[];
export interface CopyObject {
  [key: string]: CopyValue;
}

export function isPlainObject(value: unknown): value is CopyObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function mergeCopy<T extends CopyObject>(base: T, override?: CopyObject | null): T {
  if (!override) return base;
  if (!base) return override as unknown as T;
  if (!isPlainObject(base) || !isPlainObject(override)) return override as unknown as T;

  const merged: CopyObject = { ...base };
  for (const key of Object.keys(override)) {
    merged[key] = isPlainObject(base[key]) && isPlainObject(override[key])
      ? mergeCopy(base[key] as CopyObject, override[key] as CopyObject)
      : override[key];
  }
  return merged as T;
}

/**
 * `en` is the required default bundle; `localeBundle` is the override for
 * the active `locale` (null/undefined when only English exists, or when
 * locale === 'en'). Always returns a fully-populated copy object.
 */
export function resolveCopy<T extends CopyObject>(
  en: T,
  localeBundle?: CopyObject | null,
  locale?: string
): T {
  if (!locale || locale === 'en') return en;
  return mergeCopy(en, localeBundle);
}
