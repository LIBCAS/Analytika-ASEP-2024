import { Reader } from "./Menu/Reader.js";

// Author
export async function authorMenu(idmenu = '', lang = 'en') {
  const out = {};
  try {
    out.autor_leftmenu = {};
    const autorMenu = new Reader();
    const dataMain = await autorMenu.init(idmenu, lang);
    out.autor_leftmenu = dataMain;
  } catch (error) {
		// ignore intentionally
		void error;
	}
  return out;
}
