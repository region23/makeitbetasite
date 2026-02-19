// ===== THEME =====
var root = document.documentElement;
var btn = document.getElementById('themeToggle');
var icon = document.getElementById('themeIcon');
// label removed

function isDark() {
  return root.getAttribute('data-theme') === 'dark';
}

function applyTheme(dark, persist) {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (persist) {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
  if (icon) icon.textContent = dark ? '☀️' : '🌙';
}

function getSystemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Инициализация:
// - если пользователь вручную выбирал тему → используем её
// - иначе → следуем системной теме (и не пишем в localStorage)
var savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  applyTheme(savedTheme === 'dark', true);
} else {
  applyTheme(getSystemPrefersDark(), false);
}

if (btn) {
  btn.addEventListener('click', function() {
    applyTheme(!isDark(), true);
  });
}

// Следим за изменением системной темы (если нет ручного выбора)
var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
if (mql && mql.addEventListener) {
  mql.addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches, false);
    }
  });
} else if (mql && mql.addListener) {
  // Safari < 14
  mql.addListener(function(e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches, false);
    }
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
