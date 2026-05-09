// classes
import { Reader } from "./Menu/Reader.js";

//load department menu
export async function departmentMenu(idmenu = '', lang = 'en') {
  const out = {};
  try {
    out.oddeleni_leftmenu = {};
    const oddeleniMenu = new Reader();
    const dataMain = await oddeleniMenu.init(idmenu, lang);
    out.oddeleni_leftmenu = dataMain;
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}