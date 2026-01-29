import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL!;

export default defineConfig({
  out: "./database",
  schema: ["./src/_user/tables/*.ts", "./src/_auth/tables/*.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
  strict: true,
  verbose: true,
});
