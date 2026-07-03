(function () {
  function closeLangMenu() {
    const root = document.getElementById('lang-dropdown');
    const trigger = document.getElementById('lang-dropdown-trigger');
    const menu = document.getElementById('lang-dropdown-menu');

    if (root) root.classList.remove('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
  }

  function closeNavMenu() {
    const root = document.getElementById('nav-dropdown');
    const trigger = document.getElementById('nav-dropdown-trigger');
    const menu = document.getElementById('nav-dropdown-menu');

    if (root) root.classList.remove('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
  }

  function scrollToSection(target) {
    const nav = document.getElementById('site-nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function initNavMenu() {
    const root = document.getElementById('nav-dropdown');
    const trigger = document.getElementById('nav-dropdown-trigger');
    const menu = document.getElementById('nav-dropdown-menu');
    const links = document.querySelectorAll('.nav-dropdown__option');

    if (!root || !trigger || !menu) return;

    function openMenu() {
      closeLangMenu();
      root.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
    }

    function closeMenu() {
      closeNavMenu();
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.hidden) openMenu();
      else closeMenu();
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        closeMenu();
        scrollToSection(target);

        if (history.replaceState) {
          history.replaceState(null, '', href);
        } else {
          window.location.hash = href.slice(1);
        }
      });
    });

    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      if (!menu.hidden) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) {
        closeMenu();
        trigger.focus();
      }
    });
  }

  window.closeGuestNavMenu = closeNavMenu;

  document.addEventListener('DOMContentLoaded', initNavMenu);
})();
