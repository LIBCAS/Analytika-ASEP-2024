/**
 * Sort URL parameters
 * @param {Object<string, any>} formData 
 * @returns Object<string, Number|String|Array<string|number>|null>
 */
export function urlSorter(formData = {}) {
    try {
			const dataUstav = {};
			let dataSend = JSON.parse(JSON.stringify(formData));
			dataUstav.ustav = formData.ustav;
			delete dataSend.ustav;
			dataSend = { ...dataUstav, ...dataSend };
			return dataSend;
		} catch (error) {
			// ignore intentionally
			void error;
			return [];
		}
}