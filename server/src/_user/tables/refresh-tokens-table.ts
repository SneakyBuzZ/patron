import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "@/_user/tables/user-table";

export const refreshTokensTable = pgTable("refresh_tokens", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),

  tokenHash: varchar("token_hash", { length: 255 }).notNull(),
  userAgent: varchar("user_agent", { length: 512 }),
  ipAddress: varchar("ip_address", { length: 64 }),

  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
