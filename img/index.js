// ================= MOBILE NAV MENU =================
const navMenu = document.querySelector('.nav_links');
const menuBtn = document.getElementById('menu_btn');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// ================= SCROLL EFFECT =================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= SMOOTH SCROLLING =================
document.querySelectorAll('.nav_items li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});
