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
  var header = document.querySelector(".header");
  var sticky = header.offsetTop;

  var toggleDisplayMenu = function (e) {

    e.preventDefault();

    if (toggle.classList.contains("open")) {
      // console.log("menu is open now");
      toggle.classList.remove("open");
      toggle.classList.add("close");
      menu.classList.add("nav__list--show");

    } else {
      // console.log("menu has been closed");
      toggle.classList.add("open");
      toggle.classList.remove("close");
      menu.classList.remove("nav__list--show");
    }
  };

  var stickNavtoTop = function () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-show");
      if (window.innerWidth < 935) {
        menu.classList.add("sticky-show");
      }

      // console.log("header.scrollTop is " + header.scrollTop);
      // console.log("window.pageYOffset is " + window.pageYOffset);
      // console.log("sticky is " + sticky);
    } else {
      header.classList.remove("sticky-show");
      menu.classList.remove("sticky-show");
    }
  }

  stickNavtoTop();
  window.addEventListener("scroll", stickNavtoTop);

  toggle.addEventListener("touchstart", toggleDisplayMenu);
  toggle.addEventListener("click", toggleDisplayMenu);


  toggle.addEventListener("click", function () {
    // console.log("it has been clicked!!");
  });



})();
