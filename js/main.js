
const burgerMenuBtn = document.querySelector('#hamburger-menu');
const closeMenuBtn = document.querySelector('#close-icon');
const mainNav = document.querySelector('#main-nav');
const mobileNav = document.querySelector('#mobile-nav');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');

burgerMenuBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    mainNav.style.display = 'none';
    mainContent.style.display = 'none';
    footer.style.display = 'none';
});

closeMenuBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    mainNav.style.display = '';
    mainContent.style.display = '';
    footer.style.display = '';
});

