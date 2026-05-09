import { setLanguage } from "$lib/utils/setLanguage";
export const handle = async({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => {
			let lang = setLanguage(event.url.pathname);
			if (lang == 'cs') {
				lang = 'cs';
			} else {
				lang = 'en';
			}
			return html.replace('%lang%', lang);
  	  }
	});
    return response;
  }

