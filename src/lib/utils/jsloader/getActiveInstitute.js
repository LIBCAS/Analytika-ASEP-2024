// classes
import { InstituteReader } from "./InstituteRouter/InstituteReader";

/**
 * Get Active Institute from Menu
 * @param {?string} id 
 * @param {?string} urlBase 
 * @param {?string} idmenu 
 * @param {string} lang 
 * @returns
 */
export async function getActiveInstitute(id = null, urlBase = '', idmenu = null, lang = 'en') {
  // urlBase
  void urlBase;

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
    out.menu = 'ustav';
    if (dataMain && dataMain[0]) {
      out.conf = dataMain[0];
    }

    out.url = (lang === 'en') ? dataMain[7] : dataMain[6];
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}


