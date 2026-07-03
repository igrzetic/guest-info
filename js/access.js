(function () {
  const STORAGE_KEY = 'guest-access-code-sent';
  const EMAIL_STORAGE_KEY = 'guest-access-sent-email';

  const modal = document.getElementById('access-modal');
  const formPanel = document.getElementById('access-modal-form');
  const successPanel = document.getElementById('access-modal-success');
  const openBtn = document.getElementById('access-code-btn');
  const form = document.getElementById('access-contact-form');
  const emailInput = document.getElementById('access-email');
  const submitBtn = document.getElementById('access-submit-btn');
  const sentMessage = document.getElementById('access-sent-message');

  if (!modal || !openBtn) return;

  function t(key) {
    const lang = document.documentElement.lang || 'en';
    return window.I18N?.[lang]?.access?.[key];
  }

  function wasCodeSent() {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }

  function markCodeSent(email) {
    sessionStorage.setItem(STORAGE_KEY, '1');
    sessionStorage.setItem(EMAIL_STORAGE_KEY, email);
  }

  function formatSentMessage(email) {
    const template =
      t('codeSentMessage') ||
      'We have sent the locker code to {email}.';
    return template.replace('{email}', email);
  }

  function showSuccessPanel(email) {
    formPanel.hidden = true;
    successPanel.hidden = false;
    if (sentMessage) {
      sentMessage.textContent = formatSentMessage(email);
    }
  }

  function showFormPanel() {
    formPanel.hidden = false;
    successPanel.hidden = true;
  }

  function setSubmitting(isSubmitting) {
    if (!submitBtn) return;
    submitBtn.disabled = isSubmitting;
    submitBtn.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
    const label = submitBtn.querySelector('[data-i18n="access.submitBtn"]');
    if (label) {
      label.textContent = isSubmitting
        ? t('sendingBtn') || 'Sending...'
        : t('submitBtn') || 'Get the code';
    }
  }

  function openModal() {
    if (wasCodeSent()) {
      const email = sessionStorage.getItem(EMAIL_STORAGE_KEY) || '';
      showSuccessPanel(email);
    } else {
      showFormPanel();
      form?.reset();
    }

    modal.hidden = false;
    window.lockBodyScroll?.();
    (wasCodeSent()
      ? modal.querySelector('.access-modal__close')
      : emailInput)?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    window.unlockBodyScroll?.();
    setSubmitting(false);
  }

  openBtn.addEventListener('click', openModal);

  modal.querySelector('.access-modal__backdrop')?.addEventListener('click', closeModal);
  modal.querySelector('.access-modal__close')?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput?.value.trim() || '';

    emailInput?.classList.remove('is-invalid');

    if (!email) {
      alert(t('formError') || 'Please enter your email address.');
      emailInput?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput?.classList.add('is-invalid');
      alert(t('emailError') || 'Please enter a valid email address.');
      emailInput?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const lang = document.documentElement.lang || 'en';
      const response = await fetch('/.netlify/functions/send-locker-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      });

      if (!response.ok) {
        throw new Error('send_failed');
      }

      markCodeSent(email);
      showSuccessPanel(email);
    } catch {
      alert(
        t('sendError') ||
          'Something went wrong while sending the code. Please try again or contact us.',
      );
    } finally {
      setSubmitting(false);
    }
  });
})();
