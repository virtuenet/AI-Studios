import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const MESSAGES = path.join(ROOT, 'packages/studio/src/messages');
const LOCALES = ['ja', 'ko', 'es', 'fr'];

const NAMESPACES = fs
  .readdirSync(path.join(MESSAGES, 'en'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace(/\.json$/, ''));

function flatten(value, prefix = '') {
  const out = {};
  if (typeof value === 'string') {
    out[prefix] = value;
  } else if (Array.isArray(value)) {
    value.forEach((item, i) => Object.assign(out, flatten(item, `${prefix}[${i}]`)));
  } else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      Object.assign(out, flatten(item, prefix ? `${prefix}.${key}` : key));
    }
  }
  return out;
}

function placeholders(text) {
  return new Set(text.match(/\{[a-zA-Z0-9_]+\}/g) || []);
}

describe('Studio message bundles', () => {
  it('ships every namespace for every locale', () => {
    for (const locale of LOCALES) {
      for (const ns of NAMESPACES) {
        const file = path.join(MESSAGES, locale, `${ns}.json`);
        expect(fs.existsSync(file), `${locale}/${ns}.json missing`).toBe(true);
      }
    }
  });

  it.each(LOCALES)('%s has no missing keys relative to English', (locale) => {
    for (const ns of NAMESPACES) {
      const en = flatten(JSON.parse(fs.readFileSync(path.join(MESSAGES, 'en', `${ns}.json`), 'utf8')));
      const translated = flatten(
        JSON.parse(fs.readFileSync(path.join(MESSAGES, locale, `${ns}.json`), 'utf8'))
      );
      const missing = Object.keys(en).filter((key) => translated[key] === undefined);
      expect(missing, `${locale}/${ns} missing keys`).toEqual([]);
    }
  });

  it.each(LOCALES)('%s preserves every interpolation placeholder', (locale) => {
    for (const ns of NAMESPACES) {
      const en = flatten(JSON.parse(fs.readFileSync(path.join(MESSAGES, 'en', `${ns}.json`), 'utf8')));
      const translated = flatten(
        JSON.parse(fs.readFileSync(path.join(MESSAGES, locale, `${ns}.json`), 'utf8'))
      );
      for (const [key, value] of Object.entries(en)) {
        const expected = placeholders(value);
        if (expected.size === 0) continue;
        const actual = placeholders(translated[key] || '');
        for (const token of expected) {
          expect(actual.has(token), `${locale}/${ns} ${key} lost ${token}`).toBe(true);
        }
      }
    }
  });

  it('actually translates (does not just copy English)', () => {
    for (const locale of LOCALES) {
      const ns = 'imageStudio';
      const en = JSON.parse(fs.readFileSync(path.join(MESSAGES, 'en', `${ns}.json`), 'utf8'));
      const translated = JSON.parse(
        fs.readFileSync(path.join(MESSAGES, locale, `${ns}.json`), 'utf8')
      );
      expect(translated.promptBar.generateButton).not.toBe(en.promptBar.generateButton);
    }
  });

  it.each(LOCALES)('%s translates at least 90%% of strings', (locale) => {
    let total = 0;
    let translated = 0;
    for (const ns of NAMESPACES) {
      const en = flatten(JSON.parse(fs.readFileSync(path.join(MESSAGES, 'en', `${ns}.json`), 'utf8')));
      const tr = flatten(JSON.parse(fs.readFileSync(path.join(MESSAGES, locale, `${ns}.json`), 'utf8')));
      for (const [key, value] of Object.entries(en)) {
        if (typeof value !== 'string' || value.length <= 3) continue;
        total += 1;
        if (tr[key] !== value) translated += 1;
      }
    }
    expect(translated / total).toBeGreaterThanOrEqual(0.9);
  });

  it('registry resolves translated copy for each locale', async () => {
    const { getStudioCopy, STUDIO_NAMESPACES } = await import(
      '../../packages/studio/src/messages/studioCopy'
    );
    expect(STUDIO_NAMESPACES).toHaveLength(15);

    const ja = getStudioCopy('imageStudio', 'ja');
    const ko = getStudioCopy('imageStudio', 'ko');
    const es = getStudioCopy('imageStudio', 'es');
    const fr = getStudioCopy('imageStudio', 'fr');
    const en = getStudioCopy('imageStudio', 'en');

    expect(new Set([ja.promptBar.generateButton, ko.promptBar.generateButton, es.promptBar.generateButton, fr.promptBar.generateButton]).size).toBe(4);
    expect(ja.promptBar.generateButton).not.toBe(en.promptBar.generateButton);
  });

  it('per-key fallback still applies when a locale bundle is partial', async () => {
    const { mergeCopy } = await import('../../packages/studio/src/i18nUtils');
    const en = { a: 'English A', b: 'English B' };
    const partial = { a: 'Übersetzt A' };
    expect(mergeCopy(en, partial)).toEqual({ a: 'Übersetzt A', b: 'English B' });
  });

  it('pluralize selects locale-correct forms', async () => {
    const { pluralize } = await import('../../packages/studio/src/i18nUtils');
    const forms = { one: 'image', other: 'images' };
    expect(pluralize('en', 1, forms)).toBe('image');
    expect(pluralize('en', 3, forms)).toBe('images');
    expect(pluralize(undefined, 2, forms)).toBe('images');
    expect(pluralize('!', 1, { one: 'bad', other: 'fallback' })).toBe('fallback');
  });
});
