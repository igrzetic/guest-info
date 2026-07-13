(function () {
  function closeLangMenus() {
    document.querySelectorAll('.lang-dropdown').forEach((root) => {
      const trigger = root.querySelector('.lang-dropdown__trigger');
      const menu = root.querySelector('.lang-dropdown__menu');

      root.classList.remove('is-open', 'is-menu-past-hero');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');

      if (window.closeDropdownMenu && menu) {
        window.closeDropdownMenu(menu);
      } else if (menu) {
        menu.hidden = true;
      }
    });
  }

  function closeNavMenu() {
    const root = document.getElementById('nav-dropdown');
    const trigger = document.getElementById('nav-dropdown-trigger');
    const menu = document.getElementById('nav-dropdown-menu');

    if (!menu || menu.hidden) return Promise.resolve();

    if (root) root.classList.remove('is-open', 'is-menu-past-hero');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');

    if (window.closeDropdownMenu) {
      return window.closeDropdownMenu(menu, {
        itemSelector: '.nav-dropdown__option',
        origin: 'top right',
      });
    }

    menu.hidden = true;
    return Promise.resolve();
  }

  function scrollToSection(target) {
    const header = document.getElementById('site-header');
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function initNavMenu() {
    const root = document.getElementById('nav-dropdown');
    const trigger = document.getElementById('nav-dropdown-trigger');
    const menu = document.getElementById('nav-dropdown-menu');
    const links = document.querySelectorAll('.nav-dropdown__option');

    if (!root || !trigger || !menu) return;

    function openMenu() {
      closeLangMenus();
      root.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');

      const open = window.openDropdownMenu
        ? window.openDropdownMenu(menu, {
            itemSelector: '.nav-dropdown__option',
            origin: 'top right',
          })
        : Promise.resolve().then(() => {
            menu.hidden = false;
          });

      open.then(() => {
        if (window.updateOpenMenusPastHero) window.updateOpenMenusPastHero();
      });
    }

    function closeMenu() {
      closeNavMenu().then(() => {
        if (window.updateOpenMenusPastHero) window.updateOpenMenusPastHero();
      });
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = window.isDropdownMenuVisible
        ? window.isDropdownMenuVisible(menu)
        : !menu.hidden;

      if (isOpen) closeMenu();
      else openMenu();
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
      const isOpen = window.isDropdownMenuVisible
        ? window.isDropdownMenuVisible(menu)
        : !menu.hidden;
      if (isOpen) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      const isOpen = window.isDropdownMenuVisible
        ? window.isDropdownMenuVisible(menu)
        : !menu.hidden;

      if (e.key === 'Escape' && isOpen) {
        closeMenu();
        trigger.focus();
      }
    });
  }

  window.closeGuestNavMenu = closeNavMenu;
  window.closeGuestLangMenus = closeLangMenus;

  document.addEventListener('DOMContentLoaded', initNavMenu);
})();
