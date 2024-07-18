const darkModeToggle = document.getElementById('Mode-Gelap');
const body = document.body;

// Function to set dark mode
function setDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Dark Mode';
    }
    localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');

// Apply saved preference or default to light mode
setDarkMode(savedDarkMode === 'true');

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    setDarkMode(!body.classList.contains('dark-mode'));
});

// Apply dark mode immediately on page load if necessary
document.addEventListener('DOMContentLoaded', () => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
});