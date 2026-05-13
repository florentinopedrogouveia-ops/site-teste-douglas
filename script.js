// Inicializar ícones Lucide
lucide.createIcons();

// Inicializar Animações AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Controle da Navbar ao rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'bg-primary/90', 'backdrop-blur-lg', 'py-4', 'border-b', 'border-white/10');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('scrolled', 'bg-primary/90', 'backdrop-blur-lg', 'py-4', 'border-b', 'border-white/10');
        navbar.classList.add('py-6');
    }
});

// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

