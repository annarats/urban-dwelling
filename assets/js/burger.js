const burgerToggle = document.querySelector('.burger-menu__toggle');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');

burgerToggle.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('active');
    burgerToggle.classList.toggle('active');
    event.stopPropagation();
});

body.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !burgerToggle.contains(event.target)) {
        burgerMenu.classList.remove('active');
        burgerToggle.classList.remove('active');
    }
});