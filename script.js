// ===== THEME =====
const root = document.documentElement;
const btn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const label = document.getElementById('themeLabel');

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isDark() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return getSystemDark();
}

function applyTheme(dark) {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  icon.textContent = dark ? '☀️' : '🌙';
  label.textContent = dark ? 'Светлая' : 'Тёмная';
}

applyTheme(isDark());

btn.addEventListener('click', () => {
  const dark = root.getAttribute('data-theme') !== 'dark';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  applyTheme(dark);
});

// Follow system changes if no manual override
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) applyTheme(e.matches);
});

// ===== FADE-IN ON SCROLL =====
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
