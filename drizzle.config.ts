import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema/",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
