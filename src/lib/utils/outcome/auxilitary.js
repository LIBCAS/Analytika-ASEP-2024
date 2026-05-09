import { BaseAuxilitary } from "$lib/utils/outcome/Auxilitary/BaseAuxilitary";

/**
 * Modify auxiliary data for view to html format
 * @param {Array<Object<string,any>>} inData 
 * @param {Object<string,string>} text 
 * @param {?string} ustav - id ustavu
 * @param {Object<?string,boolean|string>} conf configuration 
 */
function auxilitary(inData = [], text, ustav = '', conf = null) {
  // default object
  const baseObj = new BaseAuxilitary;
  /** @type {Object<string,string>} - Url for result format */
  const objLinkResult = {};
  if (conf && conf.resultsCep) {
    objLinkResult.cep = 'https://www.isvavai.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=---result----';
  }
  objLinkResult.catalog = 'https://asep.lib.cas.cz/i2/i2.search.cls?ictx=cav&src=cav_un_epca-3&op=nq-1&show_lim=1&fld=AUTHOR&term=&limv_GRANT=---result----&limv_PRA='+ustav+'&zf=SHORT&sort=DATE&ascii=1';
  objLinkResult.cordis = 'https://cordis.europa.eu/project/rcn/---result----_en.html';
  if (conf && conf.urlResults) {
    objLinkResult.list = conf.urlResults+'/sysno/---result----';
  }
  if (conf === null
    || (conf && conf.defualt)
  ) {
    return baseObj.auxilitaryDefault(inData, text)
  } else if (conf && conf.results) {
    return baseObj.auxilitaryResults(inData, text, objLinkResult, conf)
  } else {
    return [];
  }
}

export { auxilitary }