// classes
import { Reader } from "./Menu/Reader.js";

//load research areas menu
export async function researchAreasMenu (idmenu = '', lang = 'en') {
  const out = {};
  try {
    out.vo_leftmenu = {};
    const voMenu = new Reader();
    const dataMain = await voMenu.init(idmenu, lang);
    out.vo_leftmenu = dataMain;
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}