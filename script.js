// Image slider functionality
let currentIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.style.opacity = (i === index) ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);  // Change slide every 3 seconds
});

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill all the fields!');
    }
});
```