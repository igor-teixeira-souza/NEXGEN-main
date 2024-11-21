// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    sideMenu.style.left = '0px';
});

closeMenuButton.addEventListener('click', () => {
    sideMenu.style.left = '-250px';
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.style.left = '-250px';
    }
});

// Carrossel
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.dataset.index);
        updateCarousel();
    });
});

// Inicializar
updateCarousel();
