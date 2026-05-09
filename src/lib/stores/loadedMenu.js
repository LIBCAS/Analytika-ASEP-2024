import { writable } from 'svelte/store';

/** @type {Object} */
const loadedMenuDef = {
	ustavy: false,
	oddeleni: false,
	autori: false,
	autor: false,
	vo: false,
	tymy: false
};


/** @type {import('svelte/store').Writable<any>} */
export const loadedMenu = writable(loadedMenuDef);

