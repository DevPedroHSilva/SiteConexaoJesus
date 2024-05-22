const carousel = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
    const width = items[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

setInterval('nextButton.click()', 5000);