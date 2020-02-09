const doc = document;
const hamburgerMenu = doc.querySelector('.hamburger');
const mainNavMenu = doc.querySelector('.main-nav');
const mainNavLinks = doc.querySelectorAll('.nav-link');

hamburgerMenu.addEventListener('click', () => {
    mainNavMenu.classList.toggle('main-nav--active');
    hamburgerMenu.classList.toggle('hamburger--active');
});
