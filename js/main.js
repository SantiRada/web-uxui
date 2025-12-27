// ========================================
// Navigation Toggle (Mobile)
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Form Handling
// ========================================

// Tutoring Form
const tutoringForm = document.getElementById('tutoringForm');
if (tutoringForm) {
    tutoringForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            level: document.getElementById('level')?.value,
            package: document.getElementById('package')?.value,
            message: document.getElementById('message').value
        };

        console.log('Tutoring form submitted:', formData);

        // Show success message
        alert('¡Gracias por tu interés! Te contactaremos pronto para coordinar tu tutoría.');

        // Reset form
        tutoringForm.reset();
    });
}

// Live Courses Form
const liveCoursesForm = document.getElementById('liveCoursesForm');
if (liveCoursesForm) {
    liveCoursesForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone')?.value,
            experience: document.getElementById('experience').value,
            goals: document.getElementById('goals').value
        };

        console.log('Live courses form submitted:', formData);

        // Show success message
        alert('¡Genial! Tu cupo está reservado. Te enviaremos todos los detalles por email en las próximas 24 horas.');

        // Reset form
        liveCoursesForm.reset();
    });
}

// Business Form
const businessForm = document.getElementById('businessForm');
if (businessForm) {
    businessForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            company: document.getElementById('company').value,
            name: document.getElementById('name').value,
            position: document.getElementById('position').value,
            email: document.getElementById('email').value,
            teamSize: document.getElementById('teamSize').value,
            area: document.getElementById('area').value,
            challenges: document.getElementById('challenges').value,
            timeline: document.getElementById('timeline').value
        };

        console.log('Business form submitted:', formData);

        // Show success message
        alert('¡Gracias por tu interés! Un miembro de nuestro equipo se pondrá en contacto contigo en menos de 24 horas hábiles.');

        // Reset form
        businessForm.reset();
    });
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.course-card, .preview-card, .about-highlight');

    animatedElements.forEach((el, index) => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

        // Observe for intersection
        observer.observe(el);
    });
});

// ========================================
// Active Page Highlight in Navigation
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.style.background = 'var(--primary-color)';
            link.style.color = 'var(--black)';
        }
    });
});

// ========================================
// Utility Functions
// ========================================

// Log initialization
console.log('UX/UI Academy website initialized successfully!');
console.log('Current page:', window.location.pathname);
