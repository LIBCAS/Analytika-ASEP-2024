/**
 * Set url - for dev. servers
 * @param {string} urlStr
 * @returns {string}
 */
export function setUrlWeb(urlStr) {
  let ret = '';
  ret = urlStr.replace(/^\/cav-devel/, "");
  return ret;
}
