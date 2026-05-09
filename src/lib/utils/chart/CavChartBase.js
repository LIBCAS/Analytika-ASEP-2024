import { ServiceColorGen } from "./ServiceColorGen.js";

/**
 * Class for transferring data from Arl to chart.js
 */
class CavChartBase {
	#debugMode;
	#data;
	#outData;
	#columns;
	osaX;
	osaY;

	constructor(dataArl, outData) {
		// in
		this.#data = dataArl.table;
		this.#outData = outData;
		this.#columns = dataArl.columns;
		this.osaX = dataArl.osaX;
		this.osaY = dataArl.osaY;

		// out
		this.labels = [];
		this.labelsId = [];
		this.datasets = [];

		// services
		this.serviceColorGen = new ServiceColorGen();

		// devel mode
		this.#debugMode = false;
	}

	/**
	 * Init - ovladani class
	 * @param {boolean} rel
	 * @return {void}
	 */
	init(rel = false) {
		for (let key in this.#outData) {
			const valKeyData = this.#outData[key];
			if (typeof valKeyData[0] !== 'undefined' && valKeyData[0] === this.osaX) {
				this.osaX = valKeyData[1];
			}
			if (typeof valKeyData[0] !== 'undefined' && valKeyData[0] === this.osaY) {
				this.osaY = valKeyData[1];
			}
		}

		const objLabels = this.#createLabels();
		this.labels = objLabels.labels;
		this.labelsId = objLabels.labelsId;
		if (rel) {
			const max = this.#maximumSlou(this.#data);
			const koef = [];
			for (let i = 0; i < max.length; i++) {
				koef[i] = max[i] / 100;
			}
			this.datasets = this.#upravDataRel(koef);
		} else {
			this.datasets = this.#upravData();
		}
	}

	/**
	 * Create labels
	 * @returns {Object[]}
	 */
	#createLabels = () => {
		// ziskat labels
		let out = {};
		out.labels = [];
		out.labelsId = [];
		let i = 0;
		for (let key in this.#columns) {
			if (i !== 0) {
				out.labels.push(this.#columns[key]);
				out.labelsId.push(this.#columns[key].split('.')[0]);
			}
			i++;
		}
		return out;
	};

	/**
	 * Chart data by this.data
	 * @returns {Object[]}
	 */
	#upravData = () => {
		let out = [];
		let outItem = {};
		try {
			const data = this.#data;
			let i = 0; // let j = 0;
			for (let key in data) {
				let value = data[key];
				let valueData = [...data[key]];
				if (Array.isArray(valueData) && valueData.length) {
					valueData = this.#getDataObjectView(valueData);
				}
				valueData.shift();
				outItem = {};
				if (value[0].value !== undefined && value[0].value !== null) {
					outItem.label = value[0].value;
				} else {
					outItem.label = value[0] || '';
				}
				outItem.stack = 'st-01';
				outItem.data = valueData;
				outItem.backgroundColor = this.serviceColorGen.getColor(i);
				out[i] = outItem;
				i++;
			}
		} catch (error) {
			if (this.#debugMode) {
				console.error(error);
			}
		}
		return out;
	};

	/**
	 * Relative chart by this.data
	 * @param {Array<Number>} koef
	 * @returns {Object[]}
	 */
	#upravDataRel = (koef) => {
		let out = [];
		let outItem = {};
		try {
			const data = this.#data;
			let i = 0; // let j = 0;
			for (let key in data) {
				let value = data[key];
				let valueData = [...data[key]];
				if (Array.isArray(valueData) && valueData.length) {
					valueData = this.#getDataObjectView(valueData);
				}
				valueData.shift();
				outItem = {};

				if (value[0].value !== undefined && value[0].value !== null) {
					outItem.label = value[0].value;
				} else {
					outItem.label = value[0] || '';
				}

				outItem.stack = 'st-01';
				for (let j = 0; j < valueData.length; j++) {
					valueData[j] = koef[j] === 0 ? 0 : (parseInt(valueData[j], 10) / koef[j]).toFixed(2);
				}
				outItem.data = valueData;
				outItem.backgroundColor = this.serviceColorGen.getColor(i);
				out[i] = outItem;
				i++;
			}
		} catch (error) {
			if (this.#debugMode) {
				console.error(error);
			}
		}
		return out;
	};

	/**
	 * Calculate max. values of a given column
	 * @param {Array<any>} data
	 * @returns {Array<Number>}
	 */
	#maximumSlou = (data) => {
		let out = [];
		for (let key in data) {
			let valueData = [...data[key]];
			if (Array.isArray(valueData) && valueData.length) {
				valueData = this.#getDataObjectView(valueData);
			}
			valueData.shift();
			for (let j = 0; j < valueData.length; j++) {
				if (out[j] === undefined) {
					out[j] = parseInt(valueData[j], 10);
				} else {
					out[j] = out[j] + parseInt(valueData[j], 10);
				}
			}
		}
		return out;
	};

	/**
	 * Get base data
	 * @param {*} dataView1
	 * @returns
	 */
	#getDataObjectView(dataView1) {
		const out = [];
		let i = 0;
		for (const dataObj of dataView1) {
			if (
				(Array.isArray(dataObj) && dataObj.length) ||
				(typeof dataObj === 'object' && dataObj !== null)
			) {
				if (typeof out[i] === 'undefined' || out[i] === null) {
					out[i] = [];
				}
				out[i] = '';
				if (typeof dataObj.value !== 'undefined') {
					out[i] = dataObj.value + '';
				}
				i++;
			}
		}
		return out;
	}
}


export { CavChartBase }
