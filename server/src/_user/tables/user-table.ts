import { uuid, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullname: varchar("fullname", { length: 120 }),
  username: varchar("username", { length: 60 }).notNull().unique(),
  image: varchar("image", { length: 512 }),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
