import settings from '../settings.js';

/** @type {string} */
let apiversion = 'test';
if (!settings.vyvoj) {
    apiversion = 'prod';
}
/** @type {Object<string, string>} */
export default {
	'server.forms_arl': settings.api_url+'/apiarl/' + apiversion + '/v1/cust/cav/config',
	'server.formsSendStranka': settings.api_url+'/apiarl/' + apiversion + '/v1/cust/cav/page',
	'server.formsSend': settings.api_url+'/apiarl/' + apiversion + '/v1/cust/cav',
	'server.orcidAuthorRecord': 'https://orcid.org/',
	'server.wosAuthorRecord': 'https://www.webofscience.com/wos/author/record/',
	'server.scopusAuthorRecord': 'https://www.scopus.com/authid/detail.url?authorId=',
	'server.formsSendAuthor': 'https://asep.lib.cas.cz/apiarl/' + apiversion + '/v1/cust/cav/authors'
};