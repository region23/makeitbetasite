// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Staggered animation for cards
document.querySelectorAll('.projects__grid .project-card, .philosophy__grid .philosophy__card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});
