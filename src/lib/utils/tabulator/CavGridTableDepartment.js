/**
 * Class to module Tabulator, tranform from ARL
 */
class CavGridTableDepartment {

    /** @type {?Array<Array<Object<string,string|number|null>>>} */
    #tabledata;
    
    /** @type {Array<Object<string, any>>} */
    #columns;

    /** @type {Array<Object<string, string|number>>} */
    #nullData;

    /** @type {Array<Object<string, null|number|string|Array<any>|Object<string,any>>>} */
    #outData;

    /** @type {String} */
    #view;

    constructor() {
        this.#outData = [];
        this.#tabledata = [];
        this.#columns = [];
        this.#nullData = [];
        this.conf = '';
        this.url = '';
        this.#view = '';
    }

    /**
     * @param {any[]} tabledata
     */
    set setTabledata(tabledata) {
        if (Array.isArray(tabledata) === true) {
            this.#tabledata = tabledata;
        }
    }

    /**
     * Setter View tabulator mode
     * @param {string} view
     * @memberof CavGridTableDepartment
     */
    set setView(view) {
        this.#view = view;
    }

    /**
     * @readonly
     * @memberof CavGridTableDepartment
     */
    get getTabledata() {
        return this.#tabledata;
    }

    /**
     * @param {Array<Object<string, string|number>>} columnsData
     */
    set setTableColumns(columnsData) {
        if (Array.isArray(columnsData) === true) {
            this.#columns = columnsData;
        }
    }
    get getTableColumns() {
        return this.#columns;
    }

    /**
     * @param {any[] | null} outData
     */
    set setTableOutData(outData) {
        if (typeof outData === 'object' && outData !== null) {
            this.#outData = outData;
        }
    }

    get getTableOutData() {
        return this.#outData;
    }

    get getNullData() {
        return this.#nullData;
    }

    getColumns = () => {
        const out = [];
        const data = this.getTableColumns;
        
        /** 
        * @type {null|Object<any,null|boolean|string|number|function>} 
        */
        let outItem = {},
        outItem2 = {};

        let i = 0; // let j = 0;
        for (let key in data) {
            let value = '';
            if (typeof data[key] === "object" && data[key] !== null) {
                value = data[key].value;
            } else {
                value = data[key];
            }
            
            outItem = {
                title: this.#getColumnTitle(value),
                field: key + '__data',
                /**
                 * Our format data
                 * @param {Object<string, any>} cell 
                 * @param {*} formatterParams 
                 * @param {*} onRendered 
                 * @returns 
                 */
                formatter: function (cell, formatterParams, onRendered) {
                    try {
                        const columnId = cell.getColumn().getField()+'__sort';
                        const rowData = cell.getRow().getData();
                        const objVal = JSON.parse(rowData[columnId]);
                        if (typeof objVal === 'object' && objVal !== null) {
													if (
														typeof objVal.link !== 'undefined' &&
														objVal.link &&
														objVal.value !== '0' &&
														objVal.value !== 0
													) {
														return (
															'<a href=' +
															objVal.link +
															' target="_blank" rel="external">' +
															objVal.value +
															'</a>'
														);
													} else if (
														typeof objVal.linkInternal !== 'undefined' &&
														objVal.linkInternal &&
														objVal.value !== '0' &&
														objVal.value !== 0
													) {
														return (
															'<a href=' +
															objVal.linkInternal +
															' rel="external"><strong>' +
															objVal.value +
															'</strong></a>'
														);
													} else {
														return '<span>' + objVal.value + '</span>';
													}
												} else {
													return objVal;
												}
                    } catch (error) {
											// ignore intentionally
											void error;
                      return cell.getValue();
                    }
                },
                accessorSort: (data, type, params) => {
                    let matches = data.description.match(/\d+/);
                    return matches ? parseInt(matches[0], 10) : 0;
                },
                minWidth: 58,
            };
            outItem.title = this.#getColumnTitle(value);

            // set type sort for type 'prehled_oddeleni'
            if (this.#view==='prehled_oddeleni' && i === 0) {
                outItem.sorter = 'alphanum'
            }

            // frozen first column
            if (i === 0) {
                outItem.frozen = true
            }
            
            // outItem.accessor = this.customAccessor;
            outItem2 = {
                title: '0'+this.#getColumnTitle(value) + '__sort',
                field: key + '__data__sort',
                visible: false
            }
            out[i] = outItem;
            i++;
            out[i] = outItem2;
            i++;
        }
        return out;
    }

    getColumnsRaw = () => {
        const out = [];
        const data = this.getTableColumns;
        let i = 0; // let j = 0;
        for (let key in data) {
            let value = '';
            if (typeof data[key] === "object" && data[key] !== null) {
                value = data[key].value;
            } else {
                value = data[key];
            }
            out[i] = this.#getColumnTitle(value);
            i++;
        }
        return out;
    }

    /**
     * Get Data
     * @returns {Array<?Object<string,string|number|null>>}
     */
    getData = (url = '', conf = '') => {
        this.url = url
        this.conf = conf
        return this.#getDataObjectView1(this.getTabledata);
    }

    /**
     * Get column title from Arl data
     * @param {?string} strId 
     * @returns String
     */
    #getColumnTitle(strId) {
        let out = strId;
        for (let key in this.getTableOutData) {
            const valKeyData = this.#outData[key];
            if (typeof valKeyData[0] !== 'undefined' && valKeyData[0] === strId) {
                out = (valKeyData[1]) ? valKeyData[1].toString() : '';
                break;
            }
        }
        return out;
    }

    /**
     * Transform data for module Tabulular
     * @param {?Array<Array<Object<string,string|number|null>>>} dataView1 
     * @returns {Array<?Object<string,string|number|null>>}
     */
    #getDataObjectView1(dataView1) {
        /** @type {Array<Object<String,number|string|null>>} */
        const out = [];
        let i = 0;
        let j = 0;
        if (dataView1) {
            for (const dataObj of dataView1) {
                j = 0;
                if (Array.isArray(dataObj) && dataObj.length) {
                    for (const dataObj2 of dataObj) {
                        /** @type {Object<String,number|string|null>} */
                        const dataObj3 = {};
                        dataObj3.sort = '';
                        dataObj3.value = '';
                        dataObj3.link = '';
                        let t001Link = '';
                        if (this.conf==='author') {
                            t001Link = this.url;
                        }
                        if (typeof dataObj2 === 'object' && dataObj2 !== null) {
                            if (typeof out[i] === 'undefined' || out[i] === null) {
                                out[i] = {};
                            }
                            let j1 = j + '__data';
                            out[i][j1] = '';
                            if (typeof dataObj2.value !== 'undefined') {
                                if (this.#view==='prehled_oddeleni') {
                                    const dataVal = (j===0) ? '' + (i+1).toString() + '. ' + dataObj2.value : dataObj2.value
                                    out[i][j1] = dataVal;
                                    dataObj3.value = dataVal
                                } else {
                                    const dataVal = dataObj2.value;
                                    out[i][j1] = dataVal;
                                    dataObj3.value = dataVal
                                }
                            }
                            dataObj3.link = dataObj2.link || null;
                            if (
                                dataObj2.t001 &&
                                !dataObj3.link && 
                                t001Link
                            ) {
                                dataObj3.linkInternal = t001Link+dataObj2.t001;
                            }
                            let j2 = j + '__data__sort';
                            out[i][j2] = JSON.stringify(dataObj3);
                            j++;
                        }
                    }
                    i++;
                }
            }
        }
        return out;
    }
}

export { CavGridTableDepartment }