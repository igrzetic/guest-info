(function () {
  function updateOpenMenusPastHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroBottom = hero.getBoundingClientRect().bottom;

    document.querySelectorAll('.lang-dropdown, .nav-dropdown').forEach((root) => {
      const menu = root.querySelector('.lang-dropdown__menu, .nav-dropdown__menu');
      const isOpen = root.classList.contains('is-open') && menu && !menu.hidden;

      if (!isOpen) {
        root.classList.remove('is-menu-past-hero');
        return;
      }

      const menuBottom = menu.getBoundingClientRect().bottom;
      root.classList.toggle('is-menu-past-hero', menuBottom > heroBottom);
    });
  }

  window.updateOpenMenusPastHero = updateOpenMenusPastHero;

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', updateOpenMenusPastHero, { passive: true });
    window.addEventListener('resize', updateOpenMenusPastHero, { passive: true });
    updateOpenMenusPastHero();
  });
})();
