import { describe, it, expect } from "vitest";
import { getCapability, CAPABILITIES } from "@/lib/capabilities";

describe("capabilities", () => {
  it("should export an array of 9 capabilities", () => {
    expect(CAPABILITIES).toHaveLength(9);
  });

  it("each capability should have a unique slug", () => {
    const slugs = CAPABILITIES.map((c) => c.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(CAPABILITIES.length);
  });

  it("each capability should have required fields", () => {
    CAPABILITIES.forEach((cap) => {
      expect(cap.slug).toBeTruthy();
      expect(cap.numeral).toBeTruthy();
      expect(cap.title).toBeTruthy();
      expect(cap.tagline).toBeTruthy();
      expect(cap.description).toBeTruthy();
      expect(cap.seo.title).toBeTruthy();
      expect(cap.seo.description).toBeTruthy();
      expect(cap.sections.length).toBeGreaterThan(0);
    });
  });

  it("getCapability should return a capability by slug", () => {
    const ai = getCapability("ai");
    expect(ai).toBeDefined();
    expect(ai?.title).toBe("Artificial Intelligence");
    expect(ai?.numeral).toBe("I");
  });

  it("getCapability should return undefined for unknown slug", () => {
    const result = getCapability("nonexistent");
    expect(result).toBeUndefined();
  });
});
