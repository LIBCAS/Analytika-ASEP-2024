import { Institute } from "./Institute.js";
/**
 * Get information about institute
 * @param {string} idUstavDetail 
 * @param {Array.<Array.<string>>} arr 
 * @returns {Object<string, string>}
 */
export function getInformationInstitute(idUstavDetail, arr = Array()) {
  const ustav = new Institute(idUstavDetail,arr);
  return ustav.getUstavInfo();
}