const searchToggle = document.querySelector('.header__search-open');
const searchForm = document.querySelector('.header__search');

searchToggle.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});