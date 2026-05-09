/**
 * Generate name for export - YYYY-mm-dd--hh-ii--"str"."extension"
 * @param {string} str 
 * @param {string} extension 
 * @returns 
 */
export function exportName(str, extension) {
  const now = new Date();
  const year = now.getFullYear();
  const month = padTo2Digits(now.getMonth() + 1);
  const day = padTo2Digits(now.getDate());
  const hours = padTo2Digits(now.getHours());
  const minutes = padTo2Digits(now.getMinutes());
  return `${year}-${month}-${day}--${hours}-${minutes}--${str}.${extension}`;
}

/**
 * Conversion to 2 characters
 * @param {string|number} num 
 * @returns 
 */
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}









