'use strict';

// classes
import { ConnectorClient } from '../../jsloader/Connector/ConnectorClient.js';

/**
 * Get data from ARL system
 */
class Reader {
	#connectorClient;
	constructor() {
		this.#connectorClient = new ConnectorClient();
	}

	/**
	 * Main method init
	 * @param {string} akce
	 * @param {string} site
	 * @param {string} urlBase
	 * @param {Object<string, any>} formData
	 */
	async init(akce = 'result', site = '1', urlBase = '', formData) {
		if (akce !== 'result') {
			return null;
		}
		let dataArl = {};
		try {
			// json string
			let jsonString = JSON.stringify(formData);
			let urlVals = encodeURIComponent(jsonString);
			const siteUrl = encodeURIComponent(site);
			let url = urlBase + '/' + siteUrl + '?params=' + urlVals;
			const regex = RegExp('8087');
			if (regex.test(urlBase) == true) {
				url = urlBase + '' + siteUrl + '&params=' + urlVals;
			}
			dataArl = await this.#connectorClient.fetchData(url, true);
		} catch (error) {
			// ignore intentionally
			void error;
		}
		return dataArl;
	}

	async initAuthor(site = '1', urlBase = '', formData) {
		let dataArl = {};
		try {
			const jsonString = JSON.stringify(formData);
			const urlVals = encodeURIComponent(jsonString);
			const siteUrl = encodeURIComponent(site);
			let urlUstav = formData.ustav || '';
			let urlSearch = formData.autor || '';
			let urlActive = formData.active || '';
			let url =
				urlBase +
				'/' +
				encodeURIComponent(urlUstav) +
				'?search=' +
				encodeURIComponent(urlSearch) +
				'&active=' +
				urlActive;
			const regex = RegExp('8087');
			if (regex.test(urlBase) == true) {
				url = urlBase + '' + siteUrl + '&params=' + urlVals;
			}
			dataArl = await this.#connectorClient.fetchData(url, true);
		} catch (error) {
			// ignore intentionally
			void error;
		}
		return dataArl;
	}

	async initAuthorFull(site = '1', urlBase = '', formData) {
		let dataArl = {};
		if (site !== '1') {
			return dataArl;
		}
		try {
			const urlUstav = formData.ustav || '';
			const urlSearch = formData.autor || '';
			const url =
				urlBase + '/' + encodeURIComponent(urlUstav) + '?search=' + encodeURIComponent(urlSearch);
			dataArl = await this.#connectorClient.fetchData(url, true);
		} catch (error) {
			// ignore intentionally
			void error;
		}
		return dataArl;
	}

	async initSysnoFull(site = '1', urlBase = '', formData) {
		let dataArl = {};
		if (site !== '1') {
			return dataArl;
		}
		try {
			const urlSearch = formData.sysno || '';
			const zf = formData.zf || '';
			const url =
				urlBase +
				'/1?params={"conf": "KONFIG_STRANA_SRCH", "ustav": "all", "sysno": "' +
				encodeURIComponent(urlSearch) +
				'", "zf": "' +
				encodeURIComponent(zf) +
				'"}';
			dataArl = await this.#connectorClient.fetchData(url, true);
		} catch (error) {
			// ignore intentionally
			void error;
		}
		return dataArl;
	}

	/**
	 * Main method for chart data
	 * @param {?String} urlBase
	 * @param {Object<string, any>} formData
	 * @param {String} lang
	 * @returns
	 */
	async initChart(urlBase = '', formData) {
		let dataArl = {};
		try {
			urlBase = urlBase || '';
			// json string
			let jsonString = JSON.stringify(formData);
			// encodeded json string
			let urlVals = encodeURIComponent(jsonString);
			let url = urlBase + '/' + 'graph?params=' + urlVals;
			const regex = RegExp('8087');
			if (regex.test(urlBase) == true) {
				url = urlBase + '' + '&params=' + urlVals;
			}
			dataArl = await this.#connectorClient.fetchData(url, true);
		} catch (error) {
			// ignore intentionally
			void error;
		}
		return dataArl;
	}
}
export { Reader };