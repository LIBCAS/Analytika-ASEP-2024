'use strict';

import { ConnectorClient } from "../Connector/ConnectorClient.js";
import { ConnectorRe } from "../Connector/ConnectorRe.js";
import settingsConfCache from "$lib/settingsConfCache.js";
/**
 * Dial loader
 */
class FormReaderDial {
  #arrCacheDial
  #connectorClient;
  #connectorRe;
  // #urlBase;

  /** @type {?string} */
  t001;

  constructor() {
    this.t001 = null;
    this.#connectorClient = new ConnectorClient();
    this.#connectorRe = new ConnectorRe();
    this.#arrCacheDial = settingsConfCache;
  }

  /**
   * Base function get dial data
   * @param {string} id  identificator Arl
   * @param {boolean} nullAble 
   * @param {string} ustav 
   * @param {string} lang 
   * @param {Object<string,string|Array<any>>} conf 
   * @returns 
   */
  async init(id = '', nullAble = true, ustav = '', lang = '', conf = {}) {
    try {
      let reg = RegExp('^ANALYTIKA_', 'g');
      id = id.replace(reg, '');
      let reg2 = RegExp('@AKTUALNI_USTAV$', 'g');

      if (ustav) {
        id = id.replace(reg2, ustav.toUpperCase());
      }

      let dataArl = null;
      if (this.#arrCacheDial.includes(id)) {
        dataArl = await this.#connectorRe.getDataFromSessionStorage(id);
      } else {
        dataArl = await this.#connectorClient.fetchData(id);
      }
      if (!dataArl.data) {
				return [];
      }
      this.t001 = dataArl.t001;
      let dataOut = [];
      if (typeof conf.institucionalniPodpora !== 'undefined' && conf.institucionalniPodpora) {
				dataOut = this.#instututionalS(dataArl.data, ustav);
			} else {
				dataOut = this.#dataReader(dataArl.data, lang, nullAble, conf);
			}
			return dataOut;
    } catch (err) {
			// ignore intentionally
			void err;
    }
  }

  /**
   * Data reader
   * @param {Array<Object>} data 
   * @param {string} lang 
   * @param {boolean} nullAble 
   * @returns
   */
  #dataReader(data, lang, nullAble) {
    let out = [];

    /** @type{Object<string,any>} */
    let objRoot = {};

    /** @type{Object<string,?string>} */
    let subField = {};

    /** @type{Object<string,?string>} */
    let outAll = {};

    /** @type{Object<string,?string>} */
    let outAllMutace = {};

    /** @type{number} */
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

      outAllMutace = {};
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
                  outAll[1] = subField.value;
                  break;
                case "c":
                  outAll[2] = subField.value;
                  break;
                case "l":
                  outAll[3] = subField.value;
                  break;
                case "d":
                  outAll[4] = subField.value;
                  break;
                case "e":
                  outAll[5] = subField.value;
                  break;
              }
            }
          }

          if (lang === 'en') {
            outAllMutace[0] = outAll[0];
            outAllMutace[1] = outAll[2];
            outAllMutace[2] = outAll[3];
            outAllMutace[3] = outAll[5];
          }
          else {
            outAllMutace[0] = outAll[0];
            outAllMutace[1] = outAll[1];
            outAllMutace[2] = outAll[3];
            outAllMutace[3] = outAll[4];
          }
          out[i] = outAllMutace;
          i++;
        }
      }
    }
    if (nullAble) {
      /** @type {Object<string,string>} */
      let nullArr = { 0: '', 1: '-', 2: '', 3: '' };
      out.unshift(nullArr);
    }
    return out;
  }

  /**
   * Set data for dial instututional Support
   * @param {Array<Object<string, any>>} dataOut 
   * @param {string} ustav 
   * @returns 
   */
  #instututionalS(dataOut, ustav) {
    const out = [];
    const outT = [];
    let j = 0;
    for (let key in dataOut) {
      const objRoot = dataOut[key];

      /** @type{Object<string,?string>} */
      const outAll = {};
      outAll[0] = null;
      outAll[1] = null;
      outAll[2] = null;

      /** @type{Object<string,?string>} */
      let subField = {};
      if (typeof objRoot.subfields !== "undefined") {
        for (let key2 in objRoot.subfields) {
          subField = objRoot.subfields[key2];
          // console.log(subField)
          switch (subField.subfield) {
            case "a":
              outAll[0] = subField.value;
              break;
            case "b":
              outAll[1] = subField.value;
              break;
            case "c":
              outAll[2] = subField.value;
              break;
          }
        }
        outT[j] = outAll;
        j++;
      }
    }
    if (outT.length) {
      let i = 0;
      for (const dataOutItem of outT) {
        if (dataOutItem['1'] && dataOutItem['1'].toUpperCase() == ustav.toUpperCase()) {
          const outItem = { '0': dataOutItem[0], '1': dataOutItem[0], '2': i === 0 ? '1' : null }
          out[i] = outItem
          i++;
        }
      }
    }
    return out;
  }
}

export { FormReaderDial }



