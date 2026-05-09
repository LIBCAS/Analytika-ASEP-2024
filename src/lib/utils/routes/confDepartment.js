/**
 * Get department settings
 * @param {Object} paramsSite 
 * @param {Array<Object>} arrDepartments 
 */
export function confDepartment(paramsSite, arrDepartments) {

	/** @type {Object<string,Object<?string,string|Array<Object<string, string>>>>} */
	const out = {};
	out.oddeleni = {};
	out.oddeleni.idOddeleni = '';
	out.oddeleni.urlOddeleni = '';
	out.oddeleni.nazevOddeleni = '';
	out.oddeleni.list = [];

	/** @type{String} */
	let ustav = '';
	for (let key in arrDepartments) {
		let arrItem = arrDepartments[key];
		if (arrItem[0] + '-' + arrItem[2] == paramsSite.id) {
			out.oddeleni.idOddeleni = arrItem[0];
			out.oddeleni.urlOddeleni = arrItem[2];
			out.oddeleni.nazevOddeleni = arrItem[1];
			ustav = arrItem[4];
			out.oddeleni.idUstav = ustav;
		}
	}
	let i = 0;
	for (let key in arrDepartments) {
		let arrItem2 = arrDepartments[key];
		/** @type {?String} */
		let active = null;
		if (arrItem2[0] + '-' + arrItem2[2] == paramsSite.id) {
			active = '1';
		} else if (arrItem2[4] == ustav) {
			active = '0';
		}
		if (active === '0' || active === '1') {
			if (typeof out.oddeleni.list[i] === 'undefined') {
				out.oddeleni.list[i] = {};
			}
			out.oddeleni.list[i].idOddeleni = arrItem2[0];
			out.oddeleni.list[i].urlOddeleni = arrItem2[2];
			out.oddeleni.list[i].nazevOddeleni = arrItem2[1];
			out.oddeleni.list[i].idUstav = arrItem2[4];
			out.oddeleni.list[i].active = active;
			out.oddeleni.list[i].zruseno = (arrItem2[3]) ? 'zruseno' : '';
			i++;
		}
	}
	return out;
}