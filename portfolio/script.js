
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight;
    mobileMenu.style.maxHeight = isOpen ? '0' : '500px';
});


document.getElementById('themeToggle').addEventListener('click', function() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    
    html.classList.toggle('dark');
    
  
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
   
    updateThemeIcon(!isDark);
});


function updateThemeIcon(isDark) {
    const sunIcon = document.querySelector('.ri-sun-line');
    const moonIcon = document.querySelector('.ri-moon-line');
    
    if (isDark) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}
