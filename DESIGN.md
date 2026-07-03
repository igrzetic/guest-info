# Villa Kras — Design System

This document defines every design decision made in `index.html`. Reference it before making any visual changes.

---

## 1. Philosophy

**Rustic Modern Minimalism** — the design reflects the villa itself: stone walls, wooden beams, terracotta accents, a pool, and the surrounding Mediterranean greenery. The aesthetic is calm and airy; never loud.

Three guiding principles:
1. **Low visual noise** — plenty of white space, no decorative clutter.
2. **Typographic hierarchy** — serif headlines give premium/rustic feel; clean sans-serif body text keeps things readable on mobile.
3. **Mobile-first** — 90% of guests access this on a phone at the beach.

---

## 2. Colour Palette

| Token (CSS var) | Tailwind class | Hex | Usage |
|---|---|---|---|
| `--parchment` | `bg-parchment` | `#FAF7F2` | Page background — warm off-white |
| `--sand` | `bg-sand` | `#EDE8DF` | Card interiors, section alternates, borders |
| `--stone` | `bg-stone` | `#D4CAB8` | Subtle borders, footer top border, scrollbar |
| `--wood` | `text-wood` | `#C4956A` | Accent colour — terracotta/wood tone; bullet dots, accordion icon |
| `--wood-dk` | `text-wood-dk` | `#9B6E45` | Deeper wood tone; icon stroke inside warm-background icon-wraps |
| `--deep` | `text-deep` | `#2D2416` | Primary text, headings |
| `--mid` | `text-mid` | `#6B5B45` | Body text, descriptions |
| `--muted` | `text-muted` | `#9B8B7A` | Secondary labels, meta text |
| `--teal` | `text-teal` | `#5B8FA8` | All links, call-to-action text, teal badges — pool/sea inspiration |
| `--teal-lt` | `bg-[var(--teal-lt)]` | `#EBF3F8` | Teal icon-wrap background, teal badge background |
| `--olive` | `text-olive` | `#6B7C5C` | Nature/greenery accent; olive badges |
| `--olive-lt` | `bg-[var(--olive-lt)]` | `#ECF0E8` | Olive icon-wrap background |

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
```

### Scale & Usage

| Element | Font | Size | Weight | Class |
|---|---|---|---|---|
| Villa name (nav & footer) | Playfair Display | `text-lg` / `text-xl` | 500 | `font-serif` |
| Hero H1 | Playfair Display | `text-4xl sm:text-6xl` | 400 | `font-serif` |
| Section headings (H2) | Playfair Display | `text-xl` | 400 | `font-serif` |
| Quick-info numbers | Playfair Display | `text-xl` / `text-2xl` | 400 | `font-serif` |
| Emergency 112 | Playfair Display | `text-4xl` | 400 | `font-serif` |
| Body / descriptions | Inter | `text-sm` (14px) | 400 | default |
| Sub-labels, meta | Inter | `text-xs` (12px) | 400 | — |
| Section labels (e.g. "Check-in") | Inter | `text-[9px]` | 500 | uppercase + `tracking-widest` |
| Nav subtitle | Inter | `text-[10px]` | 500 | uppercase + `tracking-[0.18em]` |

---

## 4. Spacing & Layout

- **Max width**: `max-w-3xl` (768px) centred with `mx-auto`
- **Horizontal padding**: `px-4 sm:px-6`
- **Section gap**: `gap-5` (20px) in the main flex column
- **Card internal padding**: `1.5rem` (`card__body`) and `1.375rem 1.5rem` (`card__header`)
- **Card border-radius**: `14px` (`--radius-card`)

---

## 5. Card Component

All content sections use the `.card` class:

```css
.card {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(45,36,22,.06), 0 4px 20px rgba(45,36,22,.05);
  overflow: hidden;
}
```

**Card structure:**
```html
<section class="card">
  <div class="card__header">        <!-- flex row, icon + H2 -->
  <div class="card__body">          <!-- padding: 1.5rem -->
```

---

## 6. Icon Wraps

Icons sit inside a 38×38px rounded container:

```html
<div class="icon-wrap bg-[#F5EDE0]">   <!-- warm background for wood icon -->
<div class="icon-wrap bg-[var(--teal-lt)]">   <!-- teal background for teal icon -->
<div class="icon-wrap bg-[var(--olive-lt)]">  <!-- olive background for olive icon -->
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
    <svg class="accordion__icon">...</svg>  <!-- rotates 45° when open -->
  </button>
  <div class="accordion__body">             <!-- max-height animated -->
    <div class="accordion__body-inner">     <!-- actual content + top border -->
