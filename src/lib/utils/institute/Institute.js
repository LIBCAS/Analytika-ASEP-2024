class Institute {
	/** @type {Array.<Array.<string>>} */
	#arrUstavy;
	/** @type {string} */
	#idUstavDetail;

	/**
	 * @param {string} idUstavDetail
	 * @param {Array.<Array.<string>>} arrUstavy
	 */
	constructor(idUstavDetail, arrUstavy) {
		this.#idUstavDetail = idUstavDetail;
		this.#arrUstavy = arrUstavy;
	}

	/**
	 * Get name
	 * @returns {string}
	 */
	getJmenoUstavu = () => {
		let ret = '';
		const objInfo = this.getUstavInfo();
		if (typeof objInfo.nazev !== 'undefined' && objInfo.nazev) {
			ret = objInfo.nazev;
		}
		return ret;
	};

	/**
	 * Get info
	 * @returns {Object<string, string>}
	 */
	getUstavInfo = () => {
		/** @type {?Object<string, string>} */
		const ret = {};
		ret.nazev = '';
		ret.zkratka = '';
		ret.id = '';
		const arr = this.#arrUstavy;
		const idUstavDetail = this.#idUstavDetail;
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] !== 'undefined' && typeof arr[i][0] !== 'undefined') {
				if (idUstavDetail == arr[i][0]) {
					ret.id = arr[i][0] + '';
					ret.nazev = arr[i][1] + '';
					ret.zkratka = arr[i][3] + '';
				}
			}
		}
		return ret;
	};
}
export { Institute }