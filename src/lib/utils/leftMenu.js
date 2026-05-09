/** @typedef {import('$lib/utils/arl/jsdocDefinition/DefLeftMenu.js').DefLeftMenu} DefLeftMenuUtil */
/**
 * @typedef {{
 *   nazev: string;
 *   url: string;
 *   active: boolean;
 *   id: string;
 * }} MenuItem
 */
/**
 * @typedef {{
 *   nadpisy: ?Array<?string[]>;
 *   valMenu: ?Array<Object<string, string>>;
 * }} DefObjLeveMenu
 */

import settings from "$lib/settings.js";


/**
 * Constructs and returns the left menu structure based on the provided inputs.
 *
 * @param {DefObjLeveMenu} objLeveMenu
 * @param {?String} leveMenuVybrano
 * @param {String} leftMenuBaseUrl
 * @param {string} [baseUrl='']
 * @param {string} [tagMenu='']
 */
export function getLeftMenu(objLeveMenu, leveMenuVybrano, leftMenuBaseUrl = '', baseUrl = '', tagMenu = '') {
  /** @type {?Array<Array<?Object>>} */
  if (!objLeveMenu || Object.keys(objLeveMenu).length === 0) {
    return null;
  }
  /**
   * @typedef outObjDef
   * @type {object}
   * @property {?Array<Array<?Object>>} valMenu
   * @property {?Array<String>} nadpisy
   */

  /** @type {?string[]} */
  let arrVal = [];
  /** @type {?Array<Object.<number,string>>} */
  /** @type {?Object.<number,string>} */
  let arrValM = null;
  /** @type {String[]} */
  let arrNadpisy = [];
  /** @type {Array<Array<?Object>>} */
  /** @type {Array<Array<MenuItem>>} */
  let arrValMenu = [];
  /** @type {Number} */
  let i = 0;
  /** @type {String} */
  let urlItem = "";

  if (typeof objLeveMenu.nadpisy !== "undefined") {
    for (let key in objLeveMenu.nadpisy) {
      let key2 = Number(key) || 0;
      arrVal = objLeveMenu.nadpisy[key2] || null;
      if (arrVal) {
        arrNadpisy[i] = arrVal[1];
      }
      i++;
    }
  }

  /** @type {Number} */
  let j = 0;
  if (typeof objLeveMenu.valMenu !== "undefined") {
    for (let key in objLeveMenu.valMenu) {
      let keyN = Number(key);
      arrValMenu[j] = [];
      arrValM = objLeveMenu.valMenu[keyN];

      /** @type {Number} */
      let k = 0;
      for (let key in arrValM) {
        let urlMenu = arrValM[key][2];
        let urlMenuOr = urlMenu;
        const regexHide = RegExp('HIDE', 'i');
        if (
          settings.menuHideActive &&
          typeof arrValM[key]['4'] !== 'undefined' &&
          regexHide.test(arrValM[key]['4'])
        ) {
          continue;
        }
        if (tagMenu) {
          urlMenu = urlMenu.replace('#/', '');
          urlMenu = urlMenu.replace('#', '');
          urlMenu = '#' + tagMenu + '/' + urlMenu;
        }
        urlItem = baseUrl + '/' + urlMenu;
        if (arrValM[key][4] && arrValM[key][4] === 'TEXT') {
          urlItem = '';
        }
        const subObj = { nazev: '', url: '', active: false, id: '' };
        subObj.nazev = arrValM[key][1]; // +"";
        subObj.url = leftMenuBaseUrl+urlItem;
        subObj.active = false;
        subObj.id = "nav-form-leva-" + j + "-" + k;

        // default active set
        if (leveMenuVybrano === "#" + urlMenuOr || leveMenuVybrano === urlMenuOr) {
          subObj.active = true;
        }

        if (
          typeof arrValMenu[j][k] === "undefined" ||
          arrValMenu[j][k] === null
        ) {
          arrValMenu[j][k] = {
            'nazev': '',
            'url': '',
            'active': false,
            'id': ''
          };
        }
        arrValMenu[j][k] = subObj;
        k++;
      }
      j++;
    }
  }
  /** @type {DefLeftMenuUtil} */
  const out = { nadpisy: null, valMenu: null };
  out.nadpisy = arrNadpisy;
  out.valMenu = arrValMenu;
  return out;

}


