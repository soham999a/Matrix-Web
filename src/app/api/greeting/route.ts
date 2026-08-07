import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getServerConfig } from "@/lib/config.server";

const schema = z.object({ name: z.string().min(1) });

// Port of the original TanStack `createServerFn` example. Handler body runs
// server-only; imports used only inside it are never shipped to the client.
export async function POST(request: NextRequest) {
  const data = schema.parse(await request.json());
  const config = getServerConfig();
  return NextResponse.json({
    greeting: `Hello, ${data.name}!`,
    mode: config.nodeEnv ?? "unknown",
  });
}
