import { ConnectorClient } from "./ConnectorClient.js";
/**
 * @typedef {Object} ArlObj
 * @property {Array<{subfield: string, [key: string]: string}>} [subfields]
 * @property {string} [field]
 * @property {Object<string, string>} [key]
 */
/**
 * @typedef {Object} ArlData
 * @property {Array<ArlObj>} data
 * @property {string} class
 * @property {string} t001
 */
/**
 * Connector to Arl - default gate for Session storage data
 */
class ConnectorRe {
  #connectorClient;
  constructor(action = 'config') {
    this.#connectorClient = new ConnectorClient();
    this.action = action;
    this.storageTime = 900000;
  }
  async #fetchData(id) {
    return this.#connectorClient.fetchData(id);
  }

  /**
   * Save data to session storage
  * @param {string} id  
  * @param {Object<string, any>} data 
   */
  saveDataToSessionStorage = (id, data) => {
    const now = new Date().getTime();
    const item = {
      data: data,
      timestamp: now
    };
    sessionStorage.setItem(id, JSON.stringify(item));
  }

  async getDataFromSessionStorage(id) {
    let out = null;
    let itemStr = sessionStorage.getItem(id);
    if (itemStr) {
      let item = JSON.parse(itemStr);
      const now = new Date().getTime();
      if (now - item.timestamp > this.storageTime) {
        sessionStorage.removeItem(id)
        item = null
      } 
      if (item && item.data) {
        out = item.data;
      }
    }
    if (!out) {
      out = await this.#fetchData(id);
      this.saveDataToSessionStorage(id, out);
    }
    return out
  }
}
export { ConnectorRe }














