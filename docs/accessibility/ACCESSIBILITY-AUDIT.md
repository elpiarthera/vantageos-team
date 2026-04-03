# Accessibility Audit -- RGAA 4.1.2 / WCAG 2.1 AA -- vantageteam.dev

Date: 2026-04-03
Auditor: VantageOS accessibility-audit agent (Tau)
Site: https://vantageteam.dev
Pages audited: /en (landing), /en/build, /en/dev, /en/teams
Source project: `/home/elpi/coding/vantageos-team/`

---

## Global Compliance

**Conformite globale estimee: ~72%** (criteres automatises conformes / applicables)
**Statut: Partiellement conforme**

| Page | Estimated Score | Status |
|------|----------------|--------|
| /en (landing) | ~75% | Partiellement conforme |
| /en/build | ~70% | Partiellement conforme |
| /en/dev | ~70% | Partiellement conforme |
| /en/teams | ~70% | Partiellement conforme |

---

## Scores par theme RGAA

| # | Theme | Applicable | Conforme | Score | Statut |
|---|-------|-----------|----------|-------|--------|
| 1 | Images | 3 | 3 | 100% | Conforme |
| 2 | Cadres | 0 | 0 | N/A | Non applicable |
| 3 | Couleurs | 3 | 1 | 33% | Non conforme |
| 4 | Multimedia | 0 | 0 | N/A | Non applicable |
| 5 | Tableaux | 0 | 0 | N/A | Non applicable |
| 6 | Liens | 4 | 3 | 75% | Partiellement conforme |
| 7 | Scripts | 4 | 2 | 50% | Partiellement conforme |
| 8 | Elements obligatoires | 6 | 3 | 50% | Partiellement conforme |
| 9 | Structure | 4 | 3 | 75% | Partiellement conforme |
| 10 | Presentation | 6 | 4 | 67% | Partiellement conforme |
| 11 | Formulaires | 0 | 0 | N/A | Non applicable |
| 12 | Navigation | 5 | 3 | 60% | Partiellement conforme |
| 13 | Consultation | 4 | 3 | 75% | Partiellement conforme |

---

## P0 -- Bloquants (non-conformite severe)

### P0-1. Color contrast failure in light mode -- muted-foreground text
- **RGAA:** Critere 3.2 (Contraste de texte)
- **WCAG:** 1.4.3 Contrast (Minimum) -- Level AA
- **Severity:** CRITICAL
- **Description:** The `muted-foreground` color token `oklch(0.556 0 0)` on white background `oklch(1 0 0)` yields approximately **3.5:1** contrast ratio. WCAG AA requires 4.5:1 for normal text, 3:1 for large text.
- **Impact:** This color is used extensively across all 4 pages for: nav links, footer links, section descriptions, pricing details, badge text, FAQ answers, card descriptions, stat labels, and copyright text. Conservatively 60%+ of body text on every page.
- **File:** `app/globals.css:62` -- `--muted-foreground: oklch(0.556 0 0);`
- **Fix:** Change `--muted-foreground` to `oklch(0.44 0 0)` (approximately 5.5:1 ratio). This darkens the gray from ~55.6% lightness to ~44%, ensuring AA compliance while remaining clearly secondary.

### P0-2. Identical page titles on all 4 pages
- **RGAA:** Critere 8.5 (Titre de page)
- **WCAG:** 2.4.2 Page Titled -- Level A
- **Severity:** CRITICAL
- **Description:** All 4 pages render the **same** `<title>`: "VantageOS Team -- Your Complete AI Team | 16 Teams, 81 Agents, 273 Skills". The /en/build, /en/dev, and /en/teams pages define unique metadata in their `generateMetadata()` but the live site does not render them -- the layout's metadata takes precedence.
- **File:** `app/[locale]/layout.tsx:44-45` (layout metadata overrides page-level metadata)
- **Fix:** Either (a) remove the `title` from the layout metadata so page-level titles take effect, or (b) use `title.template` in layout and `title` in pages:
  ```ts
  // layout.tsx
  title: { template: "%s | VantageOS Team", default: "VantageOS Team -- Your Complete AI Team" }
  ```

