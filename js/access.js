import {
  AsYouType,
  parsePhoneNumberFromString,
  isValidPhoneNumber,
} from 'https://cdn.jsdelivr.net/npm/libphonenumber-js@1.12.9/+esm';

(function () {
  const LOCKER_CODE = '2018';
  const STORAGE_KEY = 'guest-access-unlocked';
  const DEFAULT_COUNTRY = 'HR';

  const COUNTRY_BADGE = {
    HR: 'CRO',
    SI: 'SLO',
    DE: 'DE',
    AT: 'AT',
    IT: 'IT',
    GB: 'UK',
    US: 'US',
    FR: 'FR',
    NL: 'NL',
    CH: 'CH',
    BA: 'BIH',
    RS: 'SRB',
    ME: 'MNE',
    MK: 'MKD',
    HU: 'HU',
    CZ: 'CZ',
    SK: 'SK',
    PL: 'PL',
  };

  const modal = document.getElementById('access-modal');
  const formPanel = document.getElementById('access-modal-form');
  const codePanel = document.getElementById('access-modal-code');
  const openBtn = document.getElementById('access-code-btn');
  const form = document.getElementById('access-contact-form');
  const phoneInput = document.getElementById('access-phone');
  const phoneWrap = document.getElementById('access-phone-wrap');
  const countryBadge = document.getElementById('access-phone-country');
  const emailInput = document.getElementById('access-email');
  const codeDisplay = document.getElementById('access-code-display');
  const codeDelivery = document.getElementById('access-code-delivery');

  if (!modal || !openBtn) return;

  function t(key) {
    const lang = document.documentElement.lang || 'en';
    return window.I18N?.[lang]?.access?.[key];
  }

  function isUnlocked() {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }

  function setUnlocked(viaPhone) {
    sessionStorage.setItem(STORAGE_KEY, '1');
    if (viaPhone) sessionStorage.setItem('guest-access-via-phone', '1');
    else sessionStorage.removeItem('guest-access-via-phone');
  }

  function badgeLabel(iso2) {
    return COUNTRY_BADGE[iso2] || iso2;
  }

  function formatAndDetectCountry(raw) {
    const formatter = new AsYouType(DEFAULT_COUNTRY);
    const formatted = formatter.input(raw);
    const country = formatter.getCountry();
    return { formatted, country };
  }

  function resetPhoneUi() {
    phoneInput?.classList.remove('is-invalid');
    if (countryBadge) {
      countryBadge.hidden = true;
      countryBadge.textContent = '';
    }
    phoneWrap?.classList.remove('has-country');
  }

  function updateCountryBadge(value) {
    if (!countryBadge || !phoneWrap) return;

    const digits = value.replace(/\D/g, '');
    if (digits.length < 3) {
      countryBadge.hidden = true;
      countryBadge.textContent = '';
      phoneWrap.classList.remove('has-country');
      return;
    }

    const { country } = formatAndDetectCountry(value);
    const parsed = parsePhoneNumberFromString(value, DEFAULT_COUNTRY);
    const iso = country || parsed?.country;

    if (iso) {
      countryBadge.textContent = badgeLabel(iso);
      countryBadge.hidden = false;
      phoneWrap.classList.add('has-country');
    } else {
      countryBadge.hidden = true;
      countryBadge.textContent = '';
      phoneWrap.classList.remove('has-country');
    }
  }

  function validatePhone(value) {
    if (!value.trim()) return false;
    return isValidPhoneNumber(value, DEFAULT_COUNTRY);
  }

  function showCodePanel(showPhoneDelivery) {
    if (codeDisplay) codeDisplay.textContent = LOCKER_CODE;
    if (codeDelivery) {
      codeDelivery.hidden = !showPhoneDelivery;
      if (showPhoneDelivery) {
        const msg = t('codeSentPhone');
        if (msg) codeDelivery.textContent = msg;
      }
    }
    formPanel.hidden = true;
    codePanel.hidden = false;
  }

  function showFormPanel() {
    formPanel.hidden = false;
    codePanel.hidden = true;
    if (codeDelivery) codeDelivery.hidden = true;
  }

  function openModal() {
    if (isUnlocked()) {
      const viaPhone = sessionStorage.getItem('guest-access-via-phone') === '1';
      showCodePanel(viaPhone);
    } else {
      showFormPanel();
      form?.reset();
      resetPhoneUi();
    }
    modal.hidden = false;
    window.lockBodyScroll?.();
    (isUnlocked() ? modal.querySelector('.access-modal__close') : phoneInput)?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    window.unlockBodyScroll?.();
  }

  phoneInput?.addEventListener('input', () => {
    phoneInput.classList.remove('is-invalid');
    const prev = phoneInput.value;
    const cursor = phoneInput.selectionStart ?? prev.length;
    const digitsBefore = prev.slice(0, cursor).replace(/\D/g, '').length;

    const { formatted } = formatAndDetectCountry(prev);
    phoneInput.value = formatted;
    updateCountryBadge(formatted);

    let newCursor = 0;
    let seen = 0;
    while (newCursor < formatted.length && seen < digitsBefore) {
      if (/\d/.test(formatted[newCursor])) seen += 1;
      newCursor += 1;
    }
    phoneInput.setSelectionRange(newCursor, newCursor);
  });

  phoneInput?.addEventListener('blur', () => {
    updateCountryBadge(phoneInput.value);
  });

  openBtn.addEventListener('click', openModal);

  modal.querySelector('.access-modal__backdrop')?.addEventListener('click', closeModal);
  modal.querySelector('.access-modal__close')?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = phoneInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';

    phoneInput?.classList.remove('is-invalid');

    if (!phone && !email) {
      alert(t('formError') || 'Please enter a phone number or email address.');
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(t('emailError') || 'Please enter a valid email address.');
      return;
    }

    if (phone && !validatePhone(phone)) {
      phoneInput?.classList.add('is-invalid');
      alert(t('phoneError') || 'Please enter a valid phone number with country code.');
      phoneInput?.focus();
      return;
    }

    const viaPhone = Boolean(phone);
    setUnlocked(viaPhone);
    showCodePanel(viaPhone);
  });
})();
