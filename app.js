document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.item');
    const videos = document.querySelectorAll('.carousel-video');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    let currentIndex = 0;

    // Initialize first slide
    function initializeCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            videos[index].pause();
            videos[index].currentTime = 0;
        });

        slides[currentIndex].classList.add('active');
        videos[currentIndex].play();

        videos[currentIndex].onended = () => {
            goToNextSlide();
        };
    }

    // Move to the next slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        initializeCarousel();
    }

    // Move to the previous slide
    function goToPreviousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        initializeCarousel();
    }

    // Event listeners for navigation
    nextButton.addEventListener('click', goToNextSlide);
    prevButton.addEventListener('click', goToPreviousSlide);

    // Start the carousel
    initializeCarousel();
});
