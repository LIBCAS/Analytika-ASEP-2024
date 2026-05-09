import { Reader } from "./FormSites/Reader.js";

/**
 * Form - chart
 * @param {?string} urlBase
 * @param {Object<string, any>} formData
 * @returns {Promise<?Object<string,any>|?string>}
 */
export async function formCharts(urlBase = '', formData = {}) {
  
  let out = null;
  try {
    const reader = new Reader();
    out = await reader.initChart (urlBase, formData);
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}