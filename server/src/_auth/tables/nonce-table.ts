import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const noncesTable = pgTable("auth_nonces", {
  id: uuid("id").defaultRandom().primaryKey(),

  address: varchar("address", { length: 42 }).notNull(),
  nonce: varchar("nonce", { length: 128 }).notNull(),

  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
