
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight;
    mobileMenu.style.maxHeight = isOpen ? '0' : mobileMenu.scrollHeight + 'px';
});


document.getElementById('themeToggle').addEventListener('click', function() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
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


if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
} else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
}


const toggleMoreInfo = document.getElementById('toggleMoreInfo');
const moreInfo = document.getElementById('moreInfo');

toggleMoreInfo.addEventListener('click', () => {
    moreInfo.classList.toggle('hidden');
    moreInfo.classList.toggle('block');
    toggleMoreInfo.textContent = moreInfo.classList.contains('hidden') ? 'More About Me' : 'Show Less';
});

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs"
    },
    {
        text: "Every great design begins with an even better story.",
        author: "Lorinda Mamo"
    },
    {
        text: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
        author: "Paul Rand"
    },
    {
        text: "A user interface is like a joke. If you have to explain it, it's not that good.",
        author: "Martin LeBlanc"
    }
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('motivationalQuote').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
}


document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();
    
  
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.maxHeight = '0';
        });
    });
});