/**
 * A range of values
 * @typedef {Object} Range
 * @property {Number} min
 * @property {Number} max
 */

/**
 * Joins the array of `T` elements by another element
 * @template {T}
 * @param {T[]} parts
 * @param {T} delimiter
 * @returns {T[]} An array of elements joined by `delimiter`
 */
export function genericJoin(parts, delimiter) {
  let r = parts;
  if (parts.length > 1) {
    r = parts.flatMap((p) => [p, delimiter]).slice(0, parts.length * 2 - 1);
  }

  return r;
}
