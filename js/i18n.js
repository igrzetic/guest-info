(function () {
  const STORAGE_KEY = 'guest-info-lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['hr', 'en', 'it', 'de', 'sl'];

  const LANG_LABELS = {
    hr: 'HR',
    en: 'ENG',
    it: 'IT',
    de: 'DE',
    sl: 'SLO',
  };

  function getNested(obj, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  function closeLangMenu(root) {
    if (!root) return Promise.resolve();

    const trigger = root.querySelector('.lang-dropdown__trigger');
    const menu = root.querySelector('.lang-dropdown__menu');

    root.classList.remove('is-open', 'is-menu-past-hero');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');

    if (!menu || menu.hidden) return Promise.resolve();

    if (window.closeDropdownMenu) {
      return window.closeDropdownMenu(menu, {
        itemSelector: '.lang-dropdown__option',
        origin: 'top right',
      });
    }

    menu.hidden = true;
    return Promise.resolve();
  }

  function updateLangDropdown(lang) {
    const label = LANG_LABELS[lang] || LANG_LABELS[DEFAULT_LANG];

    document.querySelectorAll('.lang-dropdown__value').forEach((valueEl) => {
      valueEl.textContent = label;
    });

    document.querySelectorAll('.lang-dropdown__option').forEach((option) => {
      const isSelected = option.dataset.lang === lang;
      option.classList.toggle('is-selected', isSelected);
      option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    document.querySelectorAll('.lang-dropdown').forEach((root) => {
      closeLangMenu(root);
    });
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    const t = window.I18N?.[lang];
    if (!t) return;

    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getNested(t, el.getAttribute('data-i18n'));
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = getNested(t, el.getAttribute('data-i18n-html'));
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const val = getNested(t, el.getAttribute('data-i18n-alt'));
      if (val != null) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = getNested(t, el.getAttribute('data-i18n-aria'));
      if (val != null) el.setAttribute('aria-label', val);
    });

    const govLink = document.getElementById('evisitor-gov-link');
    if (govLink) {
      govLink.href = lang === 'hr'
        ? 'https://gov.hr/hr/prijava-i-odjava-turista/1432'
        : 'https://gov.hr/en/tourist-registration-and-deregistration/1432';
    }

    if (t.meta?.title) document.title = t.meta.title;

    updateLangDropdown(lang);

    document.querySelectorAll('.accordion__item.is-open').forEach((item) => {
      const body = item.querySelector('.accordion__body');
      if (body) body.style.maxHeight = (body.scrollHeight + 32) + 'px';
    });
  }

  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return DEFAULT_LANG;
  }

  function initLangDropdown() {
    const roots = document.querySelectorAll('.lang-dropdown');

    roots.forEach((root) => {
      const trigger = root.querySelector('.lang-dropdown__trigger');
      const menu = root.querySelector('.lang-dropdown__menu');
      const options = root.querySelectorAll('.lang-dropdown__option');

      if (!trigger || !menu) return;

      function openMenu() {
        if (window.closeGuestNavMenu) window.closeGuestNavMenu();

        document.querySelectorAll('.lang-dropdown').forEach((other) => {
          if (other !== root) closeLangMenu(other);
        });

        root.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');

        const open = window.openDropdownMenu
          ? window.openDropdownMenu(menu, {
              itemSelector: '.lang-dropdown__option',
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
        closeLangMenu(root).then(() => {
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

      options.forEach((option) => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = option.dataset.lang;
          if (lang) setLanguage(lang);
          closeMenu();
          trigger.focus();
        });
      });

      menu.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-dropdown').forEach((root) => {
        const menu = root.querySelector('.lang-dropdown__menu');
        const isOpen = window.isDropdownMenuVisible
          ? window.isDropdownMenuVisible(menu)
          : menu && !menu.hidden;

        if (isOpen) closeLangMenu(root);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.lang-dropdown.is-open').forEach((root) => {
        closeLangMenu(root).then(() => {
          root.querySelector('.lang-dropdown__trigger')?.focus();
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLangDropdown();
    setLanguage(detectLanguage());
  });

  window.setGuestInfoLanguage = setLanguage;
})();
