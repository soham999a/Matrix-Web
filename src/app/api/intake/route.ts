import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getServerConfig } from "@/lib/config.server";

const intakeFields = z.object({
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
});

const intakeAssessment = z.object({
  readinessScore: z.number(),
  intervention: z.string(),
  path: z.string(),
});

const correspondenceFields = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  organisation: z.string().optional(),
  engagement: z.string(),
  message: z.string().min(20),
});

const intakeSchema = z.object({
  type: z.enum(["assessment", "correspondence"]).default("assessment"),
  fields: intakeFields.optional(),
  assessment: intakeAssessment.optional(),
  correspondence: correspondenceFields.optional(),
});

// Baserow stores both form types in one "Inquiries" table. Create the table at
// Baserow (cloud: baserow.io; or self-hosted) with EXACTLY these column names
// (as text fields):
//   Form type · Name · Email · Subject · Organisation · Engagement · Message ·
//   Industry · Company name · Company size · Geography · Current systems ·
//   Operational problem · Desired AI use case · Data availability ·
//   Decision timeline · Project scale / budget · Decision-maker role ·
//   Interest area · Readiness score · Recommended intervention ·
//   Implementation path
// Generate an API token (Settings → Database tokens, "Create token") and set in
// .env.local:
//   BASEROW_API_URL=https://api.baserow.io   (or your self-hosted root)
//   BASEROW_TOKEN=<token>
//   BASEROW_TABLE_ID=<numeric table id>
function asList(v?: string | string[]): string {
  if (!v) return "";
  if (Array.isArray(v)) return v.filter(Boolean).join(", ");
  return v;
}

function rowFor(data: z.infer<typeof intakeSchema>): Record<string, string> {
  if (data.type === "correspondence" && data.correspondence) {
    const c = data.correspondence;
    const row: Record<string, string> = {
      "Form type": "Correspondence",
      Name: c.name,
      Email: c.email,
      Subject: c.subject,
      Engagement: c.engagement,
      Message: c.message,
    };
    if (c.organisation) row.Organisation = c.organisation;
    return row;
  }
  if (data.fields && data.assessment) {
    const f = data.fields;
    const a = data.assessment;
    const row: Record<string, string> = {
      "Form type": "Intelligence Assessment",
      Industry: f.industry,
      "Company name": f.companyName,
      "Company size": f.companySize,
      Geography: f.geography,
      "Current systems": f.stack,
      "Operational problem": f.problem,
      "Desired AI use case": f.useCase,
      "Data availability": f.dataAvailability,
      "Decision timeline": f.timeline,
      "Project scale / budget": f.budget,
      "Decision-maker role": f.decisionMaker,
      "Interest area": asList(f.interests),
      "Readiness score": String(a.readinessScore),
      "Recommended intervention": a.intervention,
      "Implementation path": a.path,
    };
    return row;
  }
  throw new Error("Intake payload is missing required fields");
}

export async function POST(request: NextRequest) {
  let data: z.infer<typeof intakeSchema>;
  try {
    data = intakeSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid intake payload" }, { status: 400 });
  }

  const { apiUrl, token, tableId } = getServerConfig().baserow;
  if (!apiUrl || !token || !tableId) {
    return NextResponse.json({ ok: false, error: "Intake gateway error" }, { status: 503 });
  }

  let row: Record<string, string>;
  try {
    row = rowFor(data);
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "Invalid payload" },
      { status: 400 },
    );
  }

  const endpoint = `${apiUrl.replace(/\/$/, "")}/api/database/rows/table/${tableId}/?user_field_names=true`;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Intake gateway rejected the submission" },
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
