document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('showing');
    });
});
window.addEventListener('resize', function() {
    const images = document.qgetElementById('mobile-img');
    images.forEach(img => {
        img.style.width = '100%';
        img.style.height = 'auto';
    });
});
window.addEventListener('resize', function() {
    const content = document.getElementById('content');
    content.style.width = window.innerWidth + 'px';
});