"use strict";!function(){window.menu={};var e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav__list"),s=document.querySelector(".nav"),o=s.offsetTop,c=function(s){s.preventDefault(),e.classList.contains("open")?(console.log("close menu!"),e.classList.remove("open"),e.classList.add("close"),t.classList.add("nav__list--show")):(console.log("show menu!"),e.classList.remove("close"),e.classList.add("open"),t.classList.remove("nav__list--show"))};e.addEventListener("touchstart",c),e.addEventListener("click",c),window.addEventListener("scroll",function(){window.pageYOffset>o?(s.classList.add("sticky"),t.classList.add("sticky-show")):(s.classList.remove("sticky"),t.classList.remove("sticky-show"))})}();