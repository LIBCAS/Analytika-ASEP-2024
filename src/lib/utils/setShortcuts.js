/**
 * Shortcuts - institute, department
 * @param {string} urlStr
 * @returns 
 */

export function setShortcuts(urlStr) {
  const out = {};
  out.ustav = '';
  out.oddeleni = '';
  out.oddeleniUrl = '';
  out.vo = '';
  out.autor = '';

  const arrUstav = ['/en/choose-institute/', '/en/institute/', '/zvolit-ustav/', '/ustav/'];
  const arrOddeleni = ['/department-list--/', '/department/', '/oddeleni/', '/seznam-oddeleni--/'];

  const arrVo = ['/vo/region/', '/vo/oblast/'];
  const arrAutor = ['/autor/', '/author/'];

  let reg = null;

  reg = RegExp('/?cav-svelte/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj7/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-test/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj5/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj4/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj3/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj2/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?cav-vyvoj/', 'g');
  urlStr = urlStr.replace(reg, '/');
  reg = RegExp('/?asep-analytika/', 'g');
  urlStr = urlStr.replace(reg, '/');
  

  // set institute
  for (const item of arrUstav) {
    reg = RegExp(item, 'g');
    if (reg.test(urlStr)) {
      // console.log(item,"--------");
      reg = RegExp('(' + item + ')([^/]*)(.*)', 'g');
      out.ustav = urlStr.replace(reg, "$2");
      break;
    }
  }


  // set department
  for (const item of arrOddeleni) {
    reg = RegExp(item, 'g');
    if (reg.test(urlStr)) {
      reg = RegExp(item, 'g');
      if (reg.test(urlStr)) {
        reg = RegExp('(.*)(' + item + ')([^/]*)(.*)', 'g');
        out.oddeleniUrl = urlStr.replace(reg, "$3");
        const index = out.oddeleniUrl.indexOf('-');
        out.oddeleni = index !== -1 ? out.oddeleniUrl.substring(0, index) : out.oddeleniUrl;
        break;
      }
      break;
    }
  }

  // set vo
  for (const item of arrVo) {
    reg = RegExp(item, 'g');
    if (reg.test(urlStr)) {
      reg = RegExp('(' + item + ')([^/]*)(.*)', 'g');
      out.vo = urlStr.replace(reg, "$2");
      break;
    }
  }



  // set author id
  for (const item of arrAutor) {
    reg = RegExp(item, 'g');
    if (reg.test(urlStr)) {
      let id = null;
      if (typeof window !== "undefined") {
        id = window.location.hash;
        if (id) {
          reg = RegExp('(#)([^\\/]*)(.*)', 'g');
          id = id.replace(reg, "$2");
          out.autor = id;
        }
        break;
      }
      break;
    }
  }

  return out;
}




