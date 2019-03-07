'use strict';

(function () {
  window.slider = {};

  var slides = document.querySelectorAll(".clients__item"); // 1) находим массив слайдов, те все, что имеет класс .clients__item
  var dots = document.querySelectorAll(".slider__dot"); // 2)находим массив переключателей слайда
  var slideIndex = 1;
  /*нам нужна функция, которая будет менять слайды по клику на переключатель => создаем функцию */
  var showSlides = function (n) { // функция показа слайдов
    var i; // просто объявим i здесь, что бы потом не объявлять 2 раза


    if (n > slides.length) { // проверка на дурака, вдруг у нас переданное число(оно передается через currentSlide) больше длины массива слайдов
      slideIndex = 1 // тогда пусть текущий слайд будет 1
    }
    if (n < 1) {
      slideIndex = slides.length // а если это отриц число, то пусть последний
    }

    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    // }

    slides.forEach(function (element) { // делаем каждый слайд display = "none";
      element.style.display = "none";
    });


    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }

    dots.forEach(function (dot) { // делаем каждый слайд display = "none";
    dot.className = dot.className.replace(" active", "");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


  }




  // Thumbnail image controls
  var currentSlide = function (n) { //функция, которая вызывает функцию показа слайда, где slideIndex = числу, которе ему передадут
    showSlides(slideIndex = n);
  }

  dots.forEach(function (element, index) { // берем массив переключателей
    // console.log(index);
    element.addEventListener("click", function () { // вешаем на каждый элемент массива слушатель на клик, который вызывает функцию
      currentSlide(index + 1); // вызовем функцию currentSlide, которой будет передавать индекс элемента массива переключателей + 1, тк у первого элемента индекс = 0
    });
  });

  showSlides(slideIndex); // базис утановка - функция сразу вызовется и все слайды, кроме первого будут display: none
})();
