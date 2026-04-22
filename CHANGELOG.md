# Changelog

All notable changes to vantageteam.dev are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed

- fix(cta): replace personal Telegram link (`t.me/laurentperello`) with the VantageTeam dedicated Book-a-call calendar link (`https://calendar.app.google/ZuvZW6KfAcMEz74C6`) across the site. Two shared components were updated — `components/team-landing/team-footer.tsx` (footer contact) and `components/team-landing/team-cta.tsx` (CTA section) — which together render on the 8 pages flagged by the Ahrefs audit (2026-04-22). Anchor text is locale-appropriate: EN "Book a call" / "Book a slot", FR "Réserver un appel" / "Réserver un créneau". Links open in a new tab with `rel="noopener noreferrer"` and descriptive `aria-label`s. Primary `mailto:` contact paths are preserved.
- fix(seo): correct `itemReviewed` `@type` from `Service` to `Organization` for Schema.org Review validity on the VantageTeam landing page. Resolves the Google Search Console critical error "Invalid object type for field itemReviewed" (1 item, first detected 2026-04-22). The reviewed entity now references the existing Organization node via `@id`, and the JSON-LD includes `name` and `url` on the Thing. Applied to both `en` and `fr` locales in `components/team-landing/team-structured-data.tsx`. Note: review rich-result (stars) eligibility is a separate concern governed by Google's self-serving reviews policy and is out of scope for this fix.
