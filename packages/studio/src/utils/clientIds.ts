/**
 * Module-scope impure helpers.
 *
 * React Compiler flags Math.random/Date.now inside component scope. Keeping the
 * impure calls in this module lets event handlers create IDs/timestamps without
 * tripping the purity lint rule, while behavior stays identical.
 */
export function randomUnit(): number {
  return Math.random();
}

export function createClientId(): string {
  return `${Date.now().toString(36)}${randomUnit().toString(36).slice(2, 8)}`;
}

export function clientTimestamp(): number {
  return Date.now();
}
