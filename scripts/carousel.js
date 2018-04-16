const elem = document.querySelector('.carousel');
const aRight = document.querySelector('.ar');
const aLeft = document.querySelector('.al');

const options = {
    indicators: true,
    fullWidth: true,
    dist: 0,
    duration: 300
}

const carousel = M.Carousel.init(elem, options);
let intervalInit = null;

aRight.addEventListener('click', () => {
    clearInterval(intervalInit);
    carousel.next();
    setTimeout(setCarouselInterval, 0);
});

aLeft.addEventListener('click', () => {
    clearInterval(intervalInit);
    carousel.prev();
    setTimeout(setCarouselInterval, 0);
});

const setCarouselInterval = () => {
    intervalInit = setInterval(() => carousel.next(), 5000);
};

setCarouselInterval();