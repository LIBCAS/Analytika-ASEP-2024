'use strict';

import { FormReader } from "./Forms/FormReader.js";
import { FormReaderDial } from "./Forms/FormReaderDial.js";
import { FormReaderDate } from "./Forms/FormReaderDate.js";

/**
 * Class handling - basic configuration data processing - adding numeric data, marking hidden, adding date processing
 * @param {?string} id 
 * @param {?string} urlBase 
 * @param {string} lang 
 * @param {boolean} devel 
 * @returns object
 */
export async function formsConfiguration(id = null, urlBase = '', ustav = '', lang = 'en', devel = true) {
  const out = {};
  out.data100 = {};
  out.data200 = [];

  try {
    // objects
    const formReader = new FormReader(urlBase);
    const readerDate = new FormReaderDate();
    const formReaderDial = new FormReaderDial(urlBase);
    /** @type {Object<string, any>} */
    const conf = {};

    const dataMain = await formReader.init(id, lang, true, ustav, conf);
    const data100 = dataMain.strana100;
    const data200 = dataMain.strana200;

    // DIALS, TAG 200
    let objRoot = null;
    for (let key in data200) {
      objRoot = data200[key];
      if (objRoot) {
        if (typeof objRoot[3] !== "undefined" && objRoot[3] !== null) {
          if (typeof objRoot[3]['trideni_ciselnik'] !== "undefined" && objRoot[3]['trideni_ciselnik']) {
            try {
              objRoot[3]['trideni_ciselnik'] = await formReaderDial.init(objRoot[3]['trideni_ciselnik'], false, '', lang);
            } catch (error) {
              console.error('Dial, tag 200: ', error);
            }
          }
          if (typeof objRoot[3]['zf_ciselnik'] !== "undefined" && objRoot[3]['zf_ciselnik']) {
            try {
							objRoot[3]['zf_ciselnik'] = await formReaderDial.init(
								objRoot[3]['zf_ciselnik'],
								false,
								'',
								lang
							);
						} catch (error) {
							// ignore intentionally
							void error;
						}
          }
        }
      }
    }

    // Dials, dates... tag 100
    objRoot = null;
    for (let key in data100) {
      objRoot = data100[key];
      let nullAble = false;

      // set nullable by: "bez_hodnoty" 
      if (
        typeof objRoot[10].bez_hodnoty !== "undefined"
        && objRoot[10].bez_hodnoty === '1'
      ) {
        nullAble = true;
      }

      if (
        typeof objRoot[10].hodnota_vse !== "undefined"
        && objRoot[10].hodnota_vse === '1'
      ) {
        nullAble = true;
        conf.arrOffer = {0:'', 1:'---', 2:''};
      }

      // other
      if (objRoot[3]) {
        try {
          if (objRoot[0]=='institucionalniPodpora') {
            conf.institucionalniPodpora = true;
            objRoot[3] = await formReaderDial.init(objRoot[3], nullAble, ustav, lang, conf);
          } else {
            conf.institucionalniPodpora = false;
            objRoot[3] = await formReaderDial.init(objRoot[3], nullAble, ustav, lang, conf);
          }

        } catch (error) {
					// ignore intentionally
					void error;
				}
      }

      if (objRoot[5]) {
        let vybraneRoky = false;
        if (typeof objRoot[10].zobrazeni !== "undefined"
          && (objRoot[10].zobrazeni === 'soucetZaVybraneRoky' || objRoot[10].zobrazeni === 'SOUCET_ZA_VYBRANE_ROKY')
        ) {
          vybraneRoky = true;
        }
        // Other - 3 data, 11 vybrane roky
        try {
          const objDateSet = readerDate.init(objRoot[5], null, vybraneRoky, lang);
          objRoot[3] = objDateSet.roky;
          objRoot[11] = objDateSet.vybrane;
        } catch (error) {
					// ignore intentionally
					void error;
				}
      }
      if (objRoot[8]) {
        // vlozeni hodnoty tagu j - skryte selekcni kriterium
        objRoot[3] = objRoot[8];
      }
      if (key % 2 == 0) {
        objRoot[5] = '1';
      } else {
        objRoot[5] = '2';
      }
      if (objRoot[7]) {
        objRoot[4] = 'Hidden';
      }
      objRoot[7] = null;
      out.data100[key] = objRoot;
      objRoot = null;
    }
    out.data200 = data200;
  } catch (error) {
    if (devel) {
      console.error(error);
    }
  }
  return out;
}