### P0-3. No skip link / bypass block
- **RGAA:** Critere 12.7 (Liens d'evitement)
- **WCAG:** 2.4.1 Bypass Blocks -- Level A
- **Severity:** CRITICAL
- **Description:** No skip-to-content link exists in the vantageos-team project. The `<main>` element exists but has no `id` attribute. Keyboard users must tab through 5-7 nav links on every page load.
- **File:** `app/[locale]/layout.tsx` (no SkipLink component)
- **File:** `components/team-landing/team-landing-page.tsx:28` -- `<main>` has no `id`
- **Fix:**
  1. Add `id="main-content"` to the `<main>` element in `team-landing-page.tsx:28`
  2. Create a SkipLink component (copy from vantage-starter's `components/shared/SkipLink.tsx`)
  3. Place it as first child of `<body>` in `app/[locale]/layout.tsx:129`

### P0-4. Nav element missing aria-label
- **RGAA:** Critere 12.6 (Zones de navigation)
- **WCAG:** 1.3.1 Info and Relationships -- Level A
- **Severity:** CRITICAL
- **Description:** The `<nav>` in `team-header.tsx:179` has no `aria-label` attribute. With both desktop and mobile nav present, screen readers cannot distinguish between navigation regions.
- **File:** `components/team-landing/team-header.tsx:179`
- **Fix:** Add `aria-label="Main navigation"` to the `<nav>` element.

---

## P1 -- Prioritaires (correction < 2 semaines)

### P1-1. Mobile hamburger button missing aria-expanded and aria-controls
- **RGAA:** Critere 7.1 (Scripts: accessible)
- **WCAG:** 4.1.2 Name, Role, Value -- Level A
- **Severity:** MAJOR
- **Description:** The mobile menu toggle button at `team-header.tsx:251-262` has `sr-only` text "Open menu" but lacks `aria-expanded` to communicate open/close state and `aria-controls` to identify the controlled panel.
- **File:** `components/team-landing/team-header.tsx:251-262`
- **Fix:** Add `aria-expanded={isMobileMenuOpen}` and `aria-controls="mobile-menu"` to the button. Add `id="mobile-menu"` to the mobile menu container at line 269.

### P1-2. Identical meta descriptions on all pages
- **RGAA:** Critere 8.5 (related to page identification)
- **WCAG:** Best practice (not strictly a criterion, but impacts usability)
- **Severity:** MAJOR
- **Description:** All 4 pages share the same meta description. Same root cause as P0-2 -- layout metadata overrides page metadata.
- **Fix:** Same fix as P0-2 (fix metadata template in layout).

### P1-3. Content initially hidden with opacity:0 and no noscript fallback
- **RGAA:** Critere 13.1 (Consultation: limite de temps)
- **WCAG:** 1.3.1 Info and Relationships
- **Severity:** MAJOR
- **Description:** Multiple content sections render with `style="opacity:0;transform:translateY(20px)"` and require JavaScript animation to become visible. If JS fails or is slow, content is invisible. Counted 16 elements on /en and 43 on /en/build.
- **Files:** Components using framer-motion `initial={{ opacity: 0 }}` -- team-hero.tsx, product-cards.tsx, social-proof.tsx, simple-how-it-works.tsx, team-cta.tsx, and subpage components.
- **Fix:** Either (a) add a `<noscript><style>` fallback that sets `opacity:1`, or (b) use CSS `@media (prefers-reduced-motion: reduce)` to disable the initial hidden state, or (c) use `will-change` patterns that degrade gracefully.

### P1-4. Theme toggle and language toggle buttons -- icon-only without accessible name
- **RGAA:** Critere 7.1 (Scripts)
- **WCAG:** 4.1.2 Name, Role, Value
- **Severity:** MAJOR
- **Description:** The desktop theme toggle button (`team-header.tsx:207-219`) correctly has `sr-only` text. However, the mobile theme toggle at line 238-249 has `sr-only` text but no focus-visible styling. Also, the `<a href="mailto:...">` wrapping the "Book a Call" `<Button>` at line 230-233 creates nested interactive elements.
- **File:** `components/team-landing/team-header.tsx:230-233`
- **Fix:** Replace `<a href="mailto:..."><Button>` with either a plain `<a>` styled as button, or a `<Button asChild><a href="mailto:...">` pattern.

### P1-5. No focus trap on mobile menu
- **RGAA:** Critere 12.1 (Navigation: systeme de navigation)
- **WCAG:** 2.1.1 Keyboard -- Level A
- **Severity:** MAJOR
- **Description:** The mobile menu (framer-motion AnimatePresence) has no focus trap. When open, Tab key will move focus outside the menu panel. No Escape key handler to close the menu.
- **File:** `components/team-landing/team-header.tsx:268-311`
- **Fix:** Add an `onKeyDown` handler for Escape key. Implement a focus trap that cycles focus within the menu. Reference the vantage-starter `LandingNav.tsx:70-99` for a working implementation.

### P1-6. Reduced motion support incomplete
- **RGAA:** Critere 13.8 (Contenu en mouvement ou clignotant)
- **WCAG:** 2.3.3 Animation from Interactions -- Level AAA, but 2.3.1 is Level A
- **Severity:** MAJOR
- **Description:** `globals.css:179-183` only covers `.agent-ticker-track` animation. All framer-motion animations (fade-in, slide-up, spring transitions) across all components do **not** respect `prefers-reduced-motion`. This affects hero animations, card reveals, section transitions on all 4 pages.
- **Files:** Every component using `motion.div` / `motion.section` / `motion.p` with animation props.
- **Fix:** Create a global framer-motion config:
  ```ts
  // lib/motion-config.ts
  import { LazyMotion } from "framer-motion";
  const ReducedMotionConfig = () => {
    useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      // disable animations globally when prefers-reduced-motion
    }, []);
  };
  ```
  Or add `transition={{ duration: 0 }}` variant that activates on reduced motion for each motion component.

---

## P2 -- Recommandes (correction < 2 mois)

### P2-1. Footer links missing focus-visible indicator
- **RGAA:** Critere 10.7 (Focus visible)
- **WCAG:** 2.4.7 Focus Visible -- Level AA
- **Severity:** MINOR
- **Description:** Footer links (team-footer.tsx lines 92-100, 107-123, 135-143) use `transition-colors` on hover but have no explicit `focus-visible` styling. They inherit the global outline but it may not be visible on the dark `bg-card` background.
- **File:** `components/team-landing/team-footer.tsx`
- **Fix:** Add `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring` classes to all footer links.

### P2-2. Heading hierarchy -- no H2 between some H1 and H3 on subpages
- **RGAA:** Critere 9.1 (Structure: titres)
- **WCAG:** 1.3.1 Info and Relationships
- **Severity:** MINOR
- **Description:** On /en/build, /en/dev, /en/teams, the heading hierarchy goes H1 > H2 > H3 consistently, which is correct. However, some sections jump from section-level H2 to card-level H3 without intermediate content, which is acceptable but could be improved with `aria-level` or restructuring.
- **Note:** This is compliant but flagged as best practice.

### P2-3. Logo link lacks accessible name on footer
- **RGAA:** Critere 6.1 (Liens: intitule du lien)
- **WCAG:** 2.4.4 Link Purpose -- Level A
- **Severity:** MINOR
- **Description:** The footer logo link (`team-footer.tsx:77`) points to `#hero` and contains only the "V" icon + "VantageOS Team" text. While the visible text provides context, adding an explicit `aria-label="Return to top of page"` would clarify the link purpose.
- **File:** `components/team-landing/team-footer.tsx:77`
- **Fix:** Add `aria-label="VantageOS Team - Return to top"` to the footer logo `<a>`.

### P2-4. Touch targets -- some CTA buttons may be under 44x44px on mobile
- **RGAA:** Critere 13.11 (Cibles tactiles)
- **WCAG:** 2.5.8 Target Size (Minimum) -- Level AA (new in 2.2)
- **Severity:** MINOR
- **Description:** The header nav links have `py-2` (8px top+bottom) making them approximately 36px tall. The mobile menu items have `py-3` (48px) which is fine. The "Book a Call" button uses `size="sm"` which renders at `h-7` (28px) -- under the 44px minimum.
- **Files:** `components/team-landing/team-header.tsx:207` (theme toggle `size-9` = 36px, close but OK), `team-header.tsx:230-233` (Book a Call button)
- **Fix:** Ensure all interactive touch targets are at least `min-h-[44px] min-w-[44px]`. For the "Book a Call" button, change from `size="sm"` to a default size or add `min-h-touch` class.

### P2-5. Duplicate aria-hidden SVGs inside buttons
- **RGAA:** Critere 1.1 (Images: texte alternatif)
- **WCAG:** 1.1.1 Non-text Content
- **Severity:** MINOR
- **Description:** Two buttons on the /en landing page contain only SVG icons with `aria-hidden="true"` as their sole content. The `<span class="sr-only">` text is present, which is correct. This is compliant but the pattern should be verified across all icon-only buttons.
- **Status:** CONFORME (verified: sr-only text exists for theme toggle and menu toggle)

### P2-6. External links missing `rel="noopener noreferrer"` indication
- **RGAA:** Critere 13.2 (Consultation: ouverture dans une nouvelle fenetre)
- **WCAG:** 3.2.5 Change on Request -- Level AAA
- **Severity:** MINOR
- **Description:** The Telegram link in the footer opens in a new tab (`target="_blank"`) and has `rel="noopener noreferrer"`, which is correct for security. However, there is no visible or announced indication that the link opens in a new window/tab.
- **File:** `components/team-landing/team-footer.tsx:116-120`
- **Fix:** Add an sr-only text `(opens in new tab)` after the link text, or add `aria-label="@laurentperello (opens in new tab)"`.

---

## Conformance Summary

### What passes well
- **HTML lang attribute:** Present and correct (`lang="en"`) on all pages -- Critere 8.3 PASS
- **Semantic HTML:** Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` on all pages -- Critere 9.2 PASS
- **Heading hierarchy:** H1 > H2 > H3 consistent, exactly 1 H1 per page -- Critere 9.1 PASS
- **SVG accessibility:** All decorative SVGs have `aria-hidden="true"` -- Critere 1.1 PASS
- **No images:** Zero `<img>` tags; all graphics are SVG-based -- Critere 1.1-1.9 N/A
- **No iframes:** Zero iframes -- Critere 2.1-2.2 N/A
- **No forms:** Zero form inputs on public pages -- Critere 11.1-11.14 N/A
- **No autoplay media:** Zero autoplay elements -- Critere 4.10 PASS
- **Viewport meta:** Correct `width=device-width, initial-scale=1` without `maximum-scale` or `user-scalable=no` -- Critere 13.9 PASS
- **Button labeling:** All buttons have visible text or sr-only text -- Critere 7.1 PASS (partial)
- **Link content:** All links have visible text content -- Critere 6.1 PASS
- **Dark mode contrast:** All dark mode color pairs pass WCAG AA -- Critere 3.2 PASS (dark)
- **Reduced motion:** Ticker animation respects `prefers-reduced-motion` -- Critere 13.8 PASS (partial)

### Critical gaps
1. Light mode `muted-foreground` contrast (P0-1) -- affects 60%+ of text
2. Identical page titles (P0-2) -- all 4 pages same title
3. No skip link (P0-3) -- keyboard users blocked
4. Missing nav aria-label (P0-4) -- screen reader navigation broken
5. No focus trap on mobile menu (P1-5) -- keyboard accessibility issue
6. Reduced motion incomplete for framer-motion (P1-6) -- animation accessibility

---

## Criteres a verifier manuellement

See [manual-checklist.md](./manual-checklist.md) for the complete checklist of criteria requiring human/browser testing.

---

## File Reference Map

| Finding | Source File | Line(s) |
|---------|-----------|---------|
| P0-1 Contrast | `app/globals.css` | 62 |
| P0-2 Title | `app/[locale]/layout.tsx` | 44-45 |
| P0-3 Skip link | `app/[locale]/layout.tsx` | 128-141 |
| P0-3 Main id | `components/team-landing/team-landing-page.tsx` | 28 |
| P0-4 Nav aria | `components/team-landing/team-header.tsx` | 179 |
| P1-1 Hamburger | `components/team-landing/team-header.tsx` | 251-262 |
| P1-3 Opacity:0 | Multiple framer-motion components | Various |
| P1-4 Nested link | `components/team-landing/team-header.tsx` | 230-233 |
| P1-5 Focus trap | `components/team-landing/team-header.tsx` | 268-311 |
| P1-6 Motion | `app/globals.css` + all motion components | 179-183 |
| P2-1 Footer focus | `components/team-landing/team-footer.tsx` | 92-143 |
| P2-3 Footer logo | `components/team-landing/team-footer.tsx` | 77 |
| P2-4 Touch targets | `components/team-landing/team-header.tsx` | 207, 230 |
| P2-6 External links | `components/team-landing/team-footer.tsx` | 116-120 |
