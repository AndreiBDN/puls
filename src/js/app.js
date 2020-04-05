const slider = tns({
    container: '.slider__puls',
    items: 1,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false
});

document.querySelector('.slider__button_prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.slider__button_next').onclick = function () {
    slider.goTo('next');
};