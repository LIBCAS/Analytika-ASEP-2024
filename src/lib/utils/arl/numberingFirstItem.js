/**
 * Get first number if data exists first and it is in configuration ARL
 * @param {?Object<string, any>} dataArl 
 * @param {?Object<string, any>} dataSend 
 * @param {Object<string,boolean|string|Array<string>>} settings 
 * @returns {number|boolean}
 */
export function numberingFirstItem(dataArl, dataSend, settings) {

    /** @type{boolean|number} */
    let out = false;

    try {
			if (dataSend && dataArl) {
				const searchString = dataSend.conf ? dataSend.conf.replace('KONFIG_STRANA_', '') : '';
				if (searchString && settings.pagination && Array.isArray(settings.pagination)) {
					const arr = settings.pagination || [];
					const result = arr.find((item) => item === searchString);
					if (result && dataArl.first) {
						out = parseInt(dataArl.first);
					}
					if (typeof out === 'number' && !Number.isNaN(out)) {
						return out;
					}
				}
			}
		} catch (error) {
			// ignore intentionally
			void error;
		}
    return out;
}

