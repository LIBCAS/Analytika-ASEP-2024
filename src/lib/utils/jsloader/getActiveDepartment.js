// libraries
import { InstituteReader } from "./InstituteRouter/InstituteReader";

/**
 * Get Active Department from Menu
 * @param {?String} id 
 * @param {String} urlBase 
 * @param {?String} idmenu 
 * @param {String} lang 
 * @returns {Promise<?Object.<string, string>>}
 */
export async function getActiveDepartment(id = null, urlBase = '', idmenu = null, lang = 'en') {

  // urlBase
  void urlBase;

  /** @type {Object.<string, string>} */
  const out = {};
  out.menu = '';
  out.conf = '';
  out.url = '';
  try {
    const instituteReader = new InstituteReader();
    if (id && id.charAt(0) === '#') {
      id = id.substring(1);
    }
    id = (id) ? id.toLowerCase() : '';
    idmenu = (idmenu) ? idmenu : '';
    const dataMain = await instituteReader.init(id, idmenu, lang);
    out.menu = 'oddeleni';
    out.conf = dataMain[0];
    out.url = (lang === 'en') ? dataMain[7] : dataMain[6];
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}




