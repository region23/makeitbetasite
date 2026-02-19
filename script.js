// ===== THEME =====
var root = document.documentElement;
var btn = document.getElementById('themeToggle');
var icon = document.getElementById('themeIcon');
var label = document.getElementById('themeLabel');

function isDark() {
  return root.getAttribute('data-theme') === 'dark';
}

function applyTheme(dark) {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  if (icon) icon.textContent = dark ? '☀️' : '🌙';
  if (label) label.textContent = dark ? 'Светлая' : 'Тёмная';
}

// Синхронизируем кнопку с текущей темой
applyTheme(isDark());

if (btn) {
  btn.addEventListener('click', function() {
    applyTheme(!isDark());
  });
}

// Следим за изменением системной темы (если нет ручного выбора)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches);
  }
});

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
