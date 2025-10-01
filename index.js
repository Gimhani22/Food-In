// ================= MOBILE NAV MENU =================
const navMenu = document.querySelector('.nav_links');
const menuBtn = document.getElementById('menu_btn');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= SMOOTH SCROLLING + ACTIVE LINKS =================
const links = document.querySelectorAll('.nav_items li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        navMenu.classList.remove('show');
    });
});

// Highlight active link when scrolling
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;
    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

// ================= SCROLL TO TOP BUTTON =================
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
