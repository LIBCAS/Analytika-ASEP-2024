import { get } from 'svelte/store';
import { language } from '$lib/stores/language';
import menu from "$lib/urls/menu";
/**
 * Menu
 * @param {string} key 
 * @param {string} lang 
 * @returns
 */
export function urlMenu(key, lang = '') {
  if (lang === '') {
    lang = get(language);
  }
  let text = menu[lang][key];
  return text;
}
export const m = (/** @type {string|number} */ key, /** @type {string|number} */ lang='') => { return urlMenu(key, lang) };