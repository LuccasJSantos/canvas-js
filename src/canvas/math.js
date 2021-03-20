/**
 * Map a number from a range X to a range Y
 * @param {number} val 
 * @param {number} min 
 * @param {number} max 
 * @param {number} toMin 
 * @param {number} toMax 
 * @returns {number}
 */
export const map = (val, min, max, toMin, toMax) => {
  return (val - min) * (toMax - toMin) / (max - min) + toMin
}