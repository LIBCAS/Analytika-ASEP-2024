import menu from "$lib/urls/menu.js";

/**
 * Section
 * @param {string} urlStr
 * @returns 
 */
export function setSection(urlStr) {
  const ustavStr = menu.cs['menu.zvolitUstav'] + '|' + menu.en['menu.zvolitUstav'];
  const regexUstav = RegExp(ustavStr, 'g');
  const oddeleniStr = menu.cs['oddeleni.seznam'] + '|' + menu.en['oddeleni.seznam'];
  const regexOddeleni = RegExp(oddeleniStr, 'g');
  const oddeleniStrDetail = menu.cs['oddeleni.detail'] + '|' + menu.en['oddeleni.detail'];
  const regexOddeleniDetail = RegExp(oddeleniStrDetail, 'g');
  const autorStr = menu.cs['autor'] + '|' + menu.en['autor'];
  const regexAutor = RegExp(autorStr, 'g');
  const voStr = menu.cs['vedni_oblast.1'] + '|' + menu.en['vedni_oblast.1'];
  const regexVo = RegExp(voStr, 'g');
  if (urlStr === '/' || urlStr === '') {
    return 'home';
  } else if (regexAutor.test(urlStr)) {
    return 'autor';
  } else if (regexOddeleni.test(urlStr)) {
    return 'oddeleni';
  } else if (regexOddeleniDetail.test(urlStr)) {
    return 'oddeleni';
  } else if (regexUstav.test(urlStr)) {
    return 'ustav';
  } else if (regexVo.test(urlStr)) {
    return 'vo';
  }
  return 'site';
}
