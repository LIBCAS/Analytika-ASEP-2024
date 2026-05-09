import { Institute } from "./Institute.js";
/**
 * Name of the institute
 * @param {string} idUstavDetail 
 * @param {Array.<Array.<string>>} arr 
 * @returns {string}
 */
export function nameOfIntitute(idUstavDetail, arr = Array()) {
  const ustav = new Institute(idUstavDetail, arr);
  return ustav.getJmenoUstavu();
}