const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : '';
    localStorage.setItem('theme', currentTheme);
});