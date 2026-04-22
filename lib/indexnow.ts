/**
 * IndexNow helper — notify Bing / Yandex / Naver / Seznam / Yep when URLs change.
 *
 * Server-only. Must not be imported from client components. The function
 * reads `INDEXNOW_API_KEY` from `process.env` — exposing it to the client
 * would leak the key (which is public by design of the protocol, but still
 * pointless to ship in bundles).
 *
 * Max 10 000 URLs per call (IndexNow spec). All failures are logged and
 * swallowed — IndexNow must never block the business flow that calls it.
 *
 * See `docs/INDEXNOW.md` and the shared plan
 * `elpi-corp:analysis/bing-indexnow-implementation-plan-2026-04-22.md`.
 */
export async function notifyIndexNow(urls: string[]): Promise<void> {
  const apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey) {
    console.warn("[IndexNow] INDEXNOW_API_KEY missing — skip.");
    return;
  }

  if (urls.length === 0) return;

  if (urls.length > 10_000) {
    console.warn(
      `[IndexNow] ${urls.length} URLs exceeds the 10 000 per-request limit — truncating.`,
    );
    urls = urls.slice(0, 10_000);
  }

  let host: string;
  try {
    host = new URL(urls[0]).hostname;
  } catch (error) {
    console.error("[IndexNow] Invalid URL in urlList:", urls[0], error);
    return;
  }

  const payload = {
    host,
    key: apiKey,
    keyLocation: `https://${host}/${apiKey}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (response.status === 429) {
      console.warn(
        "[IndexNow] Rate limit reached (429). Reduce submission frequency.",
      );
      return;
    }

    if (!response.ok && response.status !== 202) {
      const text = await response.text().catch(() => "");
      console.error(`[IndexNow] Error ${response.status}: ${text}`);
      return;
    }

    console.log(
      `[IndexNow] ${urls.length} URL(s) submitted — status ${response.status}`,
    );
  } catch (error) {
    // Never block the business flow for an IndexNow failure.
    console.error("[IndexNow] Network error:", error);
  }
}
