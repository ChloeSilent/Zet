"use strict";!function(){window.slider={};var c=document.querySelectorAll(".clients__item"),n=document.querySelectorAll(".slider__dot"),t=1,l=function(){c.forEach(function(e){e.style.display="none"})},i=function(){n.forEach(function(e){e.className=e.className.replace(" active","")})},o=function(e){e>c.length&&(t=1),e<1&&(t=c.length),l(),i(),c[t-1].style.display="block",n[t-1].className+=" active"};n.forEach(function(e,c){e.addEventListener("click",function(){o(t=c+1)})});o(t)}();