'use strict';

// Classes
import { ConnectorRe } from "../Connector/ConnectorRe.js";

// Typedefs
/**
 * @typedef {Object} ArlData
 * @property {Array<{subfield: string, [key: string]: string}>} [subfields]
 * @property {string} [field]
 * @property {Object<string, string>} [key]
 */
/**
* @typedef {Object} Object100
* @property {Array<Array<String>>} data
* @property {Array<String>} keys
*/
/**
* @typedef {Object} Object200
* @property {Array<Array<String>>} data
* @property {Array<String>} keys
*/

/**
 * Base Class to read menu data from Arl
 * 
 */
class Reader {
  #connectorRe;
  constructor() {
    this.#connectorRe = new ConnectorRe();
  }
  /**
   * Base menu data reader
   * @param {string} idMenu 
   * @param {string} lang 
   * @returns 
   */
  async init(idMenu, lang = '') {
    /** Main data object for menu 
     * @type{Object<string,Array<Array<string>|Array<Object<string,string>>>>}  
     * */
    const out = {};
    out.nadpisy = [];
    out.valMenu = [];
    try {
      const dataArl = await this.#connectorRe.getDataFromSessionStorage(idMenu);
      const data100 = this.#dataReader100(dataArl.data, lang);
      out.nadpisy = data100.data;
      out.valMenu = this.#dataReader(dataArl.data, data100, lang);
      return out;
    } catch (error) {
      throw new Error
        (`Chyba pri nacitani dat - ${idMenu} - ${error}.`);
    }
  }

  /**
   * Reading tag 100
   * @param {Array<ArlData>} data 
   * @param {string} lang 
   * @returns array
   */
  #dataReader100(data, lang) {

    /** @type {Object100} */
    const out = {};
    out.keys = [];
    out.data = [];

    let objRoot;
    let subField;
    /** @type {string[]} */
    let arrKeyN = [];
    let exUstavyNad = [];
    let exUstavyNadZkr = [];
    let keyNAct = 0;

    for (let key in data) {
      objRoot = data[key];
      let itemArrW1 = [];
      itemArrW1[0] = '';
      itemArrW1[1] = '';
      itemArrW1[2] = '';

      if (typeof objRoot.subfields !== "undefined" && typeof objRoot.field !== "undefined" && objRoot.field === '100') {
        for (let key2 in objRoot.subfields) {
          subField = objRoot.subfields[key2];
          let nadpisId = '';
          if (typeof subField.subfield !== 'undefined') {
            switch (subField.subfield) {
              case "a":
                nadpisId = subField.value;
                itemArrW1[0] = nadpisId;
                keyNAct = arrKeyN.length;
                if (!arrKeyN.includes(nadpisId)) {
                  arrKeyN[keyNAct] = nadpisId;
                  exUstavyNadZkr[keyNAct] = nadpisId;
                }
                break;
              case "b":
                if (lang === 'cs') itemArrW1[1] = subField.value;
                break;
              case "c":
                if (lang === 'en') itemArrW1[1] = subField.value;
                break;
              case "d":
                if (lang === 'cs') itemArrW1[2] = subField.value;
                break;
              case "e":
                if (lang === 'en') itemArrW1[2] = subField.value;
                break;
            }
          }
        }
        exUstavyNad[keyNAct] = itemArrW1;
      }
    }
    out.keys = exUstavyNadZkr;
    out.data = exUstavyNad;
    return out;
  }

  /**
   * Reading tag 200
   * @param {Array<ArlData>} data 
   * @param {any} data100 
   * @param {string} lang 
   * @returns {Array<Array<Object<string,string>>>}
   */
  #dataReader(data, data100, lang) {
    /** @type {Array<Array<Object<string,string>>>} */
    let out = [];
    let objRoot;
    let subField;

    /** @type {Object<string, string>} */
    let outItem = {};

    for (let key in data) {
      objRoot = data[key];
      outItem = {};
      outItem[0] = '';
      outItem[1] = '';
      outItem[2] = '';
      outItem[3] = '';
      outItem[4] = '';
      outItem[5] = '';
      if (typeof objRoot.subfields !== "undefined" && objRoot.field === '200') {
        for (let key2 in objRoot.subfields) {
          subField = objRoot.subfields[key2];
          if (typeof subField.subfield !== 'undefined') {
            switch (subField.subfield) {
              case "a":
                outItem[0] = subField.value;
                break;
              case "b":
                if (lang === 'cs') outItem[1] = subField.value;
                break;
              case "c":
                if (lang === 'en') outItem[1] = subField.value;
                break;
              case "d":
                if (lang === 'cs') outItem[2] = subField.value;
                break;
              case "e":
                if (lang === 'en') outItem[2] = subField.value;
                break;
              case "f":
                if (lang === 'cs') outItem[3] = subField.value;
                break;
              case "g":
                if (lang === 'en') outItem[3] = subField.value;
                break;
              case "h":
                outItem[4] = subField.value;
                break;
              case "x":
                outItem[5] = subField.value;
                break;
            }
          }
        }
        let keyNadpis = data100.keys.findIndex((/** @type {string} */ element) => element == outItem[5]);
        if (keyNadpis >= 0) {
          let urlBase = data100.data[keyNadpis][2];
          outItem[2] = '#' + urlBase + '/' + outItem[2];
          if (typeof out[keyNadpis] === "undefined") {
            out[keyNadpis] = [];
          }
          out[keyNadpis].push(outItem);
        }
      }
    }
    return out
  }
}
export { Reader }