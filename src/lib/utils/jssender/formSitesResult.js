// classes
import { Reader } from "./FormSites/Reader.js";

/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataText.js').ArlDataText} ArlDataText */

/**
 * Sites result
 * @param {?string|number} site 
 * @param {?string} urlBase 
 * @param {Object<string,string|Array<string|number|null>|number>} formData 
 * @param {string} lang 
 * @param {boolean} devel 
 * @returns {Promise<ArlDataText>}
 */
export async function formSitesResult(site = '1', urlBase = '', formData, lang = 'en', devel = false) {
  let out = {};
  try {
    const reader = new Reader();

    let siteStr = '1';
    if (site) {
      siteStr = site.toString();
    }

    let urlBaseStr = '1';
    if (urlBase) {
      urlBaseStr = urlBase.toString();
    }
    out = await reader.init('result', siteStr, urlBaseStr, formData, lang);
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}