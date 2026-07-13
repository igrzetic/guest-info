# Villa Kras — Design System

This document defines every design decision made in `index.html`. Reference it before making any visual changes.

---

## 1. Philosophy

**Rustic Modern Minimalism** — the design reflects the villa itself: stone walls, wooden beams, terracotta accents, a pool, and the surrounding Mediterranean greenery. The aesthetic is calm and airy; never loud.

Three guiding principles:

1. **Low visual noise** — plenty of white space, no decorative clutter.
2. **Typographic hierarchy** — serif headlines give premium/rustic feel; clean sans-serif body text keeps things readable on mobile.
3. **Mobile-first** — 90% of guests access this on a phone.

---

## 2. Colour Palette

| Token (CSS var) | Tailwind class         | Hex       | Usage                                                              |
| --------------- | ---------------------- | --------- | ------------------------------------------------------------------ |
| `--parchment`   | `bg-parchment`         | `#F4EFE6` | Page background — warm off-white (slightly darker than before)     |
| `--sand`        | `bg-sand`              | `#EDE8DF` | Card interiors, section alternates, borders                        |
| `--stone`       | `bg-stone`             | `#D4CAB8` | Subtle borders, footer top border, scrollbar                       |
| `--wood`        | `text-wood`            | `#C4956A` | Accent colour — terracotta/wood tone; bullet dots, accordion icon  |
| `--wood-dk`     | `text-wood-dk`         | `#9B6E45` | Deeper wood tone; icon stroke inside warm-background icon-wraps    |
| `--deep`        | `text-deep`            | `#2D2416` | Primary text, headings                                             |
| `--mid`         | `text-mid`             | `#6B5B45` | Body text, descriptions                                            |
| `--muted`       | `text-muted`           | `#9B8B7A` | Secondary labels, meta text                                        |
| `--teal`        | `text-teal`            | `#5B8FA8` | All links, call-to-action text, teal badges — pool/sea inspiration |
| `--teal-lt`     | `bg-[var(--teal-lt)]`  | `#EBF3F8` | Teal icon-wrap background, teal badge background                   |
| `--olive`       | `text-olive`           | `#6B7C5C` | Nature/greenery accent; olive badges                               |
| `--olive-lt`    | `bg-[var(--olive-lt)]` | `#ECF0E8` | Olive icon-wrap background                                         |

### Shared shadow token

```css
--shadow-card:
  0 1px 4px rgba(45, 36, 22, 0.09), 0 6px 24px rgba(45, 36, 22, 0.085);
```

Used on `.card` and `.qcard` for stronger depth against the darker parchment background.

### Background for emergency section

- Header: `#FFF5F5` with border `#FBBFBF`
- 112 banner: gradient `#FFF5F5 → #FEE9E9`, border `#FBBFBF`
- Number text: `text-red-600`

---

## 3. Typography

### Fonts (Google Fonts CDN)

```
Playfair Display — weights 400, 500, 600  (serif, headings)
Inter — weights 300, 400, 500 (sans-serif, body)
Material Symbols Outlined — icon font (nav chevron, section icons, back-to-top)
```

### Scale & Usage

| Element                          | Font             | Size                    | Weight | Class                         |
| -------------------------------- | ---------------- | ----------------------- | ------ | ----------------------------- |
| Villa name (nav & footer)        | Playfair Display | `text-lg` / `text-xl`   | 500    | `font-serif`                  |
| Hero H1                          | Playfair Display | `text-4xl sm:text-6xl`  | 400    | `font-serif`                  |
| Hero tagline                     | Inter            | `0.6875rem` / `0.75rem` | 600    | `.hero__tagline` uppercase    |
| Section headings (H2)            | Playfair Display | `text-xl`               | 400    | `font-serif`                  |
| Quick-info numbers               | Playfair Display | `text-xl` / `text-2xl`  | 400    | `font-serif`                  |
| Emergency 112                    | Playfair Display | `text-4xl`              | 400    | `font-serif`                  |
| Body / descriptions              | Inter            | `text-sm` (14px)        | 400    | default                       |
| Sub-labels, meta                 | Inter            | `text-xs` (12px)        | 400    | —                             |
| Section labels (e.g. "Check-in") | Inter            | `text-[9px]`            | 500    | uppercase + `tracking-widest` |

---

## 4. Spacing & Layout

- **Max width**: `max-w-3xl` (768px) centred with `mx-auto`
- **Horizontal padding**: `px-4 sm:px-6`
- **Section gap**: `gap-5` (20px) in the main flex column
- **Card internal padding**: `1.5rem` (`card__body`) and `1.375rem 1.5rem` (`card__header`)
- **Card border-radius**: `14px` (`--radius-card`)
- **Fixed header offset**: main content starts below hero; `site-header` is `position: fixed` with safe-area insets

