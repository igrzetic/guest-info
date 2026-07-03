(function () {
  const modal = document.getElementById('evisitor-info-modal');
  const openBtn = document.getElementById('evisitor-info-btn');

  if (!modal || !openBtn) return;

  function openModal() {
    modal.hidden = false;
    window.lockBodyScroll?.();
    modal.querySelector('.access-modal__close')?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    window.unlockBodyScroll?.();
  }

  openBtn.addEventListener('click', openModal);

  modal.querySelector('.access-modal__backdrop')?.addEventListener('click', closeModal);
  modal.querySelector('.access-modal__close')?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
