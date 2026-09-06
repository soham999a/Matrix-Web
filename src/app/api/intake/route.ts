import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getServerConfig } from "@/lib/config.server";

const intakeSchema = z.object({
  fields: z.object({
    industry: z.string().min(1),
    companyName: z.string().min(1),
    companySize: z.string(),
    geography: z.string(),
    stack: z.string(),
    problem: z.string().min(1),
    useCase: z.string(),
    dataAvailability: z.string(),
    timeline: z.string(),
    budget: z.string(),
    decisionMaker: z.string(),
    interests: z.union([z.array(z.string().min(1)), z.string()]),
  }),
  assessment: z.object({
    readinessScore: z.number(),
    intervention: z.string(),
    path: z.string(),
  }),
});

const FORM_BASE = "https://docs.google.com/forms/d/e";

// Order MUST match the Google Form's question order. Create the form at
// https://forms.google.com (logged into matrkasystem@gmail.com) with these
// questions in exactly this order:
//   1. Industry
//   2. Company name
//   3. Company size
//   4. Geography
//   5. Current systems / technology stack
//   6. Biggest operational problem
//   7. Desired AI use case
//   8. Data availability
//   9. Decision timeline
//   10. Project scale / budget
//   11. Decision-maker role
//   12. Interest area  — make this a "Checkbox" question with options:
//       AI Analytics, SaaS, Agentic, Consulting, Digital Products
// Mark questions 1, 2, 6 as required. After creating it, enable
// Settings → "Collect email addresses" off → Responses → "Get email
// notifications for new responses". Copy the form's id (the long token in
// the form's URL after /d/e/) into .env.local as GOOGLE_FORM_ID.
// The form auto-creates a linked "Form Responses 1" Google Sheet.
const toValues = (f: z.infer<typeof intakeSchema>["fields"]) => [
  f.industry,
  f.companyName,
  f.companySize,
  f.geography,
  f.stack,
  f.problem,
  f.useCase,
  f.dataAvailability,
  f.timeline,
  f.budget,
  f.decisionMaker,
];

function asInterestList(v: string | string[]): string[] {
  if (Array.isArray(v)) return v;
  const split = v
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  if (split.length === 1 && split[0] === "Not provided") return [];
  return split;
}

async function fetchFormBlueprint(formId: string) {
  const res = await fetch(`${FORM_BASE}/${formId}/viewform`, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MATRIX-intake)" },
  });
  if (!res.ok) return null;
  const html = await res.text();

  const entries: { id: string; isCheckbox: boolean }[] = [];
  const seen = new Set<string>();
  for (const m of html.matchAll(/name="entry\.(\d+)"/g)) {
    const id = m[1];
    if (seen.has(id)) continue;
    seen.add(id);
    entries.push({ id, isCheckbox: false });
  }

  const checkbox = new Set<string>();
  for (const m of html.matchAll(
    /(?:type="checkbox"[^>]*name="entry\.(\d+)"|name="entry\.(\d+)"[^>]*type="checkbox")/g,
  )) {
    checkbox.add(m[1] || m[2]);
  }
  for (const e of entries) e.isCheckbox = checkbox.has(e.id);

  const fbzx =
    html.match(/<input[^>]*name="fbzx"[^>]*value="([^"]+)"/)?.[1] ??
    html.match(/"fbzx":"([^"]+)"/)?.[1] ??
    null;

  return { entries, fbzx };
}

export async function POST(request: NextRequest) {
  let data: z.infer<typeof intakeSchema>;
  try {
    data = intakeSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid intake payload" }, { status: 400 });
  }

  const formId = getServerConfig().googleFormId;
  if (!formId) {
    return NextResponse.json(
      { ok: false, error: "Intake gateway is not configured" },
      { status: 503 },
    );
  }

  let blueprint: Awaited<ReturnType<typeof fetchFormBlueprint>>;
  try {
    blueprint = await fetchFormBlueprint(formId);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Intake gateway is unreachable" },
      { status: 502 },
    );
  }
  if (!blueprint) {
    return NextResponse.json(
      { ok: false, error: "Intake form could not be read" },
      { status: 502 },
    );
  }

  const values = toValues(data.fields);
  const interests = asInterestList(data.fields.interests);

  try {
    const res = await fetch(`${FORM_BASE}/${formId}/formResponse`, {
      method: "POST",
      redirect: "manual",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (() => {
        const p = new URLSearchParams();
        p.set("fvv", "1");
        if (blueprint.fbzx) p.set("fbzx", blueprint.fbzx);
        blueprint.entries.forEach((entry, i) => {
          if (i === 11) {
            if (entry.isCheckbox) interests.forEach((v) => p.append(`entry.${entry.id}`, v));
            else p.set(`entry.${entry.id}`, interests.join(", "));
            return;
          }
          if (entry.isCheckbox) return;
          p.set(`entry.${entry.id}`, values[i] ?? "");
        });
        return p;
      })(),
    });

    if (!res.ok || res.redirected) {
      return NextResponse.json(
        { ok: false, error: "Intake form rejected the submission" },
        { status: 422 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Intake gateway is unreachable" },
      { status: 502 },
    );
  }
}
