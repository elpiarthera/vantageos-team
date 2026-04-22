# Changelog

All notable changes to vantageteam.dev are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed

- fix(seo): correct `itemReviewed` `@type` from `Service` to `Organization` for Schema.org Review validity on the VantageTeam landing page. Google Search Console flagged 1 critical item ("Invalid object type for field itemReviewed") on 2026-04-22, blocking rich-result eligibility for the whole domain. The reviewed entity now references the existing Organization node via `@id`, and the JSON-LD includes `name` and `url` on the Thing. Applied to both `en` and `fr` locales in `components/team-landing/team-structured-data.tsx`.
