let slideIndex = 1;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let indicators = document.querySelectorAll('.indicator');

// Function to show the current slide
function showSlides() {
    // Loop through all slides and hide them
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = 'rotateY(90deg)';
        slides[i].classList.remove('show');
        indicators[i].classList.remove('active');
    }
    
    // Show the current slide and make it active
    slides[slideIndex - 1].style.transform = 'rotateY(0deg)';
    slides[slideIndex - 1].classList.add('show');
    indicators[slideIndex - 1].classList.add('active');
}
// Move to the next or previous slide
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = totalSlides;
    }
    showSlides();
}

// Show a specific slide manually (using the indicator)
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Automatically change slides every 3 seconds
setInterval(() => {
    plusSlides(1);
}, 3000);
// Handle touch events for mobile swipe functionality
let touchStartX = 0;
let touchEndX = 0;
document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Swipe left
        plusSlides(1);
    }
    if (touchEndX > touchStartX) {
        // Swipe right
        plusSlides(-1);
    }
}
showSlides();
