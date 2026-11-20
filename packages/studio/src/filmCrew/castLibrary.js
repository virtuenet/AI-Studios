/**
 * Recurring-cast library, adapted from ai-film-crew's casting discipline.
 * Characters keep a name, a continuity description, and reference images so
 * multi-image models can be fed the same person every shot.
 */
export const CAST_STORAGE_KEY = 'ai_studios_cast_v1';
export const MAX_CAST_REFERENCES = 14;

let sequence = 0;
function nextId() {
  sequence += 1;
  return `cast-${Date.now().toString(36)}-${sequence}`;
}

export function createCastMember({ name = '', description = '', referenceUrls = [] } = {}) {
  return {
    id: nextId(),
    name: String(name).trim(),
    description: String(description).trim(),
    referenceUrls: [...new Set(referenceUrls.filter(Boolean))],
  };
}

export function upsertCastMember(list = [], member) {
  const index = list.findIndex((item) => item.id === member.id);
  if (index === -1) return [...list, member];
  const next = [...list];
  next[index] = member;
  return next;
}

export function removeCastMember(list = [], id) {
  return list.filter((item) => item.id !== id);
}

export function applyCastToPrompt(prompt = '', members = []) {
  const cast = members.filter((m) => m.name);
  if (cast.length === 0) return prompt;
  const lines = cast.map((m) => `- ${m.name}${m.description ? `: ${m.description}` : ''}`);
  return `${prompt ? `${prompt}\n\n` : ''}Cast (keep identical across shots):\n${lines.join('\n')}`;
}

export function collectCastReferences(members = [], max = MAX_CAST_REFERENCES) {
  const urls = [];
  for (const member of members) {
    for (const url of member.referenceUrls || []) {
      if (url && !urls.includes(url)) urls.push(url);
      if (urls.length >= max) return urls;
    }
  }
  return urls;
}

export function loadCast(storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) return [];
  try {
    const parsed = JSON.parse(storage.getItem(CAST_STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCast(list = [], storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) return;
  try {
    storage.setItem(CAST_STORAGE_KEY, JSON.stringify(list));
  } catch {
    // Storage may be unavailable; casting still works for the session.
  }
}
