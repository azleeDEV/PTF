// Créer un tableau pour stocker l'index actuel de chaque carrousel
let currentIndex = [0, 0, 0]; // Pour 3 carrousels
const carousels = [
    document.querySelectorAll('#carousel1 .carousel-item'),
    document.querySelectorAll('#carousel2 .carousel-item'),
    document.querySelectorAll('#carousel3 .carousel-item')
];

// Fonction pour afficher la diapositive suivante dans un carrousel spécifique
function nextSlide(carouselNumber) {
    const totalSlides = carousels[carouselNumber - 1].length;
    currentIndex[carouselNumber - 1] = (currentIndex[carouselNumber - 1] + 1) % totalSlides;
    updateCarousel(carouselNumber);
}

// Fonction pour afficher la diapositive précédente dans un carrousel spécifique
function prevSlide(carouselNumber) {
    const totalSlides = carousels[carouselNumber - 1].length;
    currentIndex[carouselNumber - 1] = (currentIndex[carouselNumber - 1] - 1 + totalSlides) % totalSlides;
    updateCarousel(carouselNumber);
}

// Mise à jour du carrousel pour chaque carrousel indépendamment
function updateCarousel(carouselNumber) {
    const carousel = document.querySelector(`#carousel${carouselNumber} .carousel`);
    const offset = -currentIndex[carouselNumber - 1] * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
