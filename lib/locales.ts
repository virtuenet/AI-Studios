// Locale registry for the standalone AI Studios studio app.
//
// This mirrors the additive-route architecture documented in the main
// muapi client (../../../docs/localization.md): English stays the
// default, unprefixed route tree; every other locale gets a parallel
// `/[[locale]]/...` route tree that reuses the same components with
// translated copy passed as a prop. There is no i18n routing library
// (no next-intl) — just a registry + plain JSON message bundles + a
// recursive merge so a partial translation still renders (falls back to
// English for any missing key).
//
// Adding a new locale: register it here with its message imports, then
// add a matching `app/<locale>/...` route wrapper tree that passes
// `locale="<locale>"` into the shared components. Do not add
// `locale === 'zh'`-style branches in shared components — read copy from
// this registry instead.

import enCommon from '../messages/en/common.json';
import zhCommon from '../messages/zh/common.json';
import jaCommon from '../messages/ja/common.json';
import koCommon from '../messages/ko/common.json';
import esCommon from '../messages/es/common.json';
import frCommon from '../messages/fr/common.json';

export type CopyValue = string | number | boolean | null | CopyObject | CopyValue[];
export interface CopyObject {
  [key: string]: CopyValue;
}

export interface LocaleConfig {
  code: string;
  nativeName: string;
  htmlLang: string;
  rootPath: string;
  messages: { common: CopyObject };
}

export const DEFAULT_LOCALE = 'en';

export const LOCALE_CONFIGS: Record<string, LocaleConfig> = {
  en: {
    code: 'en',
    nativeName: 'English',
    htmlLang: 'en',
    rootPath: '',
    messages: {
      common: enCommon,
    },
  },
  zh: {
    code: 'zh',
    nativeName: '中文',
    htmlLang: 'zh-CN',
    rootPath: '/zh',
    messages: {
      common: zhCommon,
    },
  },
  ja: {
    code: 'ja',
    nativeName: '日本語',
    htmlLang: 'ja',
    rootPath: '/ja',
    messages: {
      common: jaCommon,
    },
  },
  ko: {
    code: 'ko',
    nativeName: '한국어',
    htmlLang: 'ko',
    rootPath: '/ko',
    messages: {
      common: koCommon,
    },
  },
  es: {
    code: 'es',
    nativeName: 'Español',
    htmlLang: 'es',
    rootPath: '/es',
    messages: {
      common: esCommon,
    },
  },
  fr: {
    code: 'fr',
    nativeName: 'Français',
    htmlLang: 'fr',
    rootPath: '/fr',
    messages: {
      common: frCommon,
    },
  },
};

const EN_CONFIG = LOCALE_CONFIGS[DEFAULT_LOCALE] as LocaleConfig;

export const SUPPORTED_LOCALES: string[] = Object.keys(LOCALE_CONFIGS);

export function isSupportedLocale(locale: unknown): locale is string {
  return typeof locale === 'string' && Boolean(locale) &&
    Object.prototype.hasOwnProperty.call(LOCALE_CONFIGS, locale);
}

// Registered locale prefixes, longest first, so `/zh-CN` (if ever added)
// would not falsely match under a shorter `/zh` prefix check.
const LOCALE_PREFIXES: string[] = Object.values(LOCALE_CONFIGS)
  .filter((config) => config.rootPath)
  .map((config) => config.rootPath)
  .sort((a, b) => b.length - a.length);

// Mirrors client/lib's getLocaleFromPathname pattern: derive the active
// locale purely from the URL path, no cookies/headers/negotiation.
export function getLocaleFromPathname(pathname?: string | null): string {
  if (!pathname) return DEFAULT_LOCALE;
  for (const prefix of LOCALE_PREFIXES) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      const locale = Object.values(LOCALE_CONFIGS).find((config) => config.rootPath === prefix);
      return locale?.code || DEFAULT_LOCALE;
    }
  }
  return DEFAULT_LOCALE;
}

export function getLocaleConfig(locale?: string | null): LocaleConfig {
  return (locale ? LOCALE_CONFIGS[locale] : undefined) || EN_CONFIG;
}

function isPlainObject(value: unknown): value is CopyObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Generic recursive merge: translated arrays replace the English array
// wholesale (locale-owned unit), plain objects merge key-by-key so a
// partial bundle still falls back to English per-key rather than
// per-namespace.
export function mergeCopy(base: unknown, override: unknown): CopyObject {
  if (!override) return base as CopyObject;
  if (!base) return override as CopyObject;
  if (!isPlainObject(base) || !isPlainObject(override)) return override as CopyObject;

  const merged: CopyObject = { ...base };
  for (const key of Object.keys(override)) {
    const baseValue = base[key];
    const overrideValue = override[key];
    merged[key] = isPlainObject(baseValue) && isPlainObject(overrideValue)
      ? mergeCopy(baseValue, overrideValue)
      : (overrideValue ?? null);
  }
  return merged;
}

// Returns the `common` namespace for a locale, merged over the English
// defaults so every key is always present.
export function getCommonCopy(locale?: string | null): CopyObject {
  const config = getLocaleConfig(locale);
  if (config.code === DEFAULT_LOCALE) return EN_CONFIG.messages.common;
  return mergeCopy(EN_CONFIG.messages.common, config.messages.common);
}

// Loads and merges a per-studio-tab namespace (messages/{locale}/studio/{tabId}.json)
// over its English default. Namespaces are loaded lazily by each Studio
// component (`getStudioCopy('imageStudio', enBundle, zhBundle, locale)`)
// so this file doesn't need to import every tab's bundle up front.
export function resolveStudioCopy(
  enBundle: CopyObject,
  localeBundle: CopyObject | undefined,
  locale: string
): CopyObject {
  if (locale === DEFAULT_LOCALE) return enBundle;
  return mergeCopy(enBundle, localeBundle);
}

// Builds the studio path for a given tab under the active locale's root,
// e.g. localizeStudioPath('zh', 'video') -> '/zh/studio/video'.
export function localizeStudioPath(locale: string, tabId?: string): string {
  const config = getLocaleConfig(locale);
  const suffix = tabId ? `/studio/${tabId}` : '/studio';
  return `${config.rootPath}${suffix}`;
}
