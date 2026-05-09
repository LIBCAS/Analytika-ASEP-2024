/**
 * Sleep
 * @param {number} ms 
 * @returns 
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Scroll funkce - odskroluj na element
 * @param {string} elStr
 */
export function scrollTop(elStr = 'body') {
  if (typeof (document) !== 'undefined' && document !== null) {
    (async function () {
      await sleep(50);
      const el = document.querySelector(elStr);
      let menuH = 0;
      if (document.querySelector('.l-head-container-1')) {
        menuH = document.querySelector('.l-head-container-1').clientHeight;
      }
      if (el) {
        document.documentElement.scrollTop = parseInt(el.offsetTop) - menuH;
      }
    })();
  }
}





