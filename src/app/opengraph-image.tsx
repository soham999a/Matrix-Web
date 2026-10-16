import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Matrix homepage hero — dark neural field behind The invisible architecture behind the future.";

export const size = { width: 1280, height: 720 };

export const contentType = "image/jpeg";

export default async function Image() {
  const data = await readFile(join(process.cwd(), "public", "hero-background-poster.jpg"));
  return new Response(new Uint8Array(data), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