---

## 5. Card Component

All content sections use the `.card` class:

```css
.card {
  background: #ffffff;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
```

**Card structure:**

```html
<section class="card">
  <div class="card__header">
    <!-- flex row, icon + H2 -->
    <div class="card__body"><!-- padding: 1.5rem --></div>
  </div>
</section>
```

---

## 6. Icon Wraps

Icons sit inside a 38×38px rounded container:

```html
<div class="icon-wrap bg-[#F5EDE0]">
  <!-- warm background for wood icon -->
  <div class="icon-wrap bg-[var(--teal-lt)]">
    <!-- teal background for teal icon -->
    <div class="icon-wrap bg-[var(--olive-lt)]">
      <!-- olive background for olive icon -->
    </div>
  </div>
</div>
```

Always use the **lighter** background variant of the icon's accent colour so it doesn't compete with content.

---

## 7. Accordion Pattern

Used for: House Rules, Local Attractions, Emergency Contacts (hospital & pharmacy).

**When to use an accordion:** any section with > 3 sub-items of detail that isn't critical on first glance.

**DOM structure:**

```html
<div class="accordion__item [border-b border-sand]">
  <button class="accordion__trigger" aria-expanded="false">
    Label
    <svg class="accordion__icon">...</svg>
    <!-- rotates 45° when open -->
  </button>
  <div class="accordion__body">
    <!-- max-height animated -->
    <div class="accordion__body-inner">
      <!-- actual content + top border -->
    </div>
  </div>
</div>
```

**JS logic** — `scrollHeight` is read on open and set as `max-height`; reset to `0` on close. The CSS transition does the animation.

---

## 8. Badges / Pills

```html
<span class="badge badge--wood">Top Pick</span>
<!-- warm terracotta -->
<span class="badge badge--teal">Maps ↗</span>
<!-- teal/sea -->
<span class="badge badge--olive">Hidden Gem</span>
<!-- olive/nature -->
```

Used on restaurant rows and venue cards. Keep label text short (≤ 2 words).

---

## 9. Links

All `<a>` tags default to `color: var(--teal)`, no underline. On hover: `text-decoration: underline` with `text-underline-offset: 3px`.

**Inline links with external arrow icon:**

```html
<a
  href="..."
  class="inline-flex items-center gap-1.5 text-sm font-medium text-teal"
>
  Link label
  <svg class="w-3.5 h-3.5">...</svg>
</a>
```

**Interactive row links (taxi section):**

```html
<a
  class="... border border-sand hover:border-teal transition-colors duration-150"
></a>
```

---

## 10. Hero

```css
.hero {
  height: 85vh;
  min-height: 480px;
  max-height: 800px;
  overflow: hidden;
  position: relative;
}
```

- Image uses `object-fit: cover; object-position: center 60%` to frame the villa in the lower portion.
- Overlay: `linear-gradient(160deg, rgba(0,0,0,.08) 0%, rgba(45,36,22,.62) 100%)` — dark at bottom, nearly transparent at top, warm tint in the gradient colour matches `--deep`.
- Hero text sits `absolute bottom-0` with padding, ensuring it never overlaps the image edge.

### Hero content hierarchy

1. **H1** — `data-i18n="hero.welcome"` (e.g. "Welcome")
2. **Tagline** — `.hero__tagline` with `data-i18n="hero.tagline"` (e.g. "Your guest guide for the villa") — moved here from the navbar; uppercase Inter, letter-spaced
3. **Subtitle** — `data-i18n="hero.subtitle"` — longer welcome paragraph

The navbar brand is now only **Krk · Holiday Home** (no separate "Guest Guide" line).

---

## 11. Navigation

### Structure

```html
<header class="site-header" id="site-header">
  <nav class="site-nav" id="site-nav">
    <!-- brand + lang-dropdown--desktop + nav-dropdown (hamburger) -->
  </nav>
  <div class="lang-bar lang-bar--mobile">
    <!-- mobile-only language selector -->
  </div>
</header>
```

| Breakpoint | Language selector              | Hamburger  |
| ---------- | ------------------------------ | ---------- |
| Desktop    | In `.site-nav__actions` row    | Same row   |
| Mobile     | Separate `.lang-bar` below nav | In nav row |

Only one dropdown may be open at a time — opening nav closes lang menus and vice versa (`closeGuestNavMenu`, `closeGuestLangMenus`).

### Fixed header & glass bar

- `.site-header` is `position: fixed` with safe-area padding; inner shells re-enable `pointer-events`.
- `.site-nav` starts transparent over the hero.
- `::before` pseudo on `.site-nav` provides frosted glass; opacity toggled by scroll state.

### Scroll state classes (on `#site-nav`)

