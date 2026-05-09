import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<boolean>} */
export const urlChanged = writable(false);


