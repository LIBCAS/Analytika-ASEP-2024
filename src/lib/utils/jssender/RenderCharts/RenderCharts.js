'use strict';
/**
 * ARL - data for charts
 */
class RenderGraphs {
  constructor() {
  }
  init(data, dataFactecs) {
    let out = [];
    let i = 0;
    for (let key in data) {
      const objOut = {};
      let item = data[key];
      let keyHeadline = item.name;
      objOut.headline = (typeof dataFactecs[keyHeadline]['headline'] !== "undefined") ? dataFactecs[keyHeadline]['headline'] : keyHeadline;
      objOut.data = [];
      const dataF = item.items;
      const dataFTrans = dataFactecs[keyHeadline]['data'];
      let j = 0;
      for (let key2 in dataF) {
        const objF = {};
        let term = dataF[key2]['term'];
        objF.key = (typeof dataFTrans[term] !== "undefined") ? dataFTrans[term] : term;
        objF.val = dataF[key2]['value'];
        objOut.data[j] = objF;
        j++
      }
      out[i] = objOut;
      i++;
    }
    return out;
  }
}

export { RenderGraphs }