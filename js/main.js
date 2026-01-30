// Iran Pulse - Main JavaScript

// Language toggle
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        window.location.href = 'fa/index.html';
    } else {
        window.location.href = '../index.html';
    }
}

// Update last updated time
function updateLastUpdated() {
    const el = document.getElementById('last-updated');
    if (el) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        el.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (for future use)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateLastUpdated();
});

// Auto-refresh news every 5 minutes (placeholder for future implementation)
// setInterval(() => {
//     console.log('Checking for news updates...');
// }, 5 * 60 * 1000);
