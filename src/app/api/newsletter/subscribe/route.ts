import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getServerConfig } from "@/lib/config.server";

const subscribeSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  let data: z.infer<typeof subscribeSchema>;
  try {
    data = subscribeSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
  }

  const { apiKey, audienceId } = getServerConfig().resend;
  if (!apiKey || !audienceId) {
    return NextResponse.json({ ok: false, error: "Newsletter gateway error" }, { status: 503 });
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email: data.email, unsubscribed: false }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Newsletter gateway rejected the subscription" },
        { status: 422 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Newsletter gateway is unreachable" },
      { status: 502 },
    );
  }
}
