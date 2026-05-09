'use strict';
/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlMenu.js').ArlMenu} ArlMenu */
/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlMenu.js').Subfield} Subfield */
/**
 * @typedef {Object} SubfieldEntry
 * @property {string} subfield
 * @property {string} value
 */

// libraries
import { ConnectorRe } from "../Connector/ConnectorRe.js";

/**
 * Default object to read arl
 */
class InstituteReader {
  #connectorRe;

  /** @type {?String} */
  t001;

  constructor() {
    this.t001 = null;
    this.#connectorRe = new ConnectorRe();
  }

  /**
   * Main
   * @param {string} id 
   * @param {string} idMenu 
   * @param {string} lang 
   * @returns Promise<Object.<number, string>>
   */
  async init(id = '', idMenu = '', lang = '') {
    try {
			const dataArl = await this.#connectorRe.getDataFromSessionStorage(idMenu);
			this.t001 = dataArl.t001;
			const data100 = this.#dataReader100(dataArl.data, lang);
			const dataOut = this.#dataReader(id, dataArl.data, data100, lang);
			return dataOut;
		} catch (error) {
			// ignore intentionally
			void error;
		}
  }

  /**
   * @param {ArlMenu[]} data 
   * @param {String} lang 
   * @returns  {{ [lang: string]: { [key: string]: string } }}
   */
  #dataReader100(data, lang) {
    /** @type Object<string,Object<String, String>> */
    let out = {
      en: {},
      cs: {}
    };

    void lang;
    let outItem = {};
    /** @type{?ArlMenu} */
    let objRoot = null;
    /** @type{?SubfieldEntry} */
    let subField = null;

    for (let key in data) {
      objRoot = data[key];
      if (typeof objRoot.subfields !== "undefined" && objRoot.field === '100') {
        for (let key2 in objRoot.subfields) {
          subField = objRoot.subfields[key2];
          if (typeof subField.subfield !== 'undefined') {
            switch (subField.subfield) {
              case "a":
                outItem[0] = subField.value;
                break;
              case "b":
                outItem[1] = subField.value;
                break;
              case "c":
                outItem[2] = subField.value;
                break;
              case "d":
                outItem[3] = subField.value;
                break;
              case "e":
                outItem[4] = subField.value;
                break;
            }
          }
        }
        out.en[outItem[0]] = outItem[4];
        out.cs[outItem[0]] = outItem[3];
      }
    }
    return out;
  }

  /**
   * Data reader
   * @param {string} id 
   * @param {ArlMenu[]} data 
   * @param {Object<string,Object<String, String>>} data100 
   * @param {string} lang 
   * @returns 
   */
  #dataReader(id, data, data100, lang) {

    /** @type {{ [key: number]: string }} */
    let out = {};

    /** @type {{ [key: number]: string }} */
    let outItem = {};

    /** @type {?ArlMenu} */
    let objRoot = null;

    /** @type{?SubfieldEntry} */
    let subField = null;

    let urlMenu = '';

    for (let key in data) {
      objRoot = data[key];
      if (typeof objRoot.subfields !== "undefined" && objRoot.field === '200') {
        for (let key2 in objRoot.subfields) {
          subField = objRoot.subfields[key2];
          if (typeof subField.subfield !== 'undefined') {
            switch (subField.subfield) {
              case "a":
                outItem[0] = subField.value;
                break;
              case "b":
                outItem[1] = subField.value;
                break;
              case "c":
                outItem[2] = subField.value;
                break;
              case "d":
                outItem[3] = subField.value;
                break;
              case "e":
                outItem[4] = subField.value;
                break;
              case "x":
                outItem[5] = subField.value;
                break;
            }
          }
        }
        if (typeof data100.cs[outItem[5]] !== "undefined") {
          let outUrlCs = data100.cs[outItem[5]] + '/' + outItem[3];
          let outUrlEn = data100.en[outItem[5]] + '/' + outItem[4];
          urlMenu = (lang == 'en') ? outUrlEn : outUrlCs;
          if (urlMenu == id) {
            out = outItem;
            out[6] = outUrlCs;
            out[7] = outUrlEn;
            return out;
          }
        }
      }
    }
    return out;
  }
}

export { InstituteReader }









