!function(t){var a={};function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,t){"use strict";var a=r(t(1)),i=r(t(2));function r(e){return e&&e.__esModule?e:{default:e}}new a.default,new i.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.hamburgerMenu=document.getElementsByClassName("hamburger-menu")[0],this.menuItems=document.getElementsByClassName("header__menu-items")[0],this.clickEvent()}return a(e,[{key:"clickEvent",value:function(){this.hamburgerMenu.addEventListener("click",this.showMenu.bind(this))}},{key:"showMenu",value:function(){this.menuItems.classList.toggle("toggle-display"),this.hamburgerMenu.classList.toggle("change-to-cross")}}]),e}();n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.banner=document.getElementsByClassName("banner_img")[0],this.pagination=document.getElementsByClassName("pagination"),this.clickEvent(),this.slideChange()}return a(e,[{key:"paginationArray",value:function(){return Array.from(this.pagination)}},{key:"removeRedFromPagination",value:function(){this.paginationArray().map(function(e){return e.classList.remove("pagination--red")})}},{key:"clickEvent",value:function(){var n=this;this.paginationArray().map(function(e){return e.addEventListener("click",n.changePaginationColor.bind(n))})}},{key:"changePaginationColor",value:function(e){this.removeRedFromPagination(),e.target.classList.add("pagination--red")}},{key:"slideChange",value:function(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;this.paginationArray()[n-1].classList.add("pagination--red");var t=this,a=document.getElementsByClassName("banner__img")[0],i=n;this.paginationArray().map(function(e){return e.addEventListener("click",function(){var e;e=this.getAttribute("data-slide-number"),clearInterval(r),a.src="assets/images/slide"+e+".jpg",t.slideChange(e)})});var r=setInterval(function(){6===i&&(i=1),a.src="assets/images/slide"+i+".jpg",e.removeRedFromPagination(),e.paginationArray()[i-1].classList.add("pagination--red"),i++},2e3)}}]),e}();n.default=i}]);