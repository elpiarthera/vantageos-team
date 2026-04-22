# IndexNow — vantageteam.dev

**Date:** 2026-04-22
**Mission:** `k575k6wxqnfppf0wkknmc6dgjn85a9r7` (Pi, Day 47)
**Shared plan:** `elpi-corp:analysis/bing-indexnow-implementation-plan-2026-04-22.md`

## What is IndexNow

IndexNow is an open protocol (Bing, Yandex, Naver, Seznam, Yep) that lets a
website push URL changes to participating search engines in real time instead
of waiting for the crawler. A single POST to `api.indexnow.org` fans out to
every participant. Authentication is proof-of-ownership: we host a plain-text
file at the root of the domain containing the key.

Google does NOT support IndexNow — for Google we keep relying on the sitemap,
`lastmod`, internal linking, and Search Console URL Inspection.

## Key file

- **Location:** `public/2ee69d41-b7ae-47b4-8c75-eeccdf6d3047.txt`
- **Served at:** `https://www.vantageteam.dev/2ee69d41-b7ae-47b4-8c75-eeccdf6d3047.txt`
- **Contents:** the UUID `2ee69d41-b7ae-47b4-8c75-eeccdf6d3047` in plain text,
  UTF-8, no trailing newline, 36 bytes exactly.
- **Key (reminder):** `2ee69d41-b7ae-47b4-8c75-eeccdf6d3047` — public by design
  (see plan §8). Do not confuse with Alpha's `perello.consulting` key
  (`fc0c7f27-23f7-4061-88b0-12bd2434a3b2`).

## Files in this repo

| File | Role |
|------|------|
| `public/2ee69d41-b7ae-47b4-8c75-eeccdf6d3047.txt` | Proof-of-ownership key file |
| `lib/indexnow.ts` | Server-only helper `notifyIndexNow(urls)` |
| `app/api/indexnow/route.ts` | Secured POST endpoint for external triggers |

## Environment variables

Add to Vercel Dashboard → Project → Settings → Environment Variables
(scope: **Production**, and optionally Preview):

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.vantageteam.dev` |
| `INDEXNOW_API_KEY` | `2ee69d41-b7ae-47b4-8c75-eeccdf6d3047` |
| `INTERNAL_API_SECRET` | Generate with `openssl rand -hex 32` |

`INDEXNOW_API_KEY` must also exist at the server runtime — without it,
`notifyIndexNow()` logs a warning and no-ops. `INTERNAL_API_SECRET` is the
gate on `POST /api/indexnow` and MUST stay private.

## Usage

### From a Server Action or Route Handler

```ts
import { notifyIndexNow } from "@/lib/indexnow";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
await notifyIndexNow([`${siteUrl}/${locale}/${slug}`]);
```

The helper never throws — failures are logged. Safe to await in any publish
pipeline.

### From an external trigger (curl, cron, CI)

```bash
curl -X POST https://www.vantageteam.dev/api/indexnow \
  -H "content-type: application/json" \
  -H "x-internal-secret: $INTERNAL_API_SECRET" \
  -d '{"urls":["https://www.vantageteam.dev/en","https://www.vantageteam.dev/fr"]}'
```

Expected response: `200 {"ok":true,"submitted":2}`.
Missing/invalid secret → `401`. Missing/invalid `urls` → `400`.

## Verification (post-deploy)

1. **Key file reachable:**
   ```bash
   curl -sI https://www.vantageteam.dev/2ee69d41-b7ae-47b4-8c75-eeccdf6d3047.txt
   # Expect: HTTP/2 200, content-type: text/plain
   ```

2. **Key validation via IndexNow:**
   ```bash
   curl -sI "https://api.indexnow.org/indexnow?url=https://www.vantageteam.dev/&key=2ee69d41-b7ae-47b4-8c75-eeccdf6d3047"
   # Expect: 200 (success) or 202 (accepted, validation pending)
   ```

3. **Bing Webmaster Tools:** add the site (or confirm the existing entry),
   open **IndexNow** → the key should show as verified within 24h of the
   first successful submission. URL Submission → confirm quotas.

## Current integration status

No active publish pipeline on `vantageteam.dev` today calls `notifyIndexNow()`
automatically. The helper + API route are ready as the hook point for when a
CMS-driven publish flow or a scheduled sitemap-change detector lands.

Typical hook points to add when such a flow exists:
- MDX/blog publish Server Action → call `notifyIndexNow([url])` after the
  underlying write succeeds.
- Cron that diffs the sitemap → POST the changed URLs to `/api/indexnow` with
  the internal secret.

## Gotchas (from the shared plan §8)

- Do not submit the same URL more than once every 5 minutes.
- Do not submit draft / preview / `noindex` URLs.
- Do not submit URLs for a different host — IndexNow returns `422`.
- The IndexNow key is **public** by design. `INTERNAL_API_SECRET` is the one
  that must stay secret.
- On Vercel, `process.env.INDEXNOW_API_KEY` must be declared in the Dashboard
  — `.env.example` documents it but does not propagate to the runtime.

## References

- Shared plan: `elpi-corp:analysis/bing-indexnow-implementation-plan-2026-04-22.md`
- IndexNow official docs: https://www.indexnow.org/documentation
- Bing Webmaster Tools — IndexNow: https://www.bing.com/indexnow
