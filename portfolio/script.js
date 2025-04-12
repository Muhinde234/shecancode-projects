
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight;
    mobileMenu.style.maxHeight = isOpen ? '0' : '500px';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.style.maxHeight = '0';
    }
});


document.getElementById("themeToggle").addEventListener('click',() =>{
    document.documentElement.classList.toggle('dark');
});