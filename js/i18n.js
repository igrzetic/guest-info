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

  function updateLangDropdown(lang) {
    const root = document.getElementById('lang-dropdown');
    const valueEl = document.getElementById('lang-dropdown-value');
    const options = document.querySelectorAll('.lang-dropdown__option');

    if (valueEl) valueEl.textContent = LANG_LABELS[lang] || LANG_LABELS[DEFAULT_LANG];

    options.forEach((option) => {
      const isSelected = option.dataset.lang === lang;
      option.classList.toggle('is-selected', isSelected);
      option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    if (root) root.classList.remove('is-open');
    const trigger = document.getElementById('lang-dropdown-trigger');
    const menu = document.getElementById('lang-dropdown-menu');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
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
    const root = document.getElementById('lang-dropdown');
    const trigger = document.getElementById('lang-dropdown-trigger');
    const menu = document.getElementById('lang-dropdown-menu');
    const options = document.querySelectorAll('.lang-dropdown__option');

    if (!root || !trigger || !menu) return;

    function openMenu() {
      if (window.closeGuestNavMenu) window.closeGuestNavMenu();
      root.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
    }

    function closeMenu() {
      root.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }

    function toggleMenu() {
      if (menu.hidden) openMenu();
      else closeMenu();
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
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

  document.addEventListener('DOMContentLoaded', () => {
    initLangDropdown();
    setLanguage(detectLanguage());
  });

  window.setGuestInfoLanguage = setLanguage;
})();
