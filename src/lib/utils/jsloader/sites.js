// libraries
import { departmentList } from "$utils/jsloader/sites/institution/departmentList.js";

/**
 * Get a department list for sites without configuration form
 * @param {string} id 
 * @param {string} conf 
 * @param {string} sekce 
 * @param {Object<string,string>} formData 
 * @param {Object<string,any>} outData100 
 * @param {Object<string,any>|Array<Object>} outData200 
 * @param {string} lang 
 * @param {string} akce 
 * @returns Promise <?Object.<number, string>[]>
 */
export async function sites(id, conf, sekce, formData, outData100, outData200, lang = 'en', akce = '') {
  if (conf === 'UT05' && sekce === 'ustav' && !akce) {
    try {
      return departmentList(id, formData, outData100, outData200, lang);
    } catch (error) {
			// ignore intentionally
			void error;
		}
  }
  return null;
}
