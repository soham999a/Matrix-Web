import "server-only";
import process from "node:process";

// Server-only config. Values here never reach the browser.
// Read process.env INSIDE functions so values resolve at request time.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    baserow: {
      apiUrl: process.env.BASEROW_API_URL,
      token: process.env.BASEROW_TOKEN,
      tableId: process.env.BASEROW_TABLE_ID,
    },
    resend: {
      apiKey: process.env.RESEND_API_KEY,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    },
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}
