/**
 * Language
 * @param {string} urlPath 
 * @returns 
 */
export function setLanguage(urlPath) {
  let lang;
  const regexEn = RegExp('/en/','g');
  if (urlPath === '/' || urlPath === '') {
    lang = 'cs';
  } else if (regexEn.test(urlPath)) {
    lang = 'en';
  } else {
    lang = 'cs';
  }
  return lang;
}