// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate header height
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            // Calculate position to scroll to (element position - header height)
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Animation effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            alert('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
            this.reset();
        }, 200);
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = [
    ...document.querySelectorAll('.service-card'),
    ...document.querySelectorAll('.specialty-card'),
    ...document.querySelectorAll('.doctor-card'),
    ...document.querySelectorAll('.contact-form-box'),
    ...document.querySelectorAll('.contact-info-box')
];

animateElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add specific animations to hero elements
window.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.classList.add('slideInLeft');
    }
    
    if (heroImage) {
        heroImage.classList.add('slideInRight');
    }
    
    // Add animation to about section
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === aboutImage) {
                    aboutImage.classList.add('slideInLeft');
                } else if (entry.target === aboutText) {
                    aboutText.classList.add('slideInRight');
                }
                aboutObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutObserver.observe(aboutImage);
    }
    
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutObserver.observe(aboutText);
    }
});

// Add hover effects to contact info items
const contactInfoItems = document.querySelectorAll('.contact-info-item');
contactInfoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});