| Class          | Trigger                                    | Effect                                                       |
| -------------- | ------------------------------------------ | ------------------------------------------------------------ |
| `is-scrolled`  | `window.scrollY > 24`                      | Glass blur visible, bottom border `--stone`                  |
| `is-past-hero` | `hero.getBoundingClientRect().bottom <= 0` | Brand, triggers, dropdowns switch to solid/parchment palette |

State is synced via `syncNavScrollState()` inside a ScrollTrigger `onUpdate` on `document.documentElement` — geometry-based, not toggle callbacks, so it stays correct at the bottom of the page.

### Per-dropdown hero state

| Class               | Set on                             | Trigger                                                             |
| ------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| `is-menu-past-hero` | `.lang-dropdown` / `.nav-dropdown` | Open menu's bottom edge crosses hero bottom (`js/dropdown-hero.js`) |

Allows glass/frosted dropdown panels over the hero image while the nav bar itself is still transparent, and solid panels once the menu extends past the hero.

### Language dropdown (`.lang-dropdown`)

- Trigger shows current code (HR, ENG, IT, DE, SLO).
- Chevron (`expand_more`) rotates `-180deg` when `.is-open`.
- Over hero: glass trigger (`rgba(255,255,255,0.14)` + blur). Past hero: solid white + stone border.
- **No orange/wood focus ring** on `:focus-visible` or `.is-open` — outline removed intentionally.

### Hamburger menu (`.nav-dropdown`)

- Two-line icon (`.nav-menu-icon`) morphs to X via **transform-only** animation (`0.42s`, `cubic-bezier(0.33, 1, 0.68, 1)`).
- Menu lists in-page anchor links; smooth scroll accounts for fixed header height.
- Desktop + mobile menu offset: `top: calc(100% + 1.25rem)`.

### Dropdown panel styling

- **Over hero** (nav not past hero, menu not past hero): glass — `backdrop-filter: blur`, semi-transparent white, light border.
- **Past hero** (nav or individual menu): solid white/parchment, `--shadow-card`, stone border.
- `transform-origin: top right` on both `.lang-dropdown__menu` and `.nav-dropdown__menu` so GSAP animations appear to emerge from the trigger buttons.

---

## 12. GSAP Animations

**Library versions (CDN in `<head>`):**

- `gsap@3.12.5` — core
- `gsap@3.12.5/ScrollTrigger` — scroll-based reveals and nav state

**Script load order (before inline GSAP block):**

```
constants/i18n/index.js
js/modal-scroll-lock.js
js/dropdown-animate.js   ← dropdown open/close tweens
js/nav-menu.js
js/i18n.js
js/dropdown-hero.js      ← is-menu-past-hero sync
js/evisitor-info.js
```

### Hero entrance

```js
gsap.fromTo(
  "#hero-text",
  { opacity: 0, y: 36 },
  { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.15 },
);
```

### Section scroll reveals

- Initial state class `.reveal` sets `opacity: 0` in CSS.
- GSAP animates each `.reveal` with `autoAlpha` and `y: 28` when it enters 88% of the viewport.
- `toggleActions: 'play none none none'`, `once: true` — plays once, never reverses.
- Duration: `0.75s`, easing: `power2.out`.
- On complete: adds `.is-revealed`, clears transform props.

**To add a new reveal:** add the `reveal` class to any block-level element.

### Dropdown open/close (`js/dropdown-animate.js`)

Exported globals: `openDropdownMenu`, `closeDropdownMenu`, `isDropdownMenuVisible`.

**Open** (panel slides down from trigger):

- Panel: `y: -10 → 0`, `autoAlpha: 0 → 1`, `0.34s`, `power2.out`
- Items (`.lang-dropdown__option` / `.nav-dropdown__option`): stagger `0.035s`, start `0.07s` into timeline
- `transform-origin: top right` (configurable via `options.origin`)

**Close** (reverse):

- Items fade up first (stagger from end), then panel
- Sets `hidden` on menu in `onComplete`
- `gsap.killTweensOf` on rapid toggle

**Fallback:** if `prefers-reduced-motion: reduce` or GSAP unavailable → instant show/hide (same as pre-animation behaviour).

Used by `js/nav-menu.js` and `js/i18n.js` instead of directly toggling `menu.hidden`.

### Back to top (`#back-to-top`)

- Fixed bottom-right, round white button, stone border, Material icon `keyboard_arrow_up`.
- Hidden by default (`opacity: 0`, `pointer-events: none`).
- GSAP show/hide tied to same `pastHero` check as `is-past-hero`: slides up + fades in when hero scrolls off screen.
- Label via `data-i18n-aria="backToTop.aria"`.

### Nav scroll sync

`syncNavScrollState()` runs on ScrollTrigger `onUpdate` and `resize`:

