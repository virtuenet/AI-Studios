/**
 * Scene/set continuity builder, adapted from ai-film-crew's scene-set skill.
 * One structured set is composed into every shot prompt so the room, wardrobe,
 * light direction and eyeline stay stable across angles.
 */
export const SCENE_FIELDS = [
  { id: 'location', label: 'Location', placeholder: 'a sunlit loft studio' },
  { id: 'timeOfDay', label: 'Time of day', placeholder: 'late afternoon' },
  { id: 'wardrobe', label: 'Wardrobe', placeholder: 'navy linen shirt, no logos' },
  { id: 'props', label: 'Key props', placeholder: 'ceramic mug, notebook on the desk' },
  { id: 'lightDirection', label: 'Light direction', placeholder: 'window light from camera left' },
  { id: 'camera', label: 'Camera', placeholder: 'over-the-shoulder medium shot' },
  { id: 'lens', label: 'Lens', placeholder: '85mm, f/2' },
  { id: 'eyeline', label: 'Eyeline', placeholder: 'Ana looks at Jo, never into the lens' },
];

export const EMPTY_SCENE = Object.fromEntries(SCENE_FIELDS.map((field) => [field.id, '']));

export function composeScenePrompt(scene = {}, shotPrompt = '') {
  const parts = [];
  if (shotPrompt.trim()) parts.push(shotPrompt.trim());
  for (const field of SCENE_FIELDS) {
    const value = String(scene[field.id] || '').trim();
    if (value) parts.push(`${field.label}: ${value}`);
  }
  if (parts.length === 0) return '';
  return `${parts.join('. ')}.`;
}

export function sceneSetSummary(scene = {}) {
  return SCENE_FIELDS
    .map((field) => ({ ...field, value: String(scene[field.id] || '').trim() }))
    .filter((field) => field.value);
}

export function loadSceneSet(storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) return { ...EMPTY_SCENE };
  try {
    return { ...EMPTY_SCENE, ...JSON.parse(storage.getItem('ai_studios_scene_set_v1') || '{}') };
  } catch {
    return { ...EMPTY_SCENE };
  }
}

export function saveSceneSet(scene = {}, storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) return;
  try {
    storage.setItem('ai_studios_scene_set_v1', JSON.stringify(scene));
  } catch {
    // ignore
  }
}
