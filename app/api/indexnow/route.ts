import { type NextRequest, NextResponse } from "next/server";
import { notifyIndexNow } from "@/lib/indexnow";

/**
 * POST /api/indexnow
 *
 * Triggers an IndexNow submission for a list of URLs. Secured by the
 * `x-internal-secret` header, which must match `process.env.INTERNAL_API_SECRET`.
 *
 * Note: the internal secret is NOT the IndexNow public key — it is a private
 * server-side token used solely to gate this outbound call so that random
 * visitors cannot trigger IndexNow submissions on our behalf.
 *
 * Body: `{ "urls": string[] }` — max 10 000 URLs per call.
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-internal-secret");

  if (!secret || secret !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const urls = (body as { urls?: unknown })?.urls;

  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json(
      { error: "`urls` array required (non-empty)" },
      { status: 400 },
    );
  }

  if (!urls.every((u): u is string => typeof u === "string")) {
    return NextResponse.json(
      { error: "`urls` must contain only strings" },
      { status: 400 },
    );
  }

  await notifyIndexNow(urls);

  return NextResponse.json({ ok: true, submitted: urls.length });
}
