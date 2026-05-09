// classes
import { Reader } from "./Menu/Reader.js";

//service for institute menu
export async function instituteMenu(id = '', urlBase = '', idmenu = '', lang = 'en', devel = false) {
  const out = {};
  try {
    out.ustav_leftmenu = {};
    const ustavMenu = new Reader();
    const dataMain = await ustavMenu.init(idmenu, lang);
    out.ustav_leftmenu = dataMain;
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}