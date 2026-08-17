import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load and display the main heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("invisible");
  });

  test("should have the navigation header", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("should have the footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("should navigate to capabilities page", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/capabilities"]');
    await expect(page).toHaveURL(/\/capabilities/);
    await expect(page.locator("h1")).toContainText("capabilities");
  });

  test("should navigate to products page", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/products"]');
    await expect(page).toHaveURL(/\/products/);
  });
});

test.describe("Capabilities", () => {
  test("should list all 9 capabilities", async ({ page }) => {
    await page.goto("/capabilities");
    const capabilityLinks = page.locator('a[href^="/capabilities/"]');
    await expect(capabilityLinks).toHaveCount(9);
  });

  test("should navigate to individual capability pages", async ({ page }) => {
    await page.goto("/capabilities");
    await page.click('a[href="/capabilities/ai"]');
    await expect(page).toHaveURL(/\/capabilities\/ai/);
    await expect(page.locator("h1")).toContainText("Artificial Intelligence");
  });
});

test.describe("Products", () => {
  test("should display product portfolio", async ({ page }) => {
    await page.goto("/products");
    await expect(page.locator("h1")).toContainText("architecture");
  });

  test("should have product cards", async ({ page }) => {
    await page.goto("/products");
    const articles = page.locator("article");
    const count = await articles.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });
});

test.describe("Consulting", () => {
  test("should display engagement types", async ({ page }) => {
    await page.goto("/consulting");
    await expect(page.locator("text=Discovery")).toBeVisible();
    await expect(page.locator("text=Architecture")).toBeVisible();
    await expect(page.locator("text=Embedded")).toBeVisible();
    await expect(page.locator("text=Counsel")).toBeVisible();
  });

  test("should have FAQ section", async ({ page }) => {
    await page.goto("/consulting");
    await expect(page.locator("text=Frequently asked")).toBeVisible();
  });

  test("should have How To section", async ({ page }) => {
    await page.goto("/consulting");
    await expect(page.locator("text=How it begins")).toBeVisible();
  });
});

test.describe("Research", () => {
  test("should display research programs", async ({ page }) => {
    await page.goto("/research");
    await expect(page.locator("h1")).toContainText("observatory");
  });

  test("should have whitepapers section", async ({ page }) => {
    await page.goto("/research");
    await expect(page.locator("text=Whitepapers")).toBeVisible();
  });
});

test.describe("SEO", () => {
  test("homepage should have meta description", async ({ page }) => {
    await page.goto("/");
    const meta = await page.locator('meta[name="description"]').getAttribute("content");
    expect(meta).toBeTruthy();
    expect(meta!.length).toBeGreaterThan(50);
  });

  test("each page should have a title", async ({ page }) => {
    const pages = ["/", "/about", "/capabilities", "/products", "/consulting", "/research"];
    for (const path of pages) {
      await page.goto(path);
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(5);
    }
  });
});

test.describe("Accessibility", () => {
  test("all pages should have lang attribute", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });

  test("images should have alt text or aria-hidden", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      const ariaHidden = await img.getAttribute("aria-hidden");
      expect(alt !== null || ariaHidden === "true").toBe(true);
    }
  });
});
