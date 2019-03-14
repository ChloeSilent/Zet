'use strict';
/* jshint browser: true */
/*
  <script src="js/backend.js"></script>
  <script src="js/menu.js"></script>
  <script src="js/debounce.js"></script>
  <script src="js/form.js"></script>
  <script src="js/console.js"></script>
*/
(function () {
  window.menu = {};

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav__list");
  var navElement = document.querySelector(".nav");
  var sticky = navElement.offsetTop;

  var toggleDisplayMenu = function (e) {
    e.preventDefault();
    if (toggle.classList.contains("open")) {
      console.log("close menu!");
      toggle.classList.remove("open");
      toggle.classList.add("close");
      menu.classList.add("nav__list--show");

    } else {
      console.log("show menu!");
      toggle.classList.remove("close");
      toggle.classList.add("open");
      menu.classList.remove("nav__list--show");

    }

  };

  var stickNavtoTop = function () {
    if (window.pageYOffset > sticky) {
      navElement.classList.add("sticky");
      menu.classList.add("sticky-show");
      // console.log("navElement.scrollTop is " + navElement.scrollTop);
      // console.log("window.pageYOffset is " + window.pageYOffset);
      // console.log("sticky is " + sticky);
    } else {
      navElement.classList.remove("sticky");
      menu.classList.remove("sticky-show");
    }
  }


  toggle.addEventListener("touchstart", toggleDisplayMenu);
  toggle.addEventListener("click", toggleDisplayMenu);

  window.addEventListener("scroll", stickNavtoTop)
})();
