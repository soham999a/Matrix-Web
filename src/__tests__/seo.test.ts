import { describe, it, expect } from "vitest";
import { SITE, pageSeo } from "@/lib/seo";

describe("seo", () => {
  it("SITE should have all required properties", () => {
    expect(SITE.name).toBe("Matrix");
    expect(SITE.url).toBe("https://matrka.net");
    expect(SITE.tagline).toBeTruthy();
    expect(SITE.email).toBeTruthy();
    expect(SITE.description).toBeTruthy();
  });

  it("pageSeo should return metadata with title and description", () => {
    const meta = pageSeo({
      path: "/test",
      title: "Test Page",
      description: "A test page description",
    });

    expect(meta.title).toBe("Test Page");
    expect(meta.description).toBe("A test page description");
  });

  it("pageSeo should include canonical URL", () => {
    const meta = pageSeo({
      path: "/about",
      title: "About",
      description: "About page",
    });

    expect(meta.alternates?.canonical).toBe("/about");
  });

  it("pageSeo should include OpenGraph data", () => {
    const meta = pageSeo({
      path: "/test",
      title: "Test",
      description: "Desc",
    });

    expect(meta.openGraph).toBeDefined();
    expect(meta.openGraph?.url).toContain("/test");
  });

  it("pageSeo should include Twitter card data", () => {
    const meta = pageSeo({
      path: "/test",
      title: "Test",
      description: "Desc",
    });

    expect(meta.twitter).toBeDefined();
  });

  it("pageSeo should support noindex", () => {
    const meta = pageSeo({
      path: "/preview",
      title: "Preview",
      description: "Internal preview",
      noindex: true,
    });

    const robots = meta.robots as { index?: boolean; follow?: boolean } | undefined;
    expect(robots?.index).toBe(false);
    expect(robots?.follow).toBe(false);
  });
});
