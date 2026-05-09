import { writable } from 'svelte/store';

/** @type {object} */
let storageSearch = {};


/** @type {import('svelte/store').Writable<Record<string, string[]|string>>} */
export const searchStatisticGen = writable(storageSearch);