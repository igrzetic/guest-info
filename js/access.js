(function () {
  const STORAGE_KEY = 'guest-access-code-sent';
  const EMAIL_STORAGE_KEY = 'guest-access-sent-email';
  const SENT_EMAILS_KEY = 'guest-access-sent-emails';

  const modal = document.getElementById('access-modal');
  const formPanel = document.getElementById('access-modal-form');
  const successPanel = document.getElementById('access-modal-success');
  const openBtn = document.getElementById('access-code-btn');
  const form = document.getElementById('access-contact-form');
  const emailInput = document.getElementById('access-email');
  const emailError = document.getElementById('access-email-error');
  const submitBtn = document.getElementById('access-submit-btn');
  const sentMessage = document.getElementById('access-sent-message');

  if (!modal || !openBtn) return;

  function t(key) {
    const lang = document.documentElement.lang || 'en';
    return window.I18N?.[lang]?.access?.[key];
  }

  function getSentEmails() {
    try {
      const raw = localStorage.getItem(SENT_EMAILS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function wasEmailSent(email) {
    const normalized = email.trim().toLowerCase();
    return getSentEmails().includes(normalized);
  }

  function markEmailSent(email) {
    const normalized = email.trim().toLowerCase();
    const sentEmails = getSentEmails();
    if (!sentEmails.includes(normalized)) {
      sentEmails.push(normalized);
      localStorage.setItem(SENT_EMAILS_KEY, JSON.stringify(sentEmails));
    }
    sessionStorage.setItem(STORAGE_KEY, '1');
    sessionStorage.setItem(EMAIL_STORAGE_KEY, normalized);
  }

  function wasCodeSent() {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }

  function formatSentMessage(email) {
    const template =
      t('codeSentMessage') ||
      'We have sent the locker code to {email}.';
    return template.replace('{email}', email);
  }

  function clearFieldError() {
    emailInput?.classList.remove('is-invalid');
    if (emailError) {
      emailError.hidden = true;
      emailError.textContent = '';
    }
  }

  function showFieldError(message) {
    emailInput?.classList.add('is-invalid');
    if (emailError) {
      emailError.textContent = message;
      emailError.hidden = false;
    }
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
    clearFieldError();
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

  emailInput?.addEventListener('input', clearFieldError);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput?.value.trim() || '';

    clearFieldError();

    if (!email) {
      showFieldError(t('formError') || 'Please enter your email address.');
      emailInput?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError(t('emailError') || 'Please enter a valid email address.');
      emailInput?.focus();
      return;
    }

    if (wasEmailSent(email)) {
      showFieldError(
        t('duplicateEmailError') ||
          'This email address has already received the locker code. For security, we only send it once per address.',
      );
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

      const data = await response.json().catch(() => ({}));

      if (response.status === 409 || data.error === 'already_sent') {
        markEmailSent(email);
        showFieldError(
          t('duplicateEmailError') ||
            'This email address has already received the locker code. For security, we only send it once per address.',
        );
        emailInput?.focus();
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || 'send_failed');
      }

      markEmailSent(email);
      showSuccessPanel(email);
    } catch {
      showFieldError(
        t('sendError') ||
          'Something went wrong while sending the code. Please try again or contact us.',
      );
    } finally {
      setSubmitting(false);
    }
  });
})();
