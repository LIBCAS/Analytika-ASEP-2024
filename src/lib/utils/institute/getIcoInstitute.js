/**
 * Get ICO of institute
 * @param {string} idUstavDetail 
 * @param {Array<Array<string>>} arr 
 * @returns {string}
 */
export function getIcoInstitute(idUstavDetail, arr) {
  let out = '';
  let outArr = arr.find(row => row.includes(idUstavDetail)) || null;
  if (Array.isArray(outArr) && outArr.length && outArr[4]) {
    out = outArr[4].toString();
  }
  return out;
}


