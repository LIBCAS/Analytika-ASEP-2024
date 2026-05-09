import { writable } from 'svelte/store';
/** @type {import('svelte/store').Writable<Object<string, string|boolean>>} */
export const selectedMaster = writable({});
