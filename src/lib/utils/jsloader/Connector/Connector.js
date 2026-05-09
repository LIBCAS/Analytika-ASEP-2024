import settings from '$lib/settings.js';
/**
 * Detault connector to Arl systems
 */
class Connector {
  constructor(serverAction = 'config') {
    this.baseUrl = settings.api_url;
    this.cookieArl = settings.arl_cookies;
    this.ictx = settings.arl_ictx;
    this.apiU = settings.arl_apiu;
    this.version = settings.api_version;
    this.action = serverAction;
    this.method = 'GET';
    this.token = '';
    if (settings.vyvoj) {
      this.verzeServer = 'test';
    }
    else {
      this.verzeServer = 'prod';
    }
  }

  /**
   * RefreshToken - set new arl token
   * @returns boolean
   * @throws {Error} Invalid arl token.
   */
  async refreshToken() {
  }

  getToken = () => {
    return this.#getCookie(this.cookieArl) || '';
  }

  removeToken = () => {
    document.cookie = this.cookieArl + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  }

  async refreshTokenServer() {
    sessionStorage.removeItem(this.cookieArl);
    let urlFetch = '';
    if (this.verzeServer == 'test') {
      urlFetch = settings.token_gate_test;
    } else {
      urlFetch = settings.token_gate;
    }
    try {
      const response = await fetch(urlFetch, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error
          (`Invalid arl token. Status: ${response.status}`);
      }
      const dataArl = await response.json();
      if (!dataArl.token) {
        throw new Error
          (`Invalid arl token.`);
      }
      this.token = dataArl.token;
      let validCookies = this.#setCookie(this.cookieArl, this.token, 3);
      if (validCookies) {
        return true;
      }
    } catch (error) {
			// ignore intentionally
			void error;
		}
    return false;
  }

  /**
   * Cookies - get value
   * @param {string} name
   */
  #getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /**
   * Cookies settings
   * @param {string} name
   * @param {string} value
   * @param {number} hours
   */
  #setCookie(name, value, hours) {
    let expires = "";
    if (hours) {
      const date = new Date();
      date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    return document.cookie.includes(`${name}=${value}`);
  }
}
export { Connector }