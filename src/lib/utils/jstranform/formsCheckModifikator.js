/**
 * Check key
 * @param {object} objModifikator
 * @param {string} id
 * @param {string} value
 * @return {boolean}
 */
export function formsCheckModifikator(objModifikator, id = '', value = '') {

  if (typeof objModifikator === "undefined" || typeof objModifikator[id] === "undefined") {
    return false;
  }

  if (objModifikator[id] === value) {
    return true;
  }
  return false;
}

