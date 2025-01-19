document.getElementById('lang-toggle').addEventListener('click', function (event) {
event.preventDefault();
var currentLang = this.textContent.trim();
if (currentLang === 'EN') {
    this.textContent = 'RU';
    } else {
        this.textContent = 'EN';
    }
});