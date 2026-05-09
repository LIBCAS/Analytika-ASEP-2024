/**
 * Send data - ARL changer
 * @param {Object<string, any>} formData 
 * @param {?String} section 
 */
export function formsTransSend(formData, section = 'ustav') {
  /** @type {Object<string, any>} */
  let outData = {};
  if (section === 'ustav') {
    for (let key in formData) {
      let keyLower = null;
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        /** @type {String} */
        keyLower = key;
      }

      /** @type {String} */
      let val = '';
      if (key ==='conf') {
        // console.log(formData[key], formData, '---- formdata - chyba ---')
        const reg = RegExp('^KONFIG_STRANA_', 'g');
        if (reg.test(formData[key])) {
          val = formData[key];
        } else {
          val = 'KONFIG_STRANA_'+formData[key];          
        }
      } else {
        val = formData[key];
      }
      if (keyLower) {
        outData[keyLower] = val;
      }
    }
  }
  return outData;
}


