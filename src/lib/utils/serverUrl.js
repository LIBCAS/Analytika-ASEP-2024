import servers from "$lib/urls/server";
/**
 * Get URL address from our list
 * @param {string} key 
 * @returns ?string
 */
export function urlServers(key) {
  return servers[key] || null;
}

export const s = (/** @type {string} */ key) => { return urlServers(key) };