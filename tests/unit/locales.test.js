import { describe, it, expect } from 'vitest';
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIGS,
  SUPPORTED_LOCALES,
  getLocaleConfig,
  getCommonCopy,
  getLocaleFromPathname,
  localizeStudioPath,
} from '../../lib/locales';

describe('Locale registry', () => {
  it('supports six locales', () => {
    expect(SUPPORTED_LOCALES).toEqual(['en', 'zh', 'ja', 'ko', 'es', 'fr']);
    expect(DEFAULT_LOCALE).toBe('en');
  });

  it('every locale has nativeName, htmlLang, rootPath, common copy', () => {
    for (const code of SUPPORTED_LOCALES) {
      const config = LOCALE_CONFIGS[code];
      expect(config.nativeName.length).toBeGreaterThan(0);
      expect(config.htmlLang.length).toBeGreaterThan(0);
      expect(config.messages.common.tabs.image).toBeTruthy();
    }
  });

  it('detects locale from pathname prefixes', () => {
    expect(getLocaleFromPathname('/ja/studio/image')).toBe('ja');
    expect(getLocaleFromPathname('/ko/studio/video')).toBe('ko');
    expect(getLocaleFromPathname('/es/studio')).toBe('es');
    expect(getLocaleFromPathname('/fr/studio/audio')).toBe('fr');
    expect(getLocaleFromPathname('/zh/studio')).toBe('zh');
    expect(getLocaleFromPathname('/studio/image')).toBe('en');
  });

  it('builds localized studio paths', () => {
    expect(localizeStudioPath('ja', 'video')).toBe('/ja/studio/video');
    expect(localizeStudioPath('en', 'image')).toBe('/studio/image');
  });

  it('falls back to English copy for unknown locales', () => {
    const copy = getCommonCopy('xx');
    expect(copy.tabs.image).toBe('Image Studio');
  });

  it('returns translated shell copy for new locales', () => {
    expect(getCommonCopy('ja').shell.settings).toBe('設定');
    expect(getCommonCopy('ko').shell.settings).toBe('설정');
    expect(getCommonCopy('es').shell.settings).toBe('Configuración');
    expect(getCommonCopy('fr').shell.settings).toBe('Paramètres');
  });
});
