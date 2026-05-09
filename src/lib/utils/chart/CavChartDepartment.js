import { ServiceColorGen } from "./ServiceColorGen.js";

/**
 * Base Class for chart data - type "prehled_oddeleni"
 */
class CavChartDepartment {
    /** @type {?Array<Array<Object<string, any>>>} */
    #data

    /** @type {Array<String>} */
    #columns

    /** @type {?String} */
    osaX = ''

    /** @type {?String} */
    osaY = ''

    /** @type {Array<String>} */
    labels;

    /** @type {Array<String>} */
    labelsId;

    /** @type {Array<?Object>} */
    datasets

    /** @type {String} */
    #textXaxis

    /** @type {String} */
    #textYaxis

    /**
     * Chart Controuctor
     * @param {Object<string,Object<String,String>> | Object<String,Array<String>> | Object<String,Array<Array<Object>>>} dataArl
     * @param {Object<string,Object>} outData
     * @param {String} textXaxis
     * @param {String} textYaxis
     */
    constructor(dataArl, outData, textXaxis = '', textYaxis = '') {
        this.#data = dataArl.table;
        this.#columns = dataArl.columns;
        this.#textXaxis = textXaxis
        this.#textYaxis = textYaxis
        this.osaX = dataArl.osaX;
        this.osaY = dataArl.osaY;

        // outs
        this.labels = [];
        this.labelsId = [];
        this.datasets = [];

        // services
        this.serviceColorGen = new ServiceColorGen;
    }

    /**
     * Init - main class method
     * @param {boolean} rel 
     * @return {void}
     */
    init(rel = false) {

        // names of axes
        this.osaY = this.#textYaxis
        this.osaX = this.#textXaxis

        /** @type {Object<string,Object<String,Array<String>>>} */
        const objLabels = this.#createLabels();

        // set Labels
        this.labels = objLabels.labels;
        this.labelsId = objLabels.labelsId;

        // get relative/absolute values (%)
        if (rel) {

            /** @type {Array<?Number>} */
            const max = this.#maximumSlou(this.#data);

            const koef = [];

            if (max.length > 0) {
                for (let i = 0; i < max.length; i++) {
                    if (typeof max[i] !== 'undefined' && max[i] !== null) {
                        koef[i] = Number(max[i]) / 100;
                    }
                }
            }
            this.datasets = this.#upravDataRel(koef);
        } else {
            this.datasets = this.#upravData();
        }
    }

    /**
     * Create labels
     * @returns {Object<string,Array<?String>>}
     */
    #createLabels = () => {

        /** @type {Object<string,Array<?String>>} */
        let out = {};

        out.labels = [];
        out.labelsId = [];

        let i = 0;

        if (Array.isArray(this.#data) && this.#data.length) {
            for (let key in this.#data) {
                let arrVal = this.#data[key];
                i++;
                if (Array.isArray(arrVal) && arrVal.length) {
                    if (typeof arrVal === 'object' &&
                        arrVal !== null &&
                        typeof arrVal[0] === 'object' &&
                        arrVal[0] !== null &&
                        typeof arrVal[0]['value'] !== 'undefined'
                    ) {
                        out.labels.push(arrVal[0]['value']);
                        out.labelsId.push(i + '');
                    }
                }
            }
        }

        return out;
    }

    /**
     * Base modify values from arl
     * @returns {Array<?Object>}
     */
    #upravData = () => {
        const out = [];
        const data = this.#data;

