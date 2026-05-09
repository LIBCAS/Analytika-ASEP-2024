import { ConnectorClient } from "$lib/utils/jsloader/Connector/ConnectorClient.js";
import { Connector } from "$lib/utils/jsloader/Connector/Connector.js";
import { setIdAuthorLname } from "$lib/utils/author/setIdAuthorLname.js";

/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlconfExCsv.js').ArlconfExCsv} ArlconfExCsv */

/**
 * Export data to CSV format (utf-8)
 * @param {ArlconfExCsv} configurace 
 * @param {?Object<string, string|null>} shortcups 
 * @param {string} lang 
 * @returns 
 */
export async function csvEx(configurace, shortcups, lang = 'en') {
  let id=null;
  if (configurace.conf) {
    const reg = RegExp('^KONFIG_STRANA_', 'g');
    if (reg.test(configurace.conf)) {
      id = configurace.conf;
    } else {
      id = 'KONFIG_STRANA_' + configurace.conf
    }
  }
  if (id) {
    const connectorClient = new ConnectorClient('page');
    const connector = new Connector();
/**
 * @type {ArlconfExCsv}
 */
const confSend = {
      'ustav':configurace?.ustav?.toString() || '',
      'trideni':configurace?.trideni ||'DKI_AUP_TITLE',
      'zf':'CSV',
      'rokVydani':configurace?.rokVydani || [],
      'druhDokumentu':configurace?.druhDokumentu || [],
      'export':configurace?.export || [],
      'navaznosti':configurace?.navaznosti || '',
      'conf':configurace?.conf || '',
      'mutace':configurace?.mutace || 'cs',
      'site':configurace?.site || 1,
      'pageSize':500
    }
    if (configurace?.riv) {
      confSend['riv'] = configurace.riv ?? ''
    }
    if (configurace?.spoluprace) {
      confSend['spoluprace'] = configurace.spoluprace
    }
    if (configurace?.rokSberuDat) {
      confSend['rokSberuDat'] = configurace.rokSberuDat
    }
    if (shortcups?.oddeleni) {
      confSend['oddeleni'] = shortcups.oddeleni
    }
    if (shortcups?.autor) {
      confSend['autor'] = setIdAuthorLname(shortcups.autor);
    }
    if (lang==='en') {
      confSend['mutace'] = 'en';
    } else {
      confSend['mutace'] = 'cs';
    }
    const urlArl = `${connector.baseUrl}/${connector.apiU}/${connector.verzeServer}/${connector.version}/cust/${connector.ictx}/page/1?params=`+encodeURIComponent(JSON.stringify(confSend));
    const dataArl = await connectorClient.fetchData(urlArl, true);
    return (dataArl && dataArl.records) ? dataArl.records : ''
  }
}