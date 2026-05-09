/**
 * Base class for auxilitary
 */
class BaseAuxilitary {
  /**
   * Default auxilitary
   * @param {Array<Object<string,any>>} inData 
   * @param {Object<string,string>} texts 
   * @returns Array<Object<string, string>>
   */
  auxilitaryDefault = (inData = [], texts) => {
    /** @type {Array<Object<string, string>>} */
    let out = []
    /** @type {string} */
    let rowData = '';
    if (Array.isArray(inData) && inData.length) {
      for (let i = 0; i < inData.length; i++) {
        let viewMain = false;
        rowData = ''
        if (
          typeof inData[i].SCOPUS !== "undefined" &&
          inData[i].SCOPUS
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--scopus"><a href="' + inData[i].SCOPUS + '" title="' + texts['scopus'] + '" target="_blank"><abbr title="' + texts['scopus'] + '">SCOPUS</abbr></a></div>'
          viewMain = true;
        }
        if (
          typeof inData[i].WOS !== "undefined" &&
          inData[i].WOS
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--wos"><a href="' + inData[i].WOS + '" title="' + texts['wos'] + '" target="_blank"><abbr title="' + texts['wos'] + '">WOS</abbr></a></div>'
          viewMain = true;
        }
        if (
          typeof inData[i].DOI !== "undefined" &&
          inData[i].DOI
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--doi"><a href="' + inData[i].DOI + '" title="' + texts['doi'] + '" target="_blank"><abbr title="' + texts['doi'] + '">DOI</abbr></a></div>'
          viewMain = true;
        }
        if (
          typeof inData[i].RIV !== "undefined" &&
          inData[i].RIV
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--riv"><a href="' + inData[i].RIV + '" title="' + texts['riv'] + '" target="_blank"><abbr title="' + texts['riv'] + '">' + texts['vysledek_v_riv'] + '</abbr></a></div>'
          viewMain = true;
        }
        if (
          typeof inData[i].PUBMED !== "undefined" &&
          inData[i].PUBMED
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--pubmed"><a href="' + inData[i].PUBMED + '" title="' + texts['pubmed'] + '" target="_blank"><abbr title="' + texts['pubmed'] + '">PUBMED</abbr></a></div>'
          viewMain = true;
        }
        let viewI = true
        if (
          typeof inData[i]['handle.net'] !== "undefined" &&
          inData[i]['handle.net']
        ) {
          if (inData[i]['lock'] === 'open') {
            rowData += '<div class="c-auxilitary__item c-auxilitary__item--handlenet-o"><a href="' + inData[i]['handle.net'] + '" title="' + texts['handlenet'] + '" target="_blank"><abbr title="' + texts['handlenet'] + '">ASEP - ' + texts['plny_text'] + '</abbr></a></div>'
            viewI = false
          } else if (inData[i]['lock'] == 'closed') {
            rowData += '<div class="c-auxilitary__item c-auxilitary__item--handlenet"><a href="' + inData[i]['handle.net'] + '" title="' + texts['handlenet'] + '" target="_blank"><abbr title="' + texts['handlenet'] + '">ASEP - ' + texts['plny_text'] + '</abbr></a></div>'
            viewI = false
          } else if (inData[i]['lock'] === 'none') {
            rowData += '<div class="c-auxilitary__item c-auxilitary__item--handlenet-n"><a href="' + inData[i]['handle.net'] + '" title="' + texts['handlenet'] + '" target="_blank"><abbr title="' + texts['handlenet'] + '">ASEP</abbr></a></div>'
            viewI = false
          } else {
            rowData += '<div class="c-auxilitary__item c-auxilitary__item--handlenet-n"><a href="' + inData[i]['handle.net'] + '" title="' + texts['handlenet'] + '" target="_blank"><abbr title="' + texts['handlenet'] + '">ASEP</abbr></a></div>'
            viewI = false
          }
          viewMain = true;
        }
        if (
          typeof inData[i]['ipac'] !== "undefined" &&
          inData[i]['ipac'] &&
          viewI
        ) {
          rowData += '<div class="c-auxilitary__item c-auxilitary__item--ipac"><a href="' + inData[i]['ipac'] + '" title="' + texts['ipac'] + '" target="_blank"><abbr title="' + texts['ipac'] + '">ipac</abbr></a></div>'
          viewMain = true;
        }
        out[i] = {};
        out[i]['data'] = (viewMain) ? '<div class="c-auxilitary c-auxilitary--view">' : '<div class="c-auxilitary">'
        out[i]['data'] += rowData;
        out[i]['data'] += '</div>';
        out[i]['header'] = '';
      }
    }
    return out
  }