        try {
            /** @type {Array<?string>} */
            const arrOddel = [];
            for (let key in data) {
                const keyN = Number(key)
                const value = data[keyN]
                arrOddel[keyN] = value[0]['value'].toString()
            }

            /** @type {Array<?string>} */
            const arrColumns = [];

            for (let key in this.#columns) {
                const keyN = Number(key) - 1;
                if (keyN >= 0) {
                    arrColumns[keyN] = this.#columns[key].toString();
                }
            }

            let i = 0;
            for (let key in arrColumns) {
                const keyNColumn = Number(key) + 1;
                const keyNColumnReal = Number(key);
                const objItem = {}
                objItem.label = arrColumns[keyNColumnReal];
                objItem.stack = 'st-01';
                objItem.backgroundColor = this.serviceColorGen.getColor(i);
                const arrDataItem = [];
                let j = 0;
                for (let key2 in data) {
                    const keyNData = Number(key2);
                    arrDataItem[j] = data[keyNData][keyNColumn]['value'].toString();
                    j++;
                }
                objItem.data = arrDataItem;
                if (typeof out[i] === 'undefined') {
                    out[i] = objItem;
                }
                i++;
            }
        } catch (err) {
					// ignore intentionally
					void err;
        }
        return out;

    }

    /**
     * Get main chart data
     * @param {?Array<number>} koef
     * @returns {Object[]}
     */
    #upravDataRel = (koef = null) => {
        const out = [];
        const data = this.#data;

        try {

            /** @type {Array<?string>} */
            const arrOddel = [];

            for (let key in data) {
                const keyN = Number(key)
                const value = data[keyN]
                arrOddel[keyN] = value[0]['value'].toString()
            }

            /** @type {Array<?string>} */
            const arrColumns = [];

            for (let key in this.#columns) {
                const keyN = Number(key) - 1;
                if (keyN >= 0) {
                    arrColumns[keyN] = this.#columns[key].toString();
                }
            }

            let i = 0;
            for (let key in arrColumns) {
                const keyNColumn = Number(key) + 1;
                const keyNColumnReal = Number(key);
                const objItem = {}
                objItem.label = arrColumns[keyNColumnReal];
                objItem.stack = 'st-01';
                objItem.backgroundColor = this.serviceColorGen.getColor(i);
                const arrDataItem = [];
                let j = 0;
                for (let key2 in data) {
									const keyNData = Number(key2);
									if (koef) {
										arrDataItem[j] =
											koef[j] === 0
												? '0'
												: (parseInt(data[keyNData][keyNColumn]['value'], 10) / koef[j]).toFixed(2);
									} else {
										arrDataItem[j] = data[keyNData][keyNColumn]['value'].toString();
									}
									j++;
								}
                objItem.data = arrDataItem;
                if (typeof out[i] === 'undefined') {
                    out[i] = objItem;
                }
                i++;
            }
        } catch (err) {
					// ignore intentionally
					void err;
        }
        return out;
    }

    /**
     * Calculate max values for relative chart
     * @param {?Array<Array<Object<string, string|number>>>} data 
     * @returns {Array<?Number>}
     */
    #maximumSlou = (data) => {

        /** @type {Array<?Number>} */
        const out = [];

        if (Array.isArray(data)) {
            let j = 0;
            for (let key in data) {
                if (out[j] === undefined) {
                    out[j] = 0;
                }
                if (Array.isArray(data[key])) {

                    /** @type {Array<Object<string, string|number>>} */
                    let valueData = [...data[key]];

                    if (Array.isArray(valueData) && valueData.length) {
                        valueData.shift();
                        const valueDataNumber = this.#getDataNumber(valueData);
                        if (Array.isArray(valueDataNumber)) {
                            for (let i = 0; i < valueDataNumber.length; i++) {
                                out[j] = Number(out[j]) + Number(valueDataNumber[i]);
                            }
                        }
                    }
                }
                j++;
            }
        }
        return out;
    }


    /**
     * Help method, get data values from Arl format
     * @param {Array<Object<string, string|number>>} dataView 
     * @returns {Array<?Number>}
     */
    #getDataNumber(dataView) {

        /** @type {Array<?number>} */
        const out = [];

        /** type{@Numeber} */
        let i = 0;

        for (const dataObj of dataView) {
            if (typeof out[i] === 'undefined' || out[i] === null) {
                out[i] = 0;
            }
            if (typeof dataObj.value !== 'undefined') {
                out[i] = Number(dataObj.value);
                i++;
            }
        }
        return out;
    }
}

export { CavChartDepartment }