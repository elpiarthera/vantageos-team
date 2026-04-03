/**
 * VantageTeam.dev — End-to-end test suite
 *
 * Tests the live site at https://vantageteam.dev (or PLAYWRIGHT_BASE_URL).
 * 8 tests covering: landing, /build, /dev, /teams, i18n FR, i18n EN,
 * mobile viewport, and dark/light theme toggle.
 */

import { test, expect } from "./fixtures";

test.describe("VantageTeam.dev — Landing & Pages", () => {
  test("1. Landing page loads with hero content", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Hero section should be visible with key content
    const hero = page.locator("#hero");
    await expect(hero).toBeVisible({ timeout: 15_000 });

    // Check for the main headline text
    await expect(page.getByText("Your vision.")).toBeVisible();
    await expect(page.getByText("Built by AI agents.")).toBeVisible();

    // Stats should be visible
    await expect(page.getByText("$2,990").first()).toBeVisible();

    // CTA buttons
    await expect(page.getByText("Book a Free Call")).toBeVisible();

    await page.screenshot({ path: "screenshots/01-landing-hero.png", fullPage: false });
  });

  test("2. /build page — pricing tiers, FAQ, CTA", async ({ page }) => {
    await page.goto("/build");
    await page.waitForLoadState("domcontentloaded");

    // Wait for page content to load
    await expect(page.locator("body")).toBeVisible({ timeout: 15_000 });

    // Pricing section should have tier content — look for price indicators
    // The build page has 4 tiers: T1, T2, T3, and On-demand/custom
    await expect(page.getByText("$2,990").first()).toBeVisible({ timeout: 10_000 });

    // FAQ section should exist
    const faqSection = page.locator("text=FAQ").first();
    await expect(faqSection).toBeVisible();

    // CTA: "Book a Call" variant
    const bookCallButton = page.getByText(/Book a (Free )?Call/i).first();
    await expect(bookCallButton).toBeVisible();

    await page.screenshot({ path: "screenshots/02-build-page.png", fullPage: false });
  });

  test("3. /dev page — pricing tiers, SLA, case study", async ({ page }) => {
    await page.goto("/dev");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("body")).toBeVisible({ timeout: 15_000 });

    // Pricing tiers — the dev page has 3 tiers
    await expect(page.getByText("$990").first()).toBeVisible({ timeout: 10_000 });

    // SLA section — check for SLA-related content
    const slaContent = page.getByText(/SLA/i).first();
    await expect(slaContent).toBeVisible();

    // Case study section — headline is "One client. 37 issues. 2 days."
    const caseStudy = page.getByText("One client. 37 issues. 2 days.").first();
    await expect(caseStudy).toBeVisible();

    await page.screenshot({ path: "screenshots/03-dev-page.png", fullPage: false });
  });

  test("4. /teams page — teams listed, pricing tiers", async ({ page }) => {
    await page.goto("/teams");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("body")).toBeVisible({ timeout: 15_000 });

    // Pricing with 3 tiers — check for price markers
    await expect(page.getByText("$990/mo").first()).toBeVisible({ timeout: 10_000 });

    // Team names should be visible (Marketing, SEO, Content, etc.)
    await expect(page.getByText(/Marketing/i).first()).toBeVisible();

    await page.screenshot({ path: "screenshots/04-teams-page.png", fullPage: false });
  });

  test("5. i18n FR — French content with accents", async ({ page }) => {
    await page.goto("/fr");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("#hero")).toBeVisible({ timeout: 15_000 });

    // French hero text
    await expect(page.getByText("Votre vision.")).toBeVisible();
    await expect(page.getByText("Construite par des agents IA.")).toBeVisible();

    // French CTA
    await expect(page.getByText("Réserver un appel gratuit")).toBeVisible();

    // Check accented characters are rendered
    const bodyText = await page.locator("body").textContent();
    expect(bodyText).toContain("é");

    await page.screenshot({ path: "screenshots/05-i18n-fr.png", fullPage: false });
  });

  test("6. i18n EN — English content", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("#hero")).toBeVisible({ timeout: 15_000 });

    // English content
    await expect(page.getByText("Your vision.")).toBeVisible();
    await expect(page.getByText("Book a Free Call")).toBeVisible();

    // Verify English stats
    await expect(page.getByText("100%")).toBeVisible();
    await expect(page.getByText("Your code")).toBeVisible();

    await page.screenshot({ path: "screenshots/06-i18n-en.png", fullPage: false });
  });

  test("7. Mobile viewport — content loads without overflow", async ({ page }) => {
    // iPhone 13 viewport
    await page.setViewportSize({ width: 375, height: 812 });

    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("#hero")).toBeVisible({ timeout: 15_000 });

    // Check that the body does not have horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5); // 5px tolerance

    // Content should still be visible
    await expect(page.getByText("Your vision.")).toBeVisible();

    await page.screenshot({ path: "screenshots/07-mobile-viewport.png", fullPage: false });
  });

  test("8. Theme toggle — dark/light mode button exists", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("body")).toBeVisible({ timeout: 15_000 });

    // The theme toggle button — two exist (desktop + mobile), use first (desktop)
    const themeButton = page.getByRole("button", { name: "Toggle theme" }).first();
    await expect(themeButton).toBeAttached({ timeout: 10_000 });

    // Get initial theme state from <html> element
    const htmlClassBefore = await page.locator("html").getAttribute("class") ?? "";
    const htmlStyleBefore = await page.locator("html").getAttribute("style") ?? "";
    const initialState = htmlClassBefore + htmlStyleBefore;

    // Click the toggle
    await themeButton.click();
    await page.waitForTimeout(1000);

    // Verify something changed — class or style or color-scheme
    const htmlClassAfter = await page.locator("html").getAttribute("class") ?? "";
    const htmlStyleAfter = await page.locator("html").getAttribute("style") ?? "";
    const afterState = htmlClassAfter + htmlStyleAfter;

    expect(afterState).not.toEqual(initialState);

    await page.screenshot({ path: "screenshots/08-theme-toggle.png", fullPage: false });
  });
});
