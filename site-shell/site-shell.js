(function () {
  'use strict';
  var root = document.documentElement;
  var header = document.querySelector('.mib-site-header');
  if (!header) return;

  var themeButton = header.querySelector('.mib-site-theme');
  var themeIcon = themeButton && themeButton.querySelector('span');
  var menuButton = header.querySelector('.mib-site-menu');
  var nav = header.querySelector('.mib-site-nav');
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function storedTheme() {
    try { return localStorage.getItem('theme'); } catch (error) { return null; }
  }
  function setTheme(dark, persist) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
    if (themeButton) themeButton.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
    if (persist) {
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (error) { /* без сохранения выбора */ }
    }
  }
  var saved = storedTheme();
  setTheme(saved === 'dark' || (saved !== 'light' && !!(media && media.matches)), false);
  if (themeButton) themeButton.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') !== 'dark', true);
  });
  if (media) {
    var onSystemTheme = function (event) { if (!storedTheme()) setTheme(event.matches, false); };
    if (media.addEventListener) media.addEventListener('change', onSystemTheme);
    else if (media.addListener) media.addListener(onSystemTheme);
  }

  if (!menuButton || !nav) return;
  function setMenu(open) {
    nav.classList.toggle('mib-site-nav--open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  }
  var section = location.pathname.match(/^\/(model-tests|blog|consulting)(?:\/|$)/);
  if (section) {
    var current = nav.querySelector('a[href="/' + section[1] + '/"]');
    if (current) current.setAttribute('aria-current', 'page');
  }
  header.classList.add('mib-site--enhanced');
  menuButton.addEventListener('click', function () { setMenu(menuButton.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
})();
