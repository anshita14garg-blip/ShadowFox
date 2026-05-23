// ─────────────────────────────────────────
// MOBILE NAV TOGGLE
// ─────────────────────────────────────────

const ham = document.getElementById('ham');
const navLinks = document.getElementById('navLinks');

ham.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ─────────────────────────────────────────
// SCROLL FADE-UP + SKILL BAR ANIMATIONS
// ─────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars inside each observed element
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observe all fade-up elements
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Observe skill cards individually for bar animation
document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));


// ─────────────────────────────────────────
// ACTIVE NAV LINK HIGHLIGHT ON SCROLL
// ─────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + id) {
          a.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));


// ─────────────────────────────────────────
// NAV SHADOW ON SCROLL
// ─────────────────────────────────────────

const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navEl.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navEl.style.boxShadow = 'none';
  }
});


// ─────────────────────────────────────────
// STAGGERED CARD ANIMATION DELAY
// ─────────────────────────────────────────

// Add a small delay to each card so they animate in sequence
document.querySelectorAll('.skill-card, .project-card').forEach((card, i) => {
  card.style.transitionDelay = (i % 4) * 0.1 + 's';
});