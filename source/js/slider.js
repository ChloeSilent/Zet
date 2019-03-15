'use strict';

(function () {
  window.slider = {};

  var clientsSlides = document.querySelectorAll(".clients__item"); // 1) находим массив слайдов, те все, что имеет класс .clients__item
  var clientsDots = document.querySelectorAll(".dot--client"); // 2)находим массив переключателей слайда

  var pricesSlides = document.querySelectorAll(".prices__item"); // 1) находим массив слайдов, те все, что имеет класс .clients__item
  var pricesDots = document.querySelectorAll(".dot--price");
  var slideIndex = 1;


  /*нам нужна функция, которая будет менять слайды по клику на переключатель => создаем функцию */

  var hideSlides = function (arraySlides) {
    arraySlides.forEach(function (slide) { // делаем каждый слайд display = "none";
      slide.style.display = "none";
    });
  }

  var deactiveControls = function (arrayDots) {
    arrayDots.forEach(function (dot) { // заменяем класс каждой точки на стиль ненажатой точки;
      dot.className = dot.className.replace(" active", "");
    });
  }

  var showSlides = function (n, arraySlides, arrayDots) { // функция показа слайдов

    if (n > arraySlides.length) { // проверка на дурака, вдруг у нас переданное число(оно передается через currentSlide) больше длины массива слайдов
      slideIndex = 1 // тогда пусть текущий слайд будет 1
    }
    if (n < 1) {
      slideIndex = arraySlides.length // а если это отриц число, то пусть последний
    }

    hideSlides(arraySlides);
    deactiveControls(arrayDots);

    arraySlides[slideIndex - 1].style.display = "block"; // выбранный слайд показать
    arrayDots[slideIndex - 1].className += " active"; // закрасить нужный кружок


  }

  // Thumbnail image controls
  var currentSlide = function (n, arraySlides, arrayDots) { //функция, которая вызывает функцию показа слайда, где slideIndex = числу, которе ему передадут
    showSlides(slideIndex = n, arraySlides, arrayDots);
  }

  var clickOnDot = function (arraySlides, arrayDots) {

    arrayDots.forEach(function (dot, index) { // берем массив переключателей
      // console.log(index);
      dot.addEventListener("click", function () { // вешаем на каждый элемент массива слушатель на клик, который вызывает функцию
        currentSlide(index + 1,arraySlides, arrayDots); // вызовем функцию currentSlide, которой будет передавать индекс элемента массива переключателей + 1, тк у первого элемента индекс = 0
      });
    });

  }



  /* автоматический слайдер*/
  var showSlidesOnTimer = function (arraySlides, arrayDots) {
    var i;

    hideSlides(arraySlides);
    slideIndex++;
    if (slideIndex > arraySlides.length) {
      slideIndex = 1
    }

    deactiveControls();
    arraySlides[slideIndex - 1].style.display = "block";
    arrayDots[slideIndex - 1].className += " active";

    setTimeout(showSlidesOnTimer, 4000); // Change image every 2 seconds
  }

  /* вызовы функций */
  showSlides(slideIndex, clientsSlides, clientsDots); // базис утановка - функция сразу вызовется и все слайды, кроме первого будут display: none
  clickOnDot(clientsSlides, clientsDots);
  // showSlidesOnTimer();

  // if (window.innerWidth <= 540) {
  // showSlides(slideIndex, pricesSlides, pricesDots); // базис утановка - функция сразу вызовется и все слайды, кроме первого будут display: none
  // clickOnDot(pricesSlides, pricesDots);
  // }
})();
