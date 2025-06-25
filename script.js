// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Contact form fake submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
  contactForm.reset();
});

// --- Hero Section Cursor Animation ---
const heroSection = document.getElementById('hero');
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let ripples = [];

// Static cursor ripple logic
let lastCursor = { x: null, y: null };
let staticTimer = null;
let staticInterval = null;

function resizeCanvas() {
  canvas.width = heroSection.offsetWidth;
  canvas.height = heroSection.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function addRipple(x, y) {
  ripples.push({ x, y, radius: 0, alpha: 0.5 });
}

function startStaticRipples() {
  if (staticInterval) return;
  staticInterval = setInterval(() => {
    if (lastCursor.x !== null && lastCursor.y !== null) {
      addRipple(lastCursor.x, lastCursor.y);
    }
  }, 500);
}
function stopStaticRipples() {
  if (staticInterval) {
    clearInterval(staticInterval);
    staticInterval = null;
  }
}

function animateRipples() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ripples.forEach((ripple, i) => {
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = `rgba(162,89,255,${ripple.alpha})`;
    ctx.lineWidth = 3;
    ctx.stroke();
    ripple.radius += 2.5;
    ripple.alpha *= 0.96;
    if (ripple.alpha < 0.05) ripples.splice(i, 1);
  });
  requestAnimationFrame(animateRipples);
}
animateRipples();

function handleCursorMove(x, y) {
  addRipple(x, y);
  lastCursor.x = x;
  lastCursor.y = y;
  stopStaticRipples();
  if (staticTimer) clearTimeout(staticTimer);
  staticTimer = setTimeout(() => {
    startStaticRipples();
  }, 1000);
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  handleCursorMove(x, y);
});

// Only show animation when mouse is over hero section
heroSection.addEventListener('mouseenter', () => {
  canvas.style.opacity = 1;
});
heroSection.addEventListener('mouseleave', () => {
  canvas.style.opacity = 0;
  stopStaticRipples();
  if (staticTimer) clearTimeout(staticTimer);
  lastCursor.x = null;
  lastCursor.y = null;
});
canvas.style.transition = 'opacity 0.4s';
canvas.style.opacity = 0;

// Forward mousemove from heroSection to canvas
heroSection.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  handleCursorMove(x, y);
});

// --- Typing Effect for Hero Subtitle ---
const typedText = document.getElementById('typed-text');
const roles = [
  'Next-Gen Web Developer',
  'UI/UX Enthusiast',
  'Tech Explorer',
  'Creative Coder',
  'Open Source Contributor'
];
let roleIndex = 0, charIndex = 0, typing = true;

function typeRole() {
  if (!typedText) return;
  const current = roles[roleIndex];
  if (typing) {
    typedText.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      typing = false;
      setTimeout(typeRole, 1200);
    } else {
      setTimeout(typeRole, 80);
    }
  } else {
    typedText.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
    } else {
      setTimeout(typeRole, 40);
    }
  }
}
typeRole();

// --- Scroll Down Arrow ---
const scrollArrow = document.querySelector('.scroll-down-arrow');
if (scrollArrow) {
  scrollArrow.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
}

// --- Scroll Reveal Animations ---
function revealOnScroll() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach((el, i) => {
    observer.observe(el);
    // Stagger child elements
    if (el.parentElement && (el.classList.contains('slide-up') || el.classList.contains('scale-in'))) {
      el.style.transitionDelay = (i % 5) * 0.08 + 's';
    }
  });
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Enable smooth scroll for the whole site
if ('scrollBehavior' in document.documentElement.style) {
  document.documentElement.style.scrollBehavior = 'smooth';
} 