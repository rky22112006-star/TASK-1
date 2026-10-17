// Mobile Responsive Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-xmark');
});

// Contact Form Submit Handler
function handleForm(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    e.target.reset();
}
