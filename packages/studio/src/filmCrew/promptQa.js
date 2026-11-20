/**
 * Shot-prompt QA, adapted from ai-film-crew's set/cast discipline.
 *
 * Flags prompts that omit the anchors which keep a generated shot consistent:
 * camera, lighting, wardrobe/set, eyeline for two-handers, and product scale.
 */
const CAMERA = /\b(close[- ]?up|wide|medium shot|low angle|high angle|over[- ]the[- ]shoulder|dutch|macro|telephoto|\d{2,3}mm|lens|aperture|f\/\d)/i;
const LIGHT = /\b(light(ing)?|golden hour|backlit|rim light|softbox|window light|neon|practical|moody|high[- ]key|low[- ]key)\b/i;
const WARDROBE = /\b(wearing|wardrobe|outfit|dress|suit|jacket|uniform|costume)\b/i;
const SET = /\b(in a|inside|room|office|kitchen|studio|street|park|cafe|restaurant|set|background)\b/i;
const EYELINE = /\b(looking at|facing|eyeline|gaze|towards? (him|her|them|camera))\b/i;
const PRODUCT_SCALE = /\b(\d+\s?(mm|cm|inch|in|oz|ml|g)\b|to scale|true size|real size)\b/i;
const PEOPLE = /\b(man|woman|person|people|two|three|pair|couple|group|he|she|they|child)\b/i;
const PRODUCT = /\b(bottle|can|jar|product|packaging|box|phone|laptop|watch|shoe|cup|mug)\b/i;

export function lintShotPrompt(prompt = '') {
  const text = String(prompt);
  const checks = [
    { id: 'camera', pass: CAMERA.test(text), hint: 'Add camera/lens language (e.g. "85mm close-up").' },
    { id: 'lighting', pass: LIGHT.test(text), hint: 'Add a lighting direction (e.g. "window light from camera left").' },
    { id: 'wardrobe', pass: WARDROBE.test(text), hint: 'State wardrobe so it stays consistent across shots.' },
    { id: 'set', pass: SET.test(text), hint: 'Name the location/set and key props.' },
  ];
  if (PEOPLE.test(text) && (text.match(/\b(man|men|woman|women|person|people|girl|girls|boy|boys|he|she|they|two|three|pair|couple|group)\b/gi) || []).length >= 2) {
    checks.push({ id: 'eyeline', pass: EYELINE.test(text), hint: 'State who looks at whom (eyeline) for multi-person shots.' });
  }
  if (PRODUCT.test(text)) {
    checks.push({ id: 'productScale', pass: PRODUCT_SCALE.test(text), hint: 'Give the real product size (mm/cm) to avoid drift.' });
  }
  const failed = checks.filter((c) => !c.pass);
  return {
    passed: failed.length === 0,
    score: Math.round(((checks.length - failed.length) / checks.length) * 100),
    checks,
    hints: failed.map((c) => c.hint),
  };
}
