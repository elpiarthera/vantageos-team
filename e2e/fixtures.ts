/**
 * Playwright fixtures — Browserbase session management.
 *
 * When BROWSERBASE_API_KEY + BROWSERBASE_PROJECT_ID are present, each test
 * worker gets its own Browserbase session via connectOverCDP.
 *
 * Falls back to standard Playwright browser when BB keys are absent.
 *
 * Usage in test files:
 *   import { test, expect } from "./fixtures";
 */

import { type Browser, test as base, chromium } from "@playwright/test";

export { expect } from "@playwright/test";

const hasBrowserbase =
  !!process.env.BROWSERBASE_API_KEY && !!process.env.BROWSERBASE_PROJECT_ID;

type BbFixtures = {
  browser: Browser;
};

export const test = base.extend<BbFixtures>({
  browser: [
    // biome-ignore lint/correctness/noEmptyPattern: Playwright requires destructuring
    async ({}, use) => {
      if (!hasBrowserbase) {
        const browser = await chromium.launch({
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        await use(browser);
        await browser.close();
        return;
      }

      const Browserbase = (await import("@browserbasehq/sdk")).default;
      const apiKey = process.env.BROWSERBASE_API_KEY as string;
      const projectId = process.env.BROWSERBASE_PROJECT_ID as string;
      const contextId = process.env.BB_CONTEXT_ID;

      const bb = new Browserbase({ apiKey });

      const session = await bb.sessions.create({
        projectId,
        ...(contextId
          ? {
              browserSettings: {
                context: { id: contextId, persist: true },
              },
            }
          : {}),
      });

      const browser = await chromium.connectOverCDP(session.connectUrl, {
        timeout: 30_000,
      });

      await use(browser);
      await browser.close();
    },
    { scope: "worker" },
  ],
});
