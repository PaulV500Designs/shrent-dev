/**
 * Format number with commas
 * @param {number}  num       number to format
 *
 * @returns                   returns the formatted string number
 */
export function numberCommas(num: number | string = 0, digits = 2): string {
  const n = typeof num === 'number' ? num.toString() : num;

  return Number(parseFloat(n).toFixed(digits)).toLocaleString('en', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}
