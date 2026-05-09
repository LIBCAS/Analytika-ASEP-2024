'use strict';
/**
 * Form utilities
 */
class FormUtils {
  /**
   * Is chart ?
   * @param {?Object<string,any>} outData200 
   * @returns boolean
   */
  isChart = (outData200 ) => {
    try {
			for (let key in outData200) {
				const objData200 = outData200[key];
				if (
					typeof objData200[0] !== 'undefined' &&
					(objData200[0] === 'GRAF' || objData200[0] === 'graf')
				) {
					return true;
				}
			}
		} catch (error) {
			// ignore intentionally
			void error;
		}
    return false;
  }

  /**
   * Get Chart type
   * @param {?Object<string,any>} outData200 
   * @returns string
   */
  getTypeChart = (outData200 ) => {
    let out = ''
    try {
      for (let key in outData200) {
        const objData200 = outData200[key];
        if (typeof objData200[0] !== 'undefined' && (objData200[0] === 'GRAF' || objData200[0] === 'graf')) {
          out = objData200[3]['typ'] || ''
        }
      }
    } catch (error) {
			// ignore intentionally
			void error;
		}
    return out;
  }

  /**
   * IS OUT ?
   * @param {?Object<string,any>} outData200 
   * @returns boolean
   */
  isResult = (outData200) => {
    try {
      for (let key in outData200) {
        const objData200 = outData200[key];
        if (typeof objData200[0] !== 'undefined' && (objData200[0] === 'VYSLEDKY' || objData200[0] === 'vysledky')) {
          return true;
        }
      }

    } catch (error) {
			// ignore intentionally
			void error;
		}
    return false;
  }

  /**
   * Chart information
   * @param {?Object<string,any>} outData200
   * @return {Array<?Object<String,String|Object<string,String>>>}
   */
  chartDetail = (outData200) => {
    const out = [];

    /** @type {Object<string,string|Object<string,string>>} */
    let outItem = {};
    outItem.title = '';
    outItem.conf = '';

    try {
      for (let key in outData200) {
        const objData200 = outData200[key];
        if (typeof objData200[0] !== 'undefined' && (objData200[0] === 'GRAF' || objData200[0] === 'graf')) {
          outItem = {};
          outItem.title = objData200[1];
          outItem.conf = objData200[3];
          out.push(outItem);
        }
      }
    } catch (error) {
			// ignore intentionally
			void error;
		}
    return out;
  }

  /**
   * Exports
   * @param {?Object[]} outData200
   * @returns Array
   */
  export200 = (outData200) => {
    if (!outData200) {
      return [];
    }
    const out = [];
    try {
      for (let key in outData200) {
        const objData200 = outData200[key];
        if (typeof objData200[3] !== 'undefined' && typeof objData200[3] === 'object' && typeof objData200[3].tisk !== 'undefined') {
          if (Array.isArray(objData200[3].tisk) && objData200[3].tisk.length) {
            for (let key in objData200[3].tisk) {
              let tisk200Item = objData200[3]['print'][key];
              if (tisk200Item) {
                out.push(tisk200Item + '');
              }
            }
          } else if (typeof objData200[3].tisk !== 'undefined') {
            let tisk200Item = objData200[3].tisk + '';
            if (tisk200Item) {
              out.push(tisk200Item + '');
            }
          }
        }
      }
    } catch (error) {
			// ignore intentionally
			void error;
    }
    return out;
  }

  /**
   * Get template format
   * @param {*} outData200 
   * @returns {string}
   */
  getTemplate = (outData200) => {
    let out = 'normal'
    try {
      for (let key in outData200) {
        const objData200 = outData200[key];
        if (typeof objData200[0] !== 'undefined' && (objData200[0] === 'US07')) {
          out = 'US07'
        }
      }
    } catch (error) {
			// ignore intentionally
			void error;
		}
    return out;
  }
}
export { FormUtils }