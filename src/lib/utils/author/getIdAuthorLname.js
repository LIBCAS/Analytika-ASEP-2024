/**
 * Clean author ID
 * @param {string} lname 
 * @returns string
 */
export function getIdAuthorLname(lname = '') {
	return lname.replace('cav_un_auth*', '');
}