import { writable } from 'svelte/store';
/**
 * @typedef {Object} Shortcuts
 * @property {string} ustav - Název útvaru
 * @property {string} oddeleni - Oddělení
 * @property {?string} vo - VO
 * @property {string} autor - Autor
 * @property {?string} oddeleniUrl
 */
const out = {
	ustav: '',
	oddeleni: '',
	vo: '',
	autor: '',
	oddeleniUrl: ''
};


/** @type {import('svelte/store').Writable<Shortcuts>} */
export const shortcuts = writable(out);