```

**JS logic** — `scrollHeight` is read on open and set as `max-height`; reset to `0` on close. The CSS transition does the animation.

---

## 8. Badges / Pills

```html
<span class="badge badge--wood">Top Pick</span>   <!-- warm terracotta -->
<span class="badge badge--teal">Maps ↗</span>      <!-- teal/sea -->
<span class="badge badge--olive">Hidden Gem</span> <!-- olive/nature -->
```

Used on restaurant rows and venue cards. Keep label text short (≤ 2 words).

---

## 9. Links

All `<a>` tags default to `color: var(--teal)`, no underline. On hover: `text-decoration: underline` with `text-underline-offset: 3px`.

**Inline links with external arrow icon:**
```html
<a href="..." class="inline-flex items-center gap-1.5 text-sm font-medium text-teal">
  Link label
  <svg class="w-3.5 h-3.5">...</svg>
</a>
```

**Interactive row links (taxi section):**
```html
<a class="... border border-sand hover:border-teal transition-colors duration-150">
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

---

## 11. Navigation

Sticky top, frosted glass:
```css
.site-nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(250, 247, 242, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--stone);
}
```

---

## 12. GSAP Animations

**Library versions used:**
- `gsap@3.12.5` — core
- `gsap@3.12.5/ScrollTrigger` — scroll-based reveals

**Hero entrance:**
```js
gsap.fromTo('#hero-text',
  { opacity: 0, y: 36 },
  { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 }
);
```

**Section scroll reveals:**
- Initial state class `.reveal` sets `opacity: 0; transform: translateY(28px)` in CSS.
- GSAP animates each `.reveal` to `opacity: 1, y: 0` when it enters 90% of the viewport.
- `toggleActions: 'play none none none'` — plays once, never reverses.
- Duration: `0.65s`, easing: `power2.out` — subtle, not bouncy.

**To add a new reveal:** add the `reveal` class to any block-level element.

---

## 13. Quick-Info Cards

`.qcard` grid — always `grid-cols-2` on mobile, `grid-cols-4` on `sm+`.
Shows: Check-in, Check-out, Wi-Fi, Deposit. Edit values directly in the HTML — no JavaScript involved.

---

## 14. Emergency Section

The emergency section deliberately breaks the neutral palette to be recognisable at a glance. The header background and 112 banner use warm red tints (`#FFF5F5`, `#FEE9E9`) to signal urgency without being alarming.

---

## 15. Internationalization (i18n)

### Files
| File | Purpose |
|---|---|
| `constants/i18n/index.js` | All translations — `window.I18N` object with keys `hr`, `en`, `it`, `de`, `sl` |
| `js/i18n.js` | Language switcher logic, localStorage persistence |

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

### How to add / edit translations
1. Open `constants/i18n/index.js`
2. Add or edit the key under each language object (keep keys identical across all 5 languages)
3. In `index.html`, add `data-i18n="section.key"` for plain text or `data-i18n-html="section.key"` for HTML with `<strong>` tags

### HTML attributes
| Attribute | Effect |
|---|---|
| `data-i18n` | Sets `textContent` |
| `data-i18n-html` | Sets `innerHTML` (for formatted strings) |
| `data-i18n-alt` | Sets `alt` on images |

### Language selector
Located in the sticky navbar (`#lang-select`). Choice is saved to `localStorage` key `guest-info-lang`. On first visit, browser language is detected if supported.

---

## 16. Files

| File | Purpose |
|---|---|
| `index.html` | Complete SPA — all HTML, CSS (inline `<style>`), and JS |
| `styles.css` | Legacy file — **no longer used**, kept for reference |
| `src/input.css` | Legacy Tailwind source — **no longer used** |
| `src/output.css` | Legacy compiled Tailwind — **no longer used** |
| `public/assets/villa_plasa_house_sunset.jpg` | Hero image |
| `public/assets/villa_kras_pool.jpg` | Pool image (available for future use, e.g. a gallery) |
| `constants/i18n/index.js` | Translation strings (5 languages) |
| `js/i18n.js` | Language switcher |

| `DESIGN.md` | This file |

---

## 17. Future Improvements (ideas)

- **Gallery section** — use `villa_kras_pool.jpg` + sunset image in a simple CSS grid gallery.
- **Language toggle** — Croatian / English. Could be done with `data-lang` attributes and a JS toggle.
- **Dark mode** — a `prefers-color-scheme: dark` media query using the deep/mid palette inverted.
- **PWA** — add a `manifest.json` and a minimal service worker so guests can "install" the page to their home screen for offline access.
- **Sticky section nav** — a horizontal pill-scroll nav below the hero for jumping to sections (especially useful on mobile).
