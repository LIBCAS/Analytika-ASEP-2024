'use strict';
// tridy
import { ConnectorClient } from "../Connector/ConnectorClient.js";
import { Json } from "../../../services/Json.js";
import { ConnectorRe } from "../Connector/ConnectorRe.js";

/**
 * Base loader - configuration
 */
class FormReader {
  #connectorRe;
  #connectorClient;

  t001;
  json;


  constructor() {
    this.t001 = null;
    this.#connectorClient = new ConnectorClient();
    this.#connectorRe = new ConnectorRe();
    this.json = new Json();
  }

  
  async init(id = '', lang = '') {
    try {
      let dataArl = null;
      const reg = RegExp('KONFIG_STRANA_', 'i');
      if (reg.test(id) == true) {
        dataArl = await this.#connectorRe.getDataFromSessionStorage(id);
      } else {
        dataArl = await this.#connectorClient.fetchData(id);
      }
      this.t001 = dataArl.t001;
      const dataOut = this.#dataReader(dataArl.data, lang);
      return dataOut;
    } catch (error) {
      throw new Error
        (`Chyba pri nacitani dat - ${id} - ${error}.`);
        // console.error(`78 - Chyba pri nacitani dat - ${id} - ${error}.`);
    }
  }

  #dataReaderStrana100(objRoot, lang) {
    if (typeof objRoot.subfields === "undefined" || objRoot.field !== '100') {
      return null;
    }
    let subField = {};
    let outAllMutace = {};
    let outAll = {};
    outAll[0] = null;
    outAll[1] = null;
    outAll[2] = null;
    outAll[3] = null;
    outAll[4] = null;
    outAll[5] = null;
    outAll[6] = null;
    outAll[7] = null;
    outAll[8] = null;
    outAll[9] = null;
    outAll[10] = null;
    outAll[11] = {};
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
          case "d":
            outAll[3] = subField.value;
            break;
          case "e":
            outAll[4] = subField.value;
            break;
          case "f":
            outAll[5] = subField.value;
            break;
          case "g":
            outAll[6] = subField.value;
            break;
          case "h":
            outAll[7] = subField.value;
            break;
          case "i":
            outAll[8] = subField.value;
            break;
          case "j":
            outAll[9] = subField.value;
            break;
          case "k":
            outAll[10] = subField.value;
            break;
          case "o":
            outAll[11] = this.json.jsonToObj(subField.value);
            break;
        }
      }
    }
    if (lang === 'en') {
      outAllMutace[0] = outAll[0];
      outAllMutace[1] = outAll[2];
    }
    else {
      outAllMutace[0] = outAll[0];
      outAllMutace[1] = outAll[1];
    }
    outAllMutace[2] = outAll[3];
    outAllMutace[3] = outAll[4];
    outAllMutace[4] = outAll[5];
    outAllMutace[5] = outAll[6];
    outAllMutace[6] = outAll[7];
    outAllMutace[7] = outAll[8];
    outAllMutace[8] = outAll[9];
    outAllMutace[9] = outAll[10];
    outAllMutace[10] = outAll[11];
    outAllMutace[11] = null;
    // console.log(outAllMutace, '---- outAllMutace ---');
    return outAllMutace;
  }

  #dataReaderStrana200(objRoot, lang) {
    if (typeof objRoot.subfields === "undefined" || objRoot.field !== '200') {
      return null;
    }

    let outAll = {};
    let outAllMutace = {};
    outAll[0] = null;
    outAll[1] = null;
    outAll[2] = null;
    outAll[3] = null;
    outAll[4] = null;
    let subField = {};

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
          case "d":
            outAll[3] = this.json.jsonToObj(subField.value);
            break;
          case "e":
            outAll[4] = subField.value;
            break;
        }
      }
    }
    if (lang === 'en') {
      outAllMutace[0] = outAll[0];
      outAllMutace[1] = outAll[2];
      outAllMutace[2] = outAll[2];
    }
    else {
      outAllMutace[0] = outAll[0];
      outAllMutace[1] = outAll[1];
      outAllMutace[2] = outAll[1];
    }
    outAllMutace[3] = outAll[3];
    outAllMutace[4] = outAll[4];

    return outAllMutace;
  }

  #dataReader(data, lang) {
    let out = {};
    let outStrana100 = [];
    let outStrana200 = [];
    let objRoot = {};
    let i = 0;
    let j = 0;
    for (let key in data) {
      objRoot = data[key];
      if (typeof objRoot.subfields !== "undefined" && objRoot.field === '100') {
        outStrana100[i] = this.#dataReaderStrana100(objRoot, lang);
        // console.log(outStrana100[i],'---- outStrana100 ---'+i+'----');
        i++;
      }
      else if (typeof objRoot.subfields !== "undefined" && objRoot.field === '200') {
        outStrana200[j] = this.#dataReaderStrana200(objRoot, lang);
        j++;
      }
    }

    out.strana100 = outStrana100;
    out.strana200 = outStrana200;
    return out;
  }
}
export { FormReader }
