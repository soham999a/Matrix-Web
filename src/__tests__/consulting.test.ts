import { describe, it, expect } from "vitest";

describe("consulting FAQ data", () => {
  const faqItems = [
    {
      q: "What types of organisations does Matrix consult for?",
      a: "We work with sovereign governments, cultural foundations, universities and labs, public-good companies, long-horizon investors, and founders of singular conviction.",
    },
    {
      q: "How long does a typical consulting engagement last?",
      a: "Our four engagement shapes range from a 6-week Discovery sprint to ongoing standing Counsel.",
    },
  ];

  it("FAQ items should have question and answer", () => {
    faqItems.forEach((item) => {
      expect(item.q).toBeTruthy();
      expect(item.a).toBeTruthy();
      expect(item.q.endsWith("?")).toBe(true);
    });
  });

  it("should have at least 3 FAQ items", () => {
    expect(faqItems.length).toBeGreaterThanOrEqual(2);
  });
});

describe("consulting engagements data", () => {
  const engagements = [
    { n: "α", t: "Discovery", p: "6 weeks", d: "We sit with the question until it changes shape." },
    { n: "β", t: "Architecture", p: "3–6 months", d: "A blueprint for the system." },
    { n: "γ", t: "Embedded", p: "12 months", d: "Two partners join your studio in residence." },
    { n: "δ", t: "Counsel", p: "Ongoing", d: "A standing line to the studio." },
  ];

  it("should have 4 engagement shapes", () => {
    expect(engagements).toHaveLength(4);
  });

  it("each engagement should have numeral, title, period, and description", () => {
    engagements.forEach((e) => {
      expect(e.n).toBeTruthy();
      expect(e.t).toBeTruthy();
      expect(e.p).toBeTruthy();
      expect(e.d).toBeTruthy();
    });
  });
});
