# Changelog

All notable changes to vantageteam.dev are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- feat(seo): IndexNow protocol — key file, helper, API route, docs (mission k575k6wxqnfppf0wkknmc6dgjn85a9r7). Adds `public/2ee69d41-b7ae-47b4-8c75-eeccdf6d3047.txt` (proof-of-ownership), `lib/indexnow.ts` (server-only `notifyIndexNow(urls)` helper), `app/api/indexnow/route.ts` (POST endpoint gated by `x-internal-secret`), `.env.example` (documents `INDEXNOW_API_KEY`, `INTERNAL_API_SECRET`, `NEXT_PUBLIC_SITE_URL`), and `docs/INDEXNOW.md`. Vercel env vars `INDEXNOW_API_KEY` + `INTERNAL_API_SECRET` still need to be set in the dashboard post-merge; no publish pipeline auto-triggers IndexNow yet — the helper is ready as a hook point.

### Fixed

- fix(cta): header sticky Book-a-Call buttons now route to calendar (was mailto, matches PR #13)
- fix(cta): primary "Book a Call" button now routes to calendar link (was mailto, inconsistent with icon+label)
- fix(cta): replace personal Telegram link (`t.me/laurentperello`) with the VantageTeam dedicated Book-a-call calendar link (`https://calendar.app.google/ZuvZW6KfAcMEz74C6`) across the site. Two shared components were updated — `components/team-landing/team-footer.tsx` (footer contact) and `components/team-landing/team-cta.tsx` (CTA section) — which together render on the 8 pages flagged by the Ahrefs audit (2026-04-22). Anchor text is locale-appropriate: EN "Book a call" / "Book a slot", FR "Réserver un appel" / "Réserver un créneau". Links open in a new tab with `rel="noopener noreferrer"` and descriptive `aria-label`s. Primary `mailto:` contact paths are preserved.
- fix(seo): correct `itemReviewed` `@type` from `Service` to `Organization` for Schema.org Review validity on the VantageTeam landing page. Resolves the Google Search Console critical error "Invalid object type for field itemReviewed" (1 item, first detected 2026-04-22). The reviewed entity now references the existing Organization node via `@id`, and the JSON-LD includes `name` and `url` on the Thing. Applied to both `en` and `fr` locales in `components/team-landing/team-structured-data.tsx`. Note: review rich-result (stars) eligibility is a separate concern governed by Google's self-serving reviews policy and is out of scope for this fix.
