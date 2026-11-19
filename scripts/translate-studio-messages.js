#!/usr/bin/env node
/**
 * Translate the studio message bundles (packages/studio/src/messages/en/*.json)
 * into additional locales using the free MyMemory translation API.
 *
 * Usage:
 *   node scripts/translate-studio-messages.js es ja ko fr
 *   node scripts/translate-studio-messages.js --force ja
 *
 * Notes:
 * - Placeholders like {count} are preserved by the translation engine.
 * - Batches strings with a `@@@` separator and verifies the split; falls back
 *   to one-by-one translation when a batch comes back malformed.
 * - Writes packages/studio/src/messages/<locale>/<namespace>.json.
 */
const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.resolve(__dirname, '../packages/studio/src/messages');
const EN_DIR = path.join(MESSAGES_DIR, 'en');

const DEFAULT_LOCALES = ['ja', 'ko', 'es', 'fr'];
const SEPARATOR = '\n@@@\n';
const MAX_BATCH_CHARS = 3000;
const DELAY_MS = 150;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function decodeEntities(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

async function translateBatch(strings, langPair, attempt = 0) {
  const nonEmpty = strings.filter((s) => s.trim().length > 0);
  if (nonEmpty.length === 0) return strings.slice();
  const target = langPair.split('|')[1];

  // Primary provider: Google's public dict-chrome endpoint (no key, no quota
  // in practice for reasonable volumes). Multiple `q` params are supported and
  // placeholders such as {count} survive translation.
  try {
    const params = new URLSearchParams({ client: 'dict-chrome-ex', sl: 'en', tl: target });
    for (const value of nonEmpty) params.append('q', value);
    const url = `https://clients5.google.com/translate_a/t?${params.toString()}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
      },
    });
    const payload = await res.json();
    if (Array.isArray(payload) && payload.length === nonEmpty.length) {
      const parts = payload.map((item) => {
        const text = Array.isArray(item) ? item[0] : item;
        return decodeEntities(String(text)).trim();
      });
      let index = 0;
      return strings.map((s) => (s.trim().length === 0 ? s : parts[index++]));
    }
  } catch {
    // fall through to MyMemory
  }

  const q = nonEmpty.join(SEPARATOR);
  const de = encodeURIComponent(`aistudios.${target}@localization.local`);
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${encodeURIComponent(langPair)}&de=${de}`;

  let payload;
  try {
    const res = await fetch(url);
    payload = await res.json();
  } catch (err) {
    if (attempt < 3) {
      await sleep(1000 * (attempt + 1));
      return translateBatch(strings, langPair, attempt + 1);
    }
    throw err;
  }

  const status = payload?.responseStatus;
  const translated = payload?.responseData?.translatedText;

  if (status !== 200 || typeof translated !== 'string') {
    if (attempt < 4) {
      await sleep(2000 * (attempt + 1));
      return translateBatch(strings, langPair, attempt + 1);
    }
    throw new Error(`Translation failed (${status}): ${JSON.stringify(payload).slice(0, 200)}`);
  }

  const decoded = decodeEntities(translated);
  const parts = decoded.split(/\n@@@\n/).map((p) => p.trim());
  if (parts.length !== nonEmpty.length) {
    const out = [];
    for (const s of nonEmpty) {
      await sleep(DELAY_MS);
      out.push(...(await translateBatch([s], langPair)));
    }
    let index = 0;
    return strings.map((s) => (s.trim().length === 0 ? s : out[index++]));
  }
  let index = 0;
  return strings.map((s) => (s.trim().length === 0 ? s : parts[index++]));
}

function collectStrings(value, out) {
  if (typeof value === 'string') {
    out.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out);
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
  return out;
}

function rebuild(value, iterator) {
  if (typeof value === 'string') return iterator.next().value;
  if (Array.isArray(value)) return value.map((item) => rebuild(item, iterator));
  if (value && typeof value === 'object') {
    const obj = {};
    for (const [key, item] of Object.entries(value)) obj[key] = rebuild(item, iterator);
    return obj;
  }
  return value;
}

async function translateNamespace(file, locale) {
  const source = JSON.parse(fs.readFileSync(path.join(EN_DIR, file), 'utf8'));
  const strings = collectStrings(source, []);
  const results = [];

  let batch = [];
  let chars = 0;
  for (const s of strings) {
    if (batch.length > 0 && chars + s.length + SEPARATOR.length > MAX_BATCH_CHARS) {
      results.push(...(await translateBatch(batch, `en|${locale}`)));
      await sleep(DELAY_MS);
      batch = [];
      chars = 0;
    }
    batch.push(s);
    chars += s.length + SEPARATOR.length;
  }
  if (batch.length > 0) {
    results.push(...(await translateBatch(batch, `en|${locale}`)));
  }

  if (results.length !== strings.length) {
    throw new Error(`Count mismatch for ${file}/${locale}: ${results.length} vs ${strings.length}`);
  }

  const iterator = results[Symbol.iterator]();
  const translated = rebuild(source, iterator);
  const outDir = path.join(MESSAGES_DIR, locale);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, file), JSON.stringify(translated, null, 2) + '\n', 'utf8');
  console.log(`  ${locale}/${file}: ${strings.length} strings`);
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const locales = args.filter((a) => !a.startsWith('--'));
  const targets = locales.length ? locales : DEFAULT_LOCALES;

  const files = fs.readdirSync(EN_DIR).filter((f) => f.endsWith('.json'));

  for (const locale of targets) {
    if (!/^[a-z]{2}$/.test(locale)) throw new Error(`Invalid locale: ${locale}`);
    console.log(`Translating ${files.length} bundles → ${locale}`);
    for (const file of files) {
      const outPath = path.join(MESSAGES_DIR, locale, file);
      if (!force && fs.existsSync(outPath)) {
        console.log(`  ${locale}/${file}: exists, skipping (use --force to overwrite)`);
        continue;
      }
      await translateNamespace(file, locale);
      await sleep(DELAY_MS);
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