  /**
   * Results auxilitary
   * @param {Array<Object<string,any>>} inData 
   * @param {Object<string,string>} texts 
   * @param {Object<string,string>} objLinkResult
   * @param {Object<string,boolean|string>} conf
   * @returns Array<Object<string, string>>
   */
  auxilitaryResults = (inData = [], texts, objLinkResult, conf) => {
    /** @type {Array<Object<string, string>>} */
    let out = []
    /** @type {string} */
    let rowData = '';
    let agentura = '';
    if (Array.isArray(inData) && inData.length) {
      for (let i = 0; i < inData.length; i++) {
        rowData = ''
        if (
          typeof inData[i].projekt !== "undefined" &&
          inData[i].projekt
        ) {
          out[i] = {};
          if (
            agentura !== inData[i]?.agentura) {
            agentura = inData[i]?.agentura
            out[i]['header'] = '<h3>' + agentura + '</h3>'
          } else {
            out[i]['header'] = ''
          }
          // cordis
          if (typeof objLinkResult.cordis !== 'undefined' &&
            objLinkResult.cordis &&
            inData[i].cordis
          ) {
            const urlCordis = objLinkResult.cordis.replace("---result----", inData[i].cordis);
            rowData += '<div class="c-auxilitary-results__item c-auxilitary-results__item--cordis"><a href="' + urlCordis + '" title="' + texts['repozitory_list'] + '" target="_blank"><abbr title="' + texts['cordis'] + '" >' + texts['cordis'] + '</abbr></a></div>'
          }
          // cep
          if (typeof objLinkResult.cep !== 'undefined' &&
            objLinkResult.cep &&
            inData[i].projekt &&
            !inData[i].cordis
            && !(conf?.form_projekty && conf?.form_projekty === 'projoth') // bez zahranicnich
            && !(conf?.form_projekty && conf?.form_projekty === 'projcz') // bez ostatni tuzemnske
          ) {
            let searchCep = decodeURIComponent(inData[i].projekt.toString());
            searchCep = encodeURIComponent(searchCep);
            const urlCep = objLinkResult.cep.replace("---result----", searchCep);
            rowData += '<div class="c-auxilitary-results__item c-auxilitary-results__item--cep"><a href="' + urlCep + '" title="' + texts['cep'] + '" target="_blank"><abbr title="' + texts['cep_text'] + '">' + texts['cep'] + '</abbr></a></div>'
          }
          // catalog
          if (typeof objLinkResult.catalog !== 'undefined' &&
            objLinkResult.catalog &&
            inData[i].projekt
          ) {
            const urlCatalog = objLinkResult.catalog.replace("---result----", inData[i].projekt);
            rowData += '<div class="c-auxilitary-results__item c-auxilitary-results__item--catalog"><a href="' + urlCatalog + '" title="' + texts['katalog'] + '" target="_blank"><abbr title="' + texts['katalog'] + '">' + texts['katalog'] + '</abbr></a></div>'
          }
          // project
          if (typeof objLinkResult.list !== 'undefined' &&
            objLinkResult.list &&
            inData[i].projekt
          ) {
            const urlList = objLinkResult.list.replace("---result----", inData[i].projekt);
            rowData += '<div class="c-auxilitary-results__item c-auxilitary-results__item--list"><a href="' + urlList + '" title="' + texts['repozitory_list'] + '" rel="external"><abbr title="' + texts['repozitory_list'] + '" >' + texts['repozitory_list'] + '</abbr></a></div>'
          }
        }
        out[i]['data'] = '<div class="c-auxilitary-results">'
        out[i]['data'] += rowData;
        out[i]['data'] += '</div>';
      }
    }
    return out
  }
}


export { BaseAuxilitary }
