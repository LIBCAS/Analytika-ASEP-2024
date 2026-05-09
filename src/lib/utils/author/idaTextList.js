/**
 * Get Author wos, orcid, scopus
 * @param {Object<string,?string>} inData 
 * @param {Object<string,string>} text 
 * @param {Object<string,?string>} urls 
 * @returns String
 */
function idaTextList(inData, text, urls) {
  /** @type {string} */  
  let rowData = '';
  if (typeof inData  === 'object' && inData !== null) {
      rowData = ''
      if (
        typeof inData.orcid !== "undefined" && 
        inData.orcid && urls['orcid']
      ) {
          rowData+='<div class="c-autor-ida__item c-autor-ida__item--orcid"><a href="'+urls['orcid']+inData.orcid+'" title="'+text['orcid']+'" target="_blank" title="'+text['orcid']+'"><img src="'+urls['icon_orcid']+'" alt="'+text['orcid']+'" /></a></div>'
      }
      if (
        typeof inData.wos !== "undefined" && 
        inData.wos && urls['wos']
      ) {
          rowData+='<div class="c-autor-ida__item c-autor-ida__item--orcid"><a href="'+urls['wos']+inData.wos+'" title="'+text['wos']+'" target="_blank"><img src="'+urls['icon_wos']+'" alt="'+text['wos']+'" /></a></div>'
      }
      if (
        typeof inData.scopus !== "undefined" && 
        inData.scopus && urls['scopus']
      ) {
          rowData+='<div class="c-autor-ida__item c-autor-ida__item--orcid"><a href="'+urls['scopus']+inData.scopus+'" title="'+text['scopus']+'" target="_blank"><img src="'+urls['icon_scopus']+'" alt="'+text['scopus']+'" /></a></div>'
      }
  }
  return rowData
}
export { idaTextList }