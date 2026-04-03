import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration — VantageTeam e2e suite
 *
 * Runs against the live site at https://vantageteam.dev by default.
 * Override with PLAYWRIGHT_BASE_URL env var.
 *
 * Browserbase: when BROWSERBASE_API_KEY + BROWSERBASE_PROJECT_ID are set,
 * tests run on Browserbase cloud browsers via connectOverCDP.
 * Falls back to local Chromium when env vars are absent.
 */

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "https://vantageteam.dev",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
    locale: "en-US",
  },
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chromium",
        launchOptions: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      },
    },
  ],
});
