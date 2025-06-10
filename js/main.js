// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${sec.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Simple form validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const email = form.querySelector('input[type="email"]');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      email.focus();
    }
  });
}

// Animate on scroll (AOS)
document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    AOS.init({ duration: 800, once: true });
  }
}); 