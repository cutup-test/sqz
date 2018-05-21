class MobileMenu {
  constructor() {
    this.hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
    this.menuItems = document.getElementsByClassName('header__menu-items')[0];   
    this.clickEvent();
  } 

  clickEvent() { 
    console.log('click event'); 
    
    this.hamburgerMenu.addEventListener('click', this.showMenu.bind(this));
  }

  showMenu() { 
    console.log('show menu');
    this.menuItems.classList.toggle('toggle-display');
    this.hamburgerMenu.classList.toggle('change-to-cross');
  }
} 
 
export default MobileMenu;    