import { Reader } from "./FormSites/Reader.js";
import { RenderFacets } from "./FormFacets/RenderFacets.js";

/**
 * Facets
 * @param {?Object<string, string|number|null|Array<number|string|null>>} formData
 * @param {?Object<string, any>} formDataFacets
 * @param {?string} urlBase 
 * @param {string} lang 
 */
export async function formFacets(urlBase = '', formData = {}, formDataFacets = {}, lang = 'en') {
  let out = [];
  let outRender = [];
  try {
    const reader = new Reader();
    const renderFactecs = new RenderFacets();
    out = await reader.init('fazeta', 'f', urlBase, formData, lang);
    outRender = renderFactecs.init(out.facets,formDataFacets);
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return outRender;
}


