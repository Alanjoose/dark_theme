//Toggle theme button and app div as element.
const themeToggleButton = document.getElementById('toggle-theme');
const appContent = document.getElementById('app');

//When window completes the load event, check if client has a saved theme.
//If there is load this theme. Else check if client (browser) supports window.matchMedia API
//and handle the theme as the preference describe.
window.addEventListener('load', () => {
    if(localStorage.getItem('theme')) {
        appContent.classList.toggle(localStorage.getItem('theme'));
    }
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        appContent.classList.toggle('dark-theme');
    }
});

//Toggle the theme and save the new in localStorage.
themeToggleButton.addEventListener('click', () => {
    appContent.classList.toggle('dark-theme');
    const currentTheme = appContent.classList.contains('dark-theme') ?
    'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);
});

//Listener to capture the favorite client theme change and updates the app theme.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if(event.matches) {
        appContent.classList.remove('light-theme');
        appContent.classList.add('dark-theme');
    }
    else {
        appContent.classList.remove('dark-theme');
        appContent.classList.add('light-theme');
    }
});