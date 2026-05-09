import { formsConfiguration } from "./formsConfiguration.js";

/**
 * @typedef OutDataForms
 * @type {object}
 * @property {?Object<string,any>} outData
 * @property {?Object<string,any>} outData200
 * @property {Array<?Object<string,any>>} formData
 * @property {Array<?Object<string,any>>} formDataAll
 * @property {?Object<string,string|null|number>} formRequired
 * @property {?Object<string,string|null|number>} formErrors
 * @property {null|Array<?Array<Object<string,any>>>} outDataBlock
 * @property {?Array<Object<string,any>>} outDataFacels
 * @property {?Array<?Object<string,any>>} outDataBlock__s
 * @property {?Array<Array<?Object<string,any>>>} outDataBlock200
 * @property {?Array<Array<?Object<any,any>>>} outDataBlock200x
 * @property {?Array<Array<?Object<any,any>>>} outDataBlock200.zf
 * @property {?Array<Array<?Object<any,any>>>} outDataBlock200.trideni
 * @property {?Array<Object<string,string|null|number>>} outDataHide
 * 
 */

/**
 * Formular - iterator
 * @param {?string} id 
 * @param {?string} urlBase 
 * @param {string} lang 
 * @param {string} conf 
 * @param {string} ustav 
 * @param {boolean} devel 
 * @returns {Promise<OutDataForms>} 
 */
export async function forms(id = null, urlBase = '', lang = 'en', conf = '', ustav = '', devel = false) {
  if (conf) {
    const reg = RegExp('^KONFIG_STRANA_', 'g');
    if (reg.test(conf) == true) {
      id = conf;
    } else {
      id = 'KONFIG_STRANA_' + conf;
    }
  }
  const outData = await formsConfiguration(id, urlBase, ustav, lang, devel);

  /** @type {Object<string,string|Array<any>|Object<string, any>>} */
  const outLs = {};
  outLs.outData = outData.data100;
  outLs.outData200 = outData.data200;

	/** @type {Array<Object<string,any>>} */
  outLs.outDataBlock = [];

  outLs.outDataBlock200 = {};
  
  /** @type {Array<Object<string,any>>} */
  outLs.outDataBlock200.trideni = [];
  
  /** @type {Array<Object<string,any>>} */
  outLs.outDataBlock200.zf = [];

  outLs.outDataFacels = {};

  /** @type {Array<?Object<string,object>>} */
  outLs.outDataHide = [];

  outLs.formData = {};
  outLs.formDataAll = {};
  outLs.formErrors = {};
  outLs.formRequired = {};
  outLs.radek = '';
  outLs.sloupec = '';
  outLs.menu_id = '';

  for (let j in outLs.outData200) {
    const objRoot = outLs.outData200[j];
    if (objRoot) {
      if (typeof objRoot[3] !== "undefined" && objRoot[3] !== null) {
        let selTrideni = false;
        if (
          typeof objRoot[3]['trideni_ciselnik'] !== 'undefined' &&
          objRoot[3]['trideni_ciselnik'] &&
          typeof objRoot[3]['trideni'] !== 'undefined' &&
          objRoot[3]['trideni']
        ) {
          for (let k in objRoot[3]['trideni_ciselnik']) {
            if (objRoot[3]['trideni_ciselnik'][k][0] === objRoot[3]['trideni']) {
              objRoot[3]['trideni_ciselnik'][k][2] = '1';
              selTrideni = true;
              break;
            }
          }
          if (!selTrideni &&
            typeof objRoot[3]['trideni_ciselnik'][0][2] !== 'undefined'
          ) {
            objRoot[3]['trideni_ciselnik'][0][2] = '1';
          }

          outLs.outDataBlock200.trideni = objRoot[3]['trideni_ciselnik'];
          outLs.formData['trideni'] = objRoot[3]['trideni'];
        }

        // select by "zf"
        let selZf = false;
        if (
          typeof objRoot[3]['zf_ciselnik'] !== "undefined" &&
          objRoot[3]['zf_ciselnik'] &&
          typeof objRoot[3]['zf'] !== "undefined" &&
          objRoot[3]['zf']
        ) {
          for (let k in objRoot[3]['zf_ciselnik']) {
            if (objRoot[3]['zf_ciselnik'][k][0] === objRoot[3]['zf']) {
              objRoot[3]['zf_ciselnik'][k][2] = '1';
              selZf = true;
              break;
            }
          }
          if (!selZf &&
            typeof objRoot[3]['zf_ciselnik'][0][2] !== 'undefined'
          ) {
            objRoot[3]['zf_ciselnik'][0][2] = '1';
          }
          outLs.outDataBlock200.zf = objRoot[3]['zf_ciselnik'];
          outLs.formData['zf'] = objRoot[3]['zf'];
        }
      }
    }
  }

  let keyBlock = 0;
  let keyHide = 0;
  let iBlock = 0;

  for (let i in outLs.outData) {
    let key = outLs.outData[i][0];
    let k = 0;

    outLs.formData[key] = [];
    outLs.formDataAll[key] = [];
    outLs.formErrors[key] = null;
    outLs.formRequired[key] = null;

    outLs.outDataFacels[key] = {};
    outLs.outDataFacels[key]['headline'] = outLs.outData[i][1];
    outLs.outDataFacels[key]['data'] = {};
    if (typeof outLs.outData[i][3] !== "undefined" && Array.isArray(outLs.outData[i][3])) {
      for (let keyFacel in outLs.outData[i][3]) {
        let keyAct = outLs.outData[i][3][keyFacel][0].toString().toLowerCase();
        if (keyAct) {
          outLs.outDataFacels[key]['data'][keyAct] = outLs.outData[i][3][keyFacel][1];
        }
      }
    }

    if (outLs.outData[i][3]) {
      if (Array.isArray(outLs.outData[i][3])) {
        for (let j = 0; j < outLs.outData[i][3].length; j++) {
          outLs.formDataAll[key][j] = outLs.outData[i][3][j][0];
          if (outLs.outData[i][3][j][2]) {
            outLs.formData[key][k] = outLs.outData[i][3][j][0];
            k++;
          }
        }
        if (typeof outLs.outData[i][11] !== "undefined" && outLs.outData[i][11] !== null && outLs.outData[i][11][0]) {
          outLs.formDataAll[key].unshift(outLs.outData[i][11][0]);
        }

      } else {
        outLs.formData[key] = outLs.outData[i][3];
      }
    }

    if (outLs.outData[i][6] === '1') {
      outLs.formRequired[key] = '1';
    }

    if (outLs.outData[i][4] !== 'Hidden') {
      if (typeof outLs.outDataBlock[keyBlock] === "undefined") {
        outLs.outDataBlock[keyBlock] = [];
        outLs.outDataBlock[keyBlock][0] = outLs.outData[i]
      } else {
        outLs.outDataBlock[keyBlock][1] = outLs.outData[i]
      }
      if (iBlock % 2 !== 0) {
        keyBlock++;
      }
      iBlock++;
    } else {
      const keyHide2 = Number(keyHide);
      outLs.outDataHide[keyHide2] = outLs.outData[i];
      keyHide++;
    }
  }
  return outLs;
}




