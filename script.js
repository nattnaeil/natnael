// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fade In Effect on Scroll
const fadeElements = document.querySelectorAll('.fade-up, .fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible');
        }
    });
};

// Add visible class to fade-in elements
document.addEventListener('scroll', fadeInOnScroll);

// Parallax Effect for Portfolio Section
const parallaxEffect = () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPosition = `center ${offset * 0.5}px`;
};

window.addEventListener('scroll', parallaxEffect);

// Hover Effect for Service and Blog Items
const serviceItems = document.querySelectorAll('.service-item');
const blogItems = document.querySelectorAll('.blog-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
});

blogItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.backgroundColor = '#f0f8e2';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.backgroundColor = '#fff';
    });
});

// Initialize fade-in effect on page load
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Add visible class for fade-in animations
document.querySelectorAll('.fade-up').forEach((element) => {
    element.classList.add('fade-up-animation');
});

document.querySelectorAll('.fade-in').forEach((element) => {
    element.classList.add('fade-in-animation');
});
