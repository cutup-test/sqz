class MobileMenu {
  constructor() {
    this.hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
    this.menuItems = document.getElementsByClassName('header__menu-items')[0];
    this.clickEvent();
  }

  clickEvent() {
    this.hamburgerMenu.addEventListener('click', this.showMenu.bind(this));
  }

  showMenu() {
    this.menuItems.classList.toggle('toggle-display');
    this.hamburgerMenu.classList.toggle('change-to-cross');
  }
}

export default MobileMenu;    