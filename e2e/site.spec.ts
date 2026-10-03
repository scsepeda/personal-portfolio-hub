import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("page health", () => {
  test("loads without uncaught errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Samantha");
    expect(errors).toEqual([]);
  });

  test("has title and description for search and link previews", async ({ page }) => {
    await expect(page).toHaveTitle(/Samantha Sepeda/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{50,}/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Samantha Sepeda/);
  });

  test("does not block pinch zoom", async ({ page }) => {
    const viewport = await page.locator('meta[name="viewport"]').getAttribute("content");
    expect(viewport).not.toContain("maximum-scale");
    expect(viewport).not.toContain("user-scalable=no");
  });

  test("has no horizontal scroll", async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("profile photo loads", async ({ page }) => {
    const photo = page.locator("#about img");
    await expect(photo).toHaveAttribute("alt", /Samantha Sepeda/);
    await expect
      .poll(() => photo.evaluate((img: HTMLImageElement) => img.naturalWidth))
      .toBeGreaterThan(0);
  });
});

test.describe("content matches the resume", () => {
  test("hero shows current positioning", async ({ page }) => {
    const hero = page.locator("#about");
    await expect(hero.getByRole("heading", { level: 2 })).toContainText("Senior Software Engineer");
    await expect(hero).toContainText("GIC");
  });

  test("GIC is the only current role and CACIB is closed", async ({ page }) => {
    const experience = page.locator("#experience");
    await expect(experience).toContainText("GIC Private Limited");
    await expect(experience).toContainText("Sep 2025 – Present");
    await expect(experience).toContainText("Crédit Agricole CIB");
    await expect(experience).toContainText("Mar 2020 – Sep 2025");
    await expect(experience.getByText("Current", { exact: true })).toHaveCount(1);
  });

  test("skills are listed without percentage bars", async ({ page }) => {
    const skills = page.locator("#skills");
    await expect(skills).toContainText(".NET");
    await expect(skills).toContainText("Angular");
    await expect(skills.getByRole("progressbar")).toHaveCount(0);
    await expect(skills).not.toContainText(/\d+%/);
  });

  test("removed claims do not reappear", async ({ page }) => {
    const main = page.locator("main");
    for (const stale of ["Results-driven", "99.9%", "15+", "8+ years"]) {
      await expect(main).not.toContainText(stale);
    }
  });

  test("all four projects render", async ({ page }) => {
    await expect(page.locator("#projects").getByRole("heading", { level: 3 })).toHaveCount(4);
  });
});

test.describe("links and contact", () => {
  test("profile links point to the right places", async ({ page }) => {
    const hero = page.locator("#about");
    await expect(hero.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/scsepeda"
    );
    await expect(hero.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/scsepeda"
    );
    await expect(hero.getByRole("link", { name: "Get In Touch" })).toHaveAttribute("href", /^mailto:/);
  });

  test("resume link opens in a new tab", async ({ page }) => {
    const resume = page.locator("#contact").getByRole("link", { name: /Download PDF/ });
    await expect(resume).toHaveAttribute("href", /^https:\/\//);
    await expect(resume).toHaveAttribute("target", "_blank");
  });

  test("desktop navigation scrolls to each section", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop navigation is hidden on mobile");
    for (const [label, id] of [
      ["Experience", "#experience"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ]) {
      await page.getByRole("navigation").getByRole("button", { name: label, exact: true }).click();
      await expect(page.locator(`${id} h2`)).toBeInViewport();
    }
  });

  test("contact section has no form and no contacts API", async ({ page, request }) => {
    await expect(page.locator("#contact form")).toHaveCount(0);
    await expect(page.locator("#contact").getByRole("link", { name: "scsepeda@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:scsepeda@gmail.com"
    );
    const response = await request.get("/api/contacts");
    expect(response.headers()["content-type"] ?? "").not.toContain("application/json");
  });
});
