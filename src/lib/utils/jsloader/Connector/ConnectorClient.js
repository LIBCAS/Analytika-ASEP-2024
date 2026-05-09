import settings from "$lib/settings.js";
import { Connector } from "./Connector.js";
/**
 * @typedef {Object} ArlObj
 * @property {Array<{subfield: string, [key: string]: string}>} [subfields]
 * @property {string} [field]
 * @property {Object<string, string>} [key]
 */
/**
 * @typedef {Object} ArlData
 * @property {Array<ArlObj>} [data]
 * @property {string} class
 * @property {string} t001
 * @property {Array<Object<string, any>>} [records]
 */
/**
 * Connector to Arl - default gate
 */
class ConnectorClient {
  constructor(action = 'config') {
    this.connector = new Connector();
    this.action = action;
    const sessionToken = sessionStorage.getItem('arl_token_js') || null;
    if (sessionToken) {
      this.token = sessionToken;
    } else {
      this.token = this.connector.getToken();
    }
    this.count = 1;
    this.sleep = (/** @type {Number} */ ms) => new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * Get Arl data
   * @param {string} url 
   * @param {boolean} absolut 
   * @returns {Promise<ArlData|null>}
   * @throws {Error} Invalid arl token.
   */
  async fetchData(url, absolut = false) {
    let urlFetch = `${this.connector.baseUrl}/${this.connector.apiU}/${this.connector.verzeServer}/${this.connector.version}/cust/${this.connector.ictx}/${this.connector.action}/${url}`;
    if (absolut) {
      urlFetch = url;
    }
    let response = await fetch(urlFetch, {
      method: this.connector.method,
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });

    // invalid token - 401
    if (response.status === 401) {
      await this.sleep(200);
      let dataRes;

      /** @type{String} */
      let codeError = ''
      try {
        dataRes = await response.json(); // Pokusí se načíst JSON, i při 401
        codeError = dataRes.errors[0].code || '';
      } catch (error) {
        throw new Error(`Class "ConnectorClient": Arl token error: ${error}`);
      }
      // invalid token - ARL response
      if (codeError === 'ERR_AUTH007') {
        const now = new Date().getTime();
        const sessionLocker = sessionStorage.getItem('arl_token_js__locker');
        if (!sessionLocker) {
          this.connector.removeToken();
        } else {
          if (now - JSON.parse(sessionLocker).timestamp > 15000) {
            this.connector.removeToken();
            sessionStorage.removeItem('arl_token_js__locker')
          }
        }
        // Locked
        if (sessionStorage.getItem('arl_token_js__locker')) {
          throw new Error('Unable to recover token')
        }
        const sessionLockerData = { timestamp: now, data: 1 };
        sessionStorage.setItem('arl_token_js__locker', JSON.stringify(sessionLockerData));
        await this.sleep(150);
        const tokenRefreshed = await this.connector.refreshTokenServer();
        if (this.count > 2) throw new Error('Class "ConnectorClient": Arl token error, too many calls.');
        this.count++;
        if (tokenRefreshed) {
          await this.sleep(150);
          if (typeof window !== 'undefined') {
            window.location.href = settings.domena;
          } else {
            return await this.fetchData(url, absolut);
          }
        } else {
          throw new Error('Unable to recover token');
        }
      } else if (codeError === settings.errorAuthCode) {
        throw new Error(codeError);
      }
    } else if (response.ok) {
      return response.json();
    } else {
      throw new Error('Class "ConnectorClient": Arl token error.');
    }
    return null;
  }
}

export { ConnectorClient }
