/**
 * Add string "cav_un_auth*" to author ID for ARL systems
 * "cav_un_auth*"
 * @param {?string} lname 
 * @returns string
*/
export function setIdAuthorLname(lname = '') {
	/** @type {string} */
	let out;
	const strTest = 'cav_un_auth*';
	const reg = RegExp('^' + strTest, 'g');
	if (lname && reg.test(lname)) {
		out = lname;
	} else {
		out = strTest + lname;
	}
	return out;
}