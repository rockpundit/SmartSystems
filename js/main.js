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
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

window.onload = () => {
  const splashScreen = document.getElementById('splash-screen');
  const splashLogo = document.getElementById('splash-logo');
  const headerLogo = document.getElementById('header-logo');
  const mainContent = document.querySelector('body > main');

  if (!splashScreen || !splashLogo || !headerLogo) {
    if (splashScreen) {
      splashScreen.style.display = 'none';
    }
    if (headerLogo) {
      headerLogo.style.opacity = 1;
    }
    return;
  }

  const destination = headerLogo.getBoundingClientRect();
  const start = splashLogo.getBoundingClientRect();

  splashLogo.style.top = `${start.top}px`;
  splashLogo.style.left = `${start.left}px`;
  splashLogo.style.width = `${start.width}px`;

  setTimeout(() => {
    splashLogo.style.width = `${destination.width}px`;
    splashLogo.style.top = `${destination.top}px`;
    splashLogo.style.left = `${destination.left}px`;
  }, 100);

  splashLogo.addEventListener('transitionend', () => {
    headerLogo.style.opacity = '1';
    splashScreen.style.opacity = '0';
    splashScreen.addEventListener('transitionend', () => {
      splashScreen.style.display = 'none';
    });
  }, { once: true });
}; 