(function () {
  const ITEM_SELECTOR =
    '.nav-dropdown__option, .lang-dropdown__option';

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getItems(menu, itemSelector) {
    return menu.querySelectorAll(itemSelector || ITEM_SELECTOR);
  }

  function isDropdownMenuVisible(menu) {
    return (
      !!menu &&
      !menu.hidden &&
      menu.dataset.dropdownState !== 'closing'
    );
  }

  function openDropdownMenu(menu, options = {}) {
    if (!menu) return Promise.resolve();

    const itemSelector = options.itemSelector || ITEM_SELECTOR;
    const origin = options.origin || 'top right';
    const items = getItems(menu, itemSelector);

    if (prefersReducedMotion() || typeof gsap === 'undefined') {
      menu.hidden = false;
      menu.dataset.dropdownState = 'open';
      return Promise.resolve();
    }

    gsap.killTweensOf([menu, ...items]);

    menu.hidden = false;
    menu.dataset.dropdownState = 'opening';

    gsap.set(menu, {
      transformOrigin: origin,
      y: -10,
      autoAlpha: 0,
    });
    gsap.set(items, { y: -8, autoAlpha: 0 });

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          menu.dataset.dropdownState = 'open';
          resolve();
        },
      });

      tl.to(
        menu,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.34,
        },
        0,
      );

      tl.to(
        items,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.28,
          stagger: 0.035,
        },
        0.07,
      );
    });
  }

  function closeDropdownMenu(menu, options = {}) {
    if (!menu) return Promise.resolve();

    const itemSelector = options.itemSelector || ITEM_SELECTOR;
    const items = getItems(menu, itemSelector);

    if (menu.hidden) return Promise.resolve();

    if (prefersReducedMotion() || typeof gsap === 'undefined') {
      menu.hidden = true;
      menu.dataset.dropdownState = '';
      return Promise.resolve();
    }

    gsap.killTweensOf([menu, ...items]);
    menu.dataset.dropdownState = 'closing';

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.in' },
        onComplete: () => {
          menu.hidden = true;
          menu.dataset.dropdownState = '';
          gsap.set([menu, ...items], { clearProps: 'transform,opacity,visibility' });
          resolve();
        },
      });

      tl.to(
        items,
        {
          y: -6,
          autoAlpha: 0,
          duration: 0.16,
          stagger: { each: 0.018, from: 'end' },
        },
        0,
      );

      tl.to(
        menu,
        {
          y: -10,
          autoAlpha: 0,
          duration: 0.24,
        },
        0.05,
      );
    });
  }

  window.openDropdownMenu = openDropdownMenu;
  window.closeDropdownMenu = closeDropdownMenu;
  window.isDropdownMenuVisible = isDropdownMenuVisible;
})();
