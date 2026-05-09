/**
 * Main function - menu
 * @param {string} column
 * @return {boolean}
 */
function mainMenu(column = 'ustavy') {
  const checkboxImg = document.querySelector('.l-head-menu-burger-img');
  let objActive = {}, objUstavy = {}, objOblasti = {};

  objUstavy = {
    menus: document.querySelector('.l-head-menu-list'),
    navList: document.querySelector('.l-head-menu-list-mega_box'),
    navToggle: document.querySelector('.l-head-menu-list-mobile_item'),
    checkbox: document.querySelector('#l-head-menu-list-submenu2'),
    clVis: 'js-menu-vis'
  };
  objOblasti = {
    menus: document.querySelector('.l-head-menu-list3'),
    navList: document.querySelector('.l-head-menu-list-mega_box3'),
    navToggle: document.querySelector('.l-head-menu-list-mobile_item3'),
    checkbox: document.querySelector('#l-head-menu-list-submenu3'),
    clVis: 'js-menu-vis3'
  };

  if (column === 'ustavy') {
    objActive = objUstavy;
  }
  if (column === 'oblasti') {
    objActive = objOblasti;
  }

  // valid DOM element
  if (!objActive.menus || !objActive.navList) {
    return false;
  }

  // remove no-js
  objActive.menus.classList.remove('no-js');

  // check mobile version
  let mobilniVerze = false;
  if (window.getComputedStyle(checkboxImg).display !== "none") {
    mobilniVerze = true;
  }

  const fMenu = function () {
    if (!objActive.menus.classList.contains(objActive.clVis)) {
      if (!mobilniVerze) {
        mainMenuClear(objOblasti);
        mainMenuClear(objUstavy);
      }
      objActive.navList.removeAttribute('hidden');
      objActive.navToggle.setAttribute('aria-expanded', 'true');
      objActive.menus.classList.add(objActive.clVis);
      objActive.checkbox.checked = false;
    } else {
      mainMenuClear(objActive);
    }
  };
  ['click'].forEach(evt =>
    objActive.navToggle.addEventListener(evt, fMenu, false)
  );

  if (mobilniVerze) {
    return true;
  }
  return true;
}

/**
 * Set submenu for CSS - dislplay none
 * @param {Object} objActive
 */
function mainMenuClear(objActive) {
  if (objActive.menus.classList.contains(objActive.clVis)) {
    objActive.navList.setAttribute('hidden', 'true');
    objActive.navToggle.setAttribute('aria-expanded', 'false');
    objActive.menus.classList.remove(objActive.clVis);
    objActive.checkbox.checked = true;
  }
}


export { mainMenu }


