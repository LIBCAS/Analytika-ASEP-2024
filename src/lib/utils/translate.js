import { language } from '$lib/stores/language';
import menu from '$lib/translations/menu';
import footer from '$lib/translations/footer';
import header from '$lib/translations/header';
import general from '$lib/translations/general';
import sites from '$lib/translations/sites';
import chart from '$lib/translations/chart.js';
import tabulator from '$lib/translations/tabulator.js';
import repozitory from '$lib/translations/repozitory.js';

/**
 * Make whole object
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns 
 */
function deepMerge(obj1, obj2) {
  Object.keys(obj2).forEach(key => {
    if (typeof obj1[key] !== 'undefined' &&
      typeof obj2[key] !== 'undefined' &&
      typeof obj1[key] === 'object' &&
      typeof obj2[key] === 'object'
    ) {
      deepMerge(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  });
  return obj1;
}

// translations
/** @type {Object<string, Object<string, string>>} */
let translations = menu;
translations = deepMerge(translations, footer);
translations = deepMerge(translations, header);
translations = deepMerge(translations, general);
translations = deepMerge(translations, sites);
translations = deepMerge(translations, chart);
translations = deepMerge(translations, tabulator);
translations = deepMerge(translations, repozitory);

/**
 * Translate string
 * @param {string} key
 * @param {string} lang
 * @param {string} firstLetter
 */
function translate(key, lang = '', firstLetter = '') {
  let str = '';
  if (lang === '') {
    lang = language.toString();
  }
  str = translations[lang][key] || key;
  if (firstLetter === 'u') {
    str = str[0].toUpperCase() + str.slice(1);
  }
  else if (firstLetter === 'l') {
    str = str[0].toLowerCase() + str.slice(1);
  }
  return str;
}
export const t = (/** @type {string} */ key, /** @type {string} */ lang= '', /** @type {string} */ firstLetter = '') => { return translate(key, lang, firstLetter) };






