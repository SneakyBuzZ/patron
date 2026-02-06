import { DATABASE_URL } from "@/utils/constants";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as userTable from "@/_user/tables/user-table";
import * as walletTable from "@/_auth/tables/wallet-table";
import * as nonceTable from "@/_auth/tables/nonce-table";
import * as sessionTable from "@/_auth/tables/session-table";
import * as communityTable from "@/_community/tables/community-table";

import { PgTransaction } from "drizzle-orm/pg-core";

const schema = {
  ...userTable,
  ...walletTable,
  ...nonceTable,
  ...sessionTable,
  ...communityTable,
};

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: true },
  max: 5,
  statement_timeout: 10_000,
  idleTimeoutMillis: 30_000,
  allowExitOnIdle: true,
});

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ DB CONNECTION SUCCESSFUL");
  } catch (error) {
    console.error("❌ DB CONNECTION FAILED");
    console.error("Message:", (error as Error).message);
    process.exit(1);
  }
})();

export const db = drizzle(pool, { schema });
export type DbExecutor =
  | NodePgDatabase<typeof schema>
  | PgTransaction<any, typeof schema>;
