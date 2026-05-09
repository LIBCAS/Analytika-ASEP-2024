// libraries
import { Reader } from "./FormSites/Reader.js";

/**
 * Initializes and forms site-related data based on the given configuration.
 *
 * @param {?string|number} site - The site identifier to be processed. Defaults to '1' if not provided.
 * @param {string} [urlBase=''] - The base URL for initialization. Defaults to an empty string if not provided.
 * @param {Object<string,string|Array<string|number|null>|number>} formData - The form data required for site initialization.
 * @param {string} [lang='en'] - The language
 * @param {string} [conf=''] - The configuration type for the initialization
 * @return {Promise<Object>} The initialized site-related data based on the provided parameters.
 */
export async function formSites(site = '1', urlBase = '', formData, lang = 'en', conf = '') {
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
    if (conf === 'author') {
      out = await reader.initAuthor(siteStr, urlBaseStr, formData);
    } else if (conf === 'authorFull') {
      out = await reader.initAuthorFull(siteStr, urlBaseStr, formData);
    } else if (conf === 'sysnoFull') {
      out = await reader.initSysnoFull(siteStr, urlBaseStr, formData);
    }
    else {
      out = await reader.init('result', siteStr, urlBaseStr, formData, lang);
    }
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}

