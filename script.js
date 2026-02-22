// ===== THEME =====
function getSystemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
}

// Инициализация: всегда следуем системной теме
applyTheme(getSystemPrefersDark());

// Следим за изменением системной темы в реальном времени
var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
if (mql && mql.addEventListener) {
  mql.addEventListener('change', function(e) {
    applyTheme(e.matches);
  });
} else if (mql && mql.addListener) {
  // Safari < 14
  mql.addListener(function(e) {
    applyTheme(e.matches);
  });
}

// ===== FADE-IN ON SCROLL =====
var observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });
