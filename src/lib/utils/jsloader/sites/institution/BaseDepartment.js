'use strict';
// Classes
import { ConnectorClient } from "$utils/jsloader/Connector/ConnectorClient.js";

// Typedefs
/**
 * @typedef {Object} ArlData
 * @property {Array<{subfield: string, [key: string]: string}>} [subfields]
 * @property {string} [field]
 * @property {Object<string, string>} [key]
 */

/**
 * Base department
 */
class BaseDepartment {
  #connectorClient;
  constructor(urlBase = '') {
		// ignore intentionally
		void urlBase;
		this.#connectorClient = new ConnectorClient();
	}

  /**
   * 
   * @param {string} id 
   * @param {string} lang 
   * @param {?string} urlOddeleni 
   * @returns 
   */
  async init(id = '', lang = '', urlOddeleni = null) {
    let out = [];
    try {
      id = 'oddel_' + id;
      const dataArl = await this.#connectorClient.fetchData(id);
      if (dataArl.data) {
        out = this.#dataReader(dataArl.data, lang, urlOddeleni);
      }
    } catch (err) {
			// ignore intentionally
			void err;
			return null;
		}
    return out;
  }

  /**
   * Get list of department
   * 0 - zkratka, 1 - nazev, 2  - datum od, 3 - ofic. zkratka, 4 - url, 5 - x  (hodnota 1 - smazané oddělení), 6 - index razeni, 7 - index razeny sestaveny systemem
   * @param {Array<ArlData>} data 
   * @param {string} lang 
   * @param {?string} urlOddeleni 
   * @returns
   */
  #dataReader(data, lang, urlOddeleni) {
    // console.log(data, '---- data ---')
    let out = [];
    let objRoot;
    let subField;
    /** @type{Object<string,?string>} */
    let outAll = {};
    let i = 0;
    for (let key in data) {
      objRoot = data[key];
      outAll = {};
      outAll[0] = null;
      outAll[1] = null;
      outAll[2] = null;
      outAll[3] = null;
      outAll[4] = null;
      outAll[5] = null;
      outAll[6] = null;
      outAll[7] = null;

      if (typeof objRoot.subfields !== "undefined") {
        if (objRoot.field === '200') {
          for (let key2 in objRoot.subfields) {
            subField = objRoot.subfields[key2];
            if (typeof subField.subfield !== 'undefined') {
              switch (subField.subfield) {
                case "a":
                  outAll[0] = subField.value;
                  break;
                case "b":
                  if (lang === 'cs') outAll[1] = subField.value;
                  break;
                case "c":
                  if (lang === 'en') outAll[1] = subField.value;
                  break;
                case "d":
                  if (lang === 'cs') outAll[2] = subField.value;
                  break;
                case "e":
                  if (lang === 'en') outAll[2] = subField.value;
                  break;
                case "f":
                  if (lang === 'cs') outAll[3] = subField.value;
                  break;
                case "g":
                  if (lang === 'en') outAll[3] = subField.value;
                  break;
                case "h":
                  if (lang === 'cs') outAll[4] = subField.value;
                  break;
                case "i":
                  if (lang === 'en') outAll[4] = subField.value;
                  break;
                case "x":
                  outAll[5] = subField.value;
                  break;
                case "j":
                  outAll[6] = subField.value;
                  break;
              }
            }
          }
          // add sort string
          if (urlOddeleni === null || urlOddeleni === outAll[4]) {
            if (outAll[5]) {
              outAll[7] = (50000+Number(outAll[6] || 0)).toString()+'--'+(outAll[1] || '');
            } else {
              outAll[7] = (10000+Number(outAll[6] || 0)).toString()+'--'+(outAll[1] || '');
            }
            out[i] = outAll;
          }
          i++;
        }
      }
    }
    return this.#dataSorter(out);
  }

  /**
   * Sort department by sort string
   * @param {Array<Object<string, string>>|Array<null>} data 
   * @returns 
   */
  #dataSorter(data) {
    if (Array.isArray(data) && data.length) {
      data.sort((a, b) => a[7].localeCompare(b[7]));
    }
    return data
  }
}
export { BaseDepartment }