1. Toggle `is-scrolled` / `is-past-hero` on `#site-nav`
2. `syncBackToTop(pastHero)`
3. `updateOpenMenusPastHero()` if dropdown hero helper is loaded

---

## 13. Quick-Info Cards

`.qcard` grid — always `grid-cols-2` on mobile, `grid-cols-4` on `sm+`.
Shows: Check-in, Check-out, Wi-Fi, Deposit. Edit values directly in the HTML — no JavaScript involved.

Now uses `box-shadow: var(--shadow-card)` and stone border for consistency with section cards.

---

## 14. Emergency Section

The emergency section deliberately breaks the neutral palette to be recognisable at a glance. The header background and 112 banner use warm red tints (`#FFF5F5`, `#FEE9E9`) to signal urgency without being alarming.

---

## 15. Internationalization (i18n)

### Files

| File                      | Purpose                                                                        |
| ------------------------- | ------------------------------------------------------------------------------ |
| `constants/i18n/index.js` | All translations — `window.I18N` object with keys `hr`, `en`, `it`, `de`, `sl` |
| `js/i18n.js`              | Language dropdown logic, localStorage persistence, mutual close with nav menu  |

### Supported languages

- `hr` — Croatian (HR)
- `en` — English (EN) — default fallback
- `it` — Italian (IT)
- `de` — German (DE)
- `sl` — Slovenian (SLO)

### Brand name (generalized)

The property name is **not** a specific villa — it uses neutral terms per language:

- EN: **Holiday Home**
- HR: **Kuća za odmor**
- IT: **Casa vacanze**
- DE: **Ferienhaus**
- SL: **Počitniška hiša**

Navbar displays: **Krk · {brand}** — no separate guide subtitle in the nav.

### How to add / edit translations

1. Open `constants/i18n/index.js`
2. Add or edit the key under each language object (keep keys identical across all 5 languages)
3. In `index.html`, bind with the appropriate `data-i18n*` attribute

### HTML attributes

| Attribute        | Effect                                    |
| ---------------- | ----------------------------------------- |
| `data-i18n`      | Sets `textContent`                        |
| `data-i18n-html` | Sets `innerHTML` (for formatted strings)  |
| `data-i18n-alt`  | Sets `alt` on images                      |
| `data-i18n-aria` | Sets `aria-label` (nav menu, back-to-top) |

### Language selector

- Desktop: `.lang-dropdown--desktop` inside `.site-nav__actions`
- Mobile: `.lang-bar--mobile` below the nav row
- Choice saved to `localStorage` key `guest-info-lang`
- On first visit, defaults to `en` (saved preference takes priority)

### Notable translation keys (recent)

| Key              | Usage                        |
| ---------------- | ---------------------------- |
| `hero.tagline`   | Uppercase line under Welcome |
| `backToTop.aria` | Accessible label for FAB     |
| `nav.menuAria`   | Hamburger button aria-label  |

---

## 16. Files

| File                                         | Purpose                                                 |
| -------------------------------------------- | ------------------------------------------------------- |
| `index.html`                                 | Complete SPA — HTML, inline CSS, accordion + GSAP block |
| `constants/i18n/index.js`                    | Translation strings (5 languages)                       |
| `js/i18n.js`                                 | Language dropdown + page text swap                      |
| `js/nav-menu.js`                             | Hamburger menu, section scroll, dropdown coordination   |
| `js/dropdown-animate.js`                     | GSAP open/close tweens for nav + lang menus             |
| `js/dropdown-hero.js`                        | `is-menu-past-hero` class sync on scroll/resize         |
| `js/modal-scroll-lock.js`                    | Body scroll lock for modals                             |
| `js/evisitor-info.js`                        | eVisitor registration helper UI                         |
| `js/access.js`                               | Locker / access code flow (module)                      |
| `public/assets/villa_plasa_house_sunset.jpg` | Hero image                                              |
| `public/assets/villa_kras_pool.jpg`          | Pool image (available for future use)                   |
| `DESIGN.md`                                  | This file                                               |

### Legacy (not loaded)

| File             | Notes                   |
| ---------------- | ----------------------- |
| `styles.css`     | Old external stylesheet |
| `src/input.css`  | Old Tailwind source     |
| `src/output.css` | Old compiled Tailwind   |

---

## 17. Future Improvements (ideas)

- **Gallery section** — use `villa_kras_pool.jpg` + sunset image in a simple CSS grid gallery.
- **Dark mode** — a `prefers-color-scheme: dark` media query using the deep/mid palette inverted.
- **PWA** — add a `manifest.json` and a minimal service worker so guests can "install" the page to their home screen for offline access.
- **Sticky section nav** — a horizontal pill-scroll nav below the hero for jumping to sections (especially useful on mobile).
