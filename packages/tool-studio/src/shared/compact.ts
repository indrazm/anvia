/**
 * Strips keys whose resolved type includes `undefined`.
 *
 * Replaces the verbose `...(x === undefined ? {} : { key: x })` pattern.
 */
export type Compact<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: Exclude<T[K], undefined>;
};

export function compact<T extends Record<string, unknown>>(obj: T): Compact<T> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result as Compact<T>;
}
