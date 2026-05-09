/** @type {any} */
import * as defaultJson from "$lib/../sources/default.json";
import { setShortcutsRoutes } from "$lib/utils/setShortcutsRoutes";

export function load({ params, url }) {
	/** @type {?Object<string, any>} */
	const shortcuts = setShortcutsRoutes(url.pathname);
	const out = {};

	if ((shortcuts.ustav || shortcuts.home=='cs') && shortcuts.lang=='cs') {
		out.ustavy_cs = defaultJson['ustavy_cs'] || [];
	}
	if ((shortcuts.ustav || shortcuts.home=='en') && shortcuts.lang=='en') {
		out.ustavy_en = defaultJson['ustavy_en'] || [];
	}

	if (shortcuts.lang=='en') {
		out.ustavy_oblasti_en = defaultJson.ustavy_oblasti_en || [];
	}
	if (shortcuts.lang=='cs') {
		out.ustavy_oblasti_cs = defaultJson.ustavy_oblasti_cs || [];
	}
	out.url = url.href;
	let ex = false;
	return { out, ex };
}







