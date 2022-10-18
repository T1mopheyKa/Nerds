const buttonActive = document.querySelector(".slider-control__button--active");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const slider = document.querySelector(".slider");
const slider1 = document.querySelector(".slider-first");
const slider2 = document.querySelector(".slider-secondary");
const slider3 = document.querySelector(".slider-third");


button1.addEventListener("click", function(evt) {
    evt.preventDefault();
    button1.classList.add("slider-control__button--active");
    button2.classList.remove("slider-control__button--active");
    button3.classList.remove("slider-control__button--active");

    slider1.classList.add("slider--active");
    slider2.classList.remove("slider--active");
    slider3.classList.remove("slider--active");

});

button2.addEventListener("click", function(evt) {
    evt.preventDefault();
    button1.classList.remove("slider-control__button--active");
    button2.classList.add("slider-control__button--active");
    button3.classList.remove("slider-control__button--active");

    slider1.classList.remove("slider--active");
    slider2.classList.add("slider--active");
    slider3.classList.remove("slider--active");

});

button3.addEventListener("click", function(evt) {
    evt.preventDefault();
    button1.classList.remove("slider-control__button--active");
    button2.classList.remove("slider-control__button--active");
    button3.classList.add("slider-control__button--active");

    slider1.classList.remove("slider--active");
    slider2.classList.remove("slider--active");
    slider3.classList.add("slider--active");

});