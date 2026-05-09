/**
 * Close menu
 * @param {bool} urlChanged
 * @param {string} column
 * @return {boolean} True if the menu was successfully closed, false otherwise.
 */
function mainMenuClose(urlChanged, column='ustavy') {
  if (!document) {
    return false;
  }
  const checkboxImg = document.querySelector('.l-head-menu-burger-img');
  const checkboxImgCl = document.querySelector('.l-head-menu-burger-close');
  const checkboxMain = document.querySelector('.l-head-menu-burger-input');
  if (!checkboxImg || !checkboxImgCl) {
    return false;
  }

  // checkbox
  let mobilniVerze = false;
  if (window.getComputedStyle(checkboxImg).display !== "none") {
    mobilniVerze = true;
  }

  if (mobilniVerze) {
    checkboxMain.checked = false;
    checkboxImgCl.click();
    return true;
  }

  let menus = null;
  let navList = null;
  let navToggle = null;
  let checkbox = null;

  if (column==='ustavy') {
    menus = document.querySelector('.l-head-menu-list');
    navList = document.querySelector('.l-head-menu-list-mega_box');
    navToggle = document.querySelector('.l-head-menu-list-mobile_item');
    checkbox = document.querySelector('#l-head-menu-list-submenu2');
  }
  if (column==='oblasti') {
    menus = document.querySelector('.l-head-menu-list3');
    navList = document.querySelector('.l-head-menu-list-mega_box3');
    navToggle = document.querySelector('.l-head-menu-list-mobile_item3');
    checkbox = document.querySelector('#l-head-menu-list-submenu3');
  }
  if (!menus || !navList || !navToggle || !checkbox) {
    return false;
  }
  if (urlChanged) {
    if (checkbox.checked) {
      checkbox.checked = false;
      navList.setAttribute('hidden', 'true');
      navToggle.setAttribute('aria-expanded', 'false');
      menus.classList.remove('js-menu-vis');
      menus.classList.remove('js-menu-vis3');
    }
  }
}

export { mainMenuClose }









