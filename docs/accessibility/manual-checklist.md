# Manual Verification Checklist -- vantageteam.dev

Date: 2026-04-03
These criteria require human testing with a browser, screen reader, or assistive technology.

## Theme 1 -- Images
- [ ] **1.3** Alt text relevance (no images on site, but verify SVG context is adequate)
- [ ] **1.7** Decorative images correctly marked (all SVGs have aria-hidden -- verify none convey meaning)

## Theme 3 -- Couleurs
- [ ] **3.1** Color is not the sole means of conveying information (check active nav state, pricing highlights)
- [ ] **3.2** Verify computed contrast ratios with browser DevTools color picker on live site (light + dark mode)
- [ ] **3.3** Contrast of non-text elements (borders, icons, separators) -- minimum 3:1

## Theme 6 -- Liens
- [ ] **6.1** All links have a clear, unambiguous purpose from link text alone or surrounding context
- [ ] **6.2** Links with identical text but different destinations (check "Get Started" buttons on subpages -- do they all go to the same place?)

## Theme 7 -- Scripts
- [ ] **7.1** All JavaScript-powered interactions are keyboard-accessible (test theme toggle, language toggle, mobile menu, CTA buttons)
- [ ] **7.3** Test all interactive elements with screen reader (NVDA, VoiceOver) -- verify announcements are correct
- [ ] **7.5** Status messages are announced (check if theme/language changes produce an aria-live announcement)

## Theme 9 -- Structure
- [ ] **9.3** Verify landmark regions are logically grouped (header, nav, main, footer)
- [ ] **9.4** Check that lists are properly marked up (feature lists, pricing items)

## Theme 10 -- Presentation
- [ ] **10.1** Verify page is usable at 200% zoom on all 4 pages
- [ ] **10.2** Verify page is usable with CSS disabled -- content should remain readable
- [ ] **10.3** Verify reading order matches visual order (especially hero stats, pricing cards)
- [ ] **10.7** Test focus indicator visibility on all interactive elements: nav links, buttons, footer links, mobile menu items (keyboard-only test)
- [ ] **10.11** Verify content reflows at 320px viewport width (no horizontal scrolling)
- [ ] **10.12** Test with high contrast mode (Windows) or forced colors mode

## Theme 12 -- Navigation
- [ ] **12.1** Full keyboard navigation test: Tab through entire page, verify logical order, all elements reachable
- [ ] **12.2** Test mobile menu keyboard interaction: open, navigate, close with Escape
- [ ] **12.6** Verify navigation consistency across all 4 pages (same nav structure, same link order)
- [ ] **12.8** Test keyboard shortcut for skip link: Tab once from page load, verify skip link appears

## Theme 13 -- Consultation
- [ ] **13.1** No time limits on content (verify no auto-dismissing notifications or toasts)
- [ ] **13.3** Verify all linked documents specify their format and size (no PDF links found, but verify)
- [ ] **13.8** Test with `prefers-reduced-motion: reduce` enabled: all animations should stop or be significantly reduced
- [ ] **13.9** Verify viewport does not block pinch-to-zoom (no `maximum-scale=1` or `user-scalable=no`)
- [ ] **13.11** Measure touch targets with DevTools: all interactive elements must be at least 44x44px
- [ ] **13.12** Test with text spacing override (letter-spacing 0.12em, word-spacing 0.16em, line-height 1.5, paragraph spacing 2em) -- no content loss

## Screen Reader Tests (NVDA / VoiceOver)
- [ ] Page title is announced correctly on each page
- [ ] Landmarks are announced (header, navigation, main, footer)
- [ ] All headings are navigable via H key
- [ ] All links are navigable via K key (NVDA) or Tab
- [ ] Button roles are announced correctly
- [ ] Theme toggle announces current state
- [ ] Language toggle announces current language
- [ ] Mobile menu open/close state is announced
- [ ] No content is trapped in an aria-hidden region

## Priority Order for Testing
1. **Light mode contrast** -- verify P0-1 with real color picker
2. **Keyboard navigation** -- full Tab test on each page
3. **Screen reader** -- test with NVDA or VoiceOver on landing page
4. **Mobile** -- test touch targets, menu interaction on real device
5. **Reduced motion** -- enable system setting, verify all animations stop
