// ========================================
// Navigation Toggle
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Tutoring Form Handling
// ========================================
const tutoringForm = document.getElementById('tutoringForm');

tutoringForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        level: document.getElementById('level').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);

    // Show success message
    alert('¡Gracias por tu interés! Te contactaremos pronto para coordinar tu tutoría.');

    // Reset form
    tutoringForm.reset();
});

// ========================================
// Live Course Date Management
// ========================================
function updateLiveCourseStatus() {
    const liveCourseHighlight = document.getElementById('liveCourseHighlight');

    // Example: Check if there's an upcoming live course
    // In a real application, this would fetch from a backend/CMS
    const upcomingCourses = [
        {
            title: 'Bootcamp Intensivo UX/UI',
            description: '4 semanas de inmersión completa en diseño UX/UI. Aprende desde investigación hasta prototipado avanzado con proyectos reales.',
            startDate: '2026-01-15',
            duration: '4 semanas · 3 clases/semana',
            spots: 15,
            price: 499
        }
    ];

    // Check if there are upcoming courses
    if (upcomingCourses.length > 0) {
        const course = upcomingCourses[0];
        const startDate = new Date(course.startDate);
        const today = new Date();
        const daysUntil = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

        let badgeText = 'Próximamente';
        let badgeClass = '';

        if (daysUntil < 0) {
            badgeText = 'En curso';
            badgeClass = 'live';
        } else if (daysUntil <= 7) {
            badgeText = `Inicia en ${daysUntil} días`;
            badgeClass = 'urgent';
        } else if (daysUntil <= 30) {
            badgeText = 'Inscripciones abiertas';
            badgeClass = 'open';
        }

        // Update the live course card
        const liveCard = liveCourseHighlight.querySelector('.live-course-card');
        if (liveCard) {
            const badge = liveCard.querySelector('.live-badge');
            badge.innerHTML = `<span class="badge-dot"></span>${badgeText}`;

            // Format date
            const formattedDate = startDate.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });

            liveCard.querySelector('.live-content h3').textContent = course.title;
            liveCard.querySelector('.live-description').textContent = course.description;
            liveCard.querySelector('.detail-item:nth-child(1) p').textContent = formattedDate;
            liveCard.querySelector('.detail-item:nth-child(2) p').textContent = course.duration;
            liveCard.querySelector('.detail-item:nth-child(3) p').textContent = `${course.spots} lugares disponibles`;
            liveCard.querySelector('.price-current').textContent = `$${course.price}`;
        }
    } else {
        // No upcoming courses - show a "coming soon" message
        liveCourseHighlight.innerHTML = `
            <div class="live-course-card">
                <div class="live-badge">
                    Próximamente
                </div>
                <div class="live-content">
                    <h3>Nuevas fechas próximamente</h3>
                    <p class="live-description">
                        Estamos preparando las próximas cursadas en vivo.
                        Déjanos tu email para notificarte cuando abramos inscripciones.
                    </p>
                    <div class="live-footer">
                        <a href="#contact" class="btn btn-primary">Notificarme</a>
                    </div>
                </div>
            </div>
        `;
    }
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.course-card, .service-card, .live-course-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize live course status
    updateLiveCourseStatus();
});

// ========================================
// Active Navigation Highlight
// ========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// Course Cards Dynamic Loading (Future)
// ========================================
function loadCourses() {
    // This function would fetch courses from a backend/CMS
    // For now, we have static courses in the HTML
    // Example structure:
    /*
    const courses = [
        {
            id: 1,
            title: 'Fundamentos de UX/UI Design',
            level: 'Principiante',
            duration: '8 horas',
            price: 49,
            originalPrice: 99,
            badge: 'Más popular'
        },
        // ... more courses
    ];

    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = courses.map(course => createCourseCard(course)).join('');
    */
}

// ========================================
// Utility Functions
// ========================================
function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-thumbnail">
                ${course.badge ? `<span class="course-badge">${course.badge}</span>` : ''}
            </div>
            <div class="course-content">
                <div class="course-meta">
                    <span class="course-level">${course.level}</span>
                    <span class="course-duration">${course.duration}</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-footer">
                    <div class="course-price">
                        <span class="price-current">$${course.price}</span>
                        ${course.originalPrice ? `<span class="price-original">$${course.originalPrice}</span>` : ''}
                    </div>
                    <a href="#" class="btn btn-outline">Ver más</a>
                </div>
            </div>
        </div>
    `;
}

// Log initialization
console.log('UX/UI Academy website initialized successfully!');
