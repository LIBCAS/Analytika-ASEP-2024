// classes
import { InstituteReader } from "./InstituteRouter/InstituteReader";

/**
 * Call author
 * @param {?string} id 
 * @param {?string} urlBase 
 * @param {?string} idmenu 
 * @param {string} lang 
 * @param {boolean} devel 
 * @returns 
 */
export async function authorRoute(id = null, urlBase = '', idmenu = null, lang = 'en') {

  const out = {};
  out.menu = '';
  out.conf = '';
  out.url = urlBase+'';

  if (!id || !idmenu) {
		return false;
	}

  try {
    const instituteReader = new InstituteReader();
    if (id.charAt(0) === '#') {
      id = id.substring(1);
    }
    id = id.toLowerCase();
    const dataMain = await instituteReader.init(id, idmenu, lang);
    out.menu = 'autor';
    out.conf = dataMain[0];
    out.url = (lang == 'en') ? dataMain[7] : dataMain[6];

  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}