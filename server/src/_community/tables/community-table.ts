import { usersTable } from "@/_user/tables/user-table";
import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
  uniqueIndex,
  pgEnum,
  bigint,
} from "drizzle-orm/pg-core";

export const communitiesTable = pgTable("communities", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 140 }).notNull().unique(),
  description: text("description"),

  avatar: varchar("avatar", { length: 512 }),
  banner: varchar("banner", { length: 512 }),

  /* ---------- Blockchain data ---------- */

  metadataCid: varchar("metadata_cid", { length: 120 }).notNull(),

  contractAddress: varchar("contract_address", { length: 64 }).notNull(),

  tokenId: bigint("token_id", { mode: "number" }).notNull(),
  mintTxHash: varchar("mint_tx_hash", { length: 80 }).notNull().unique(),
  chainId: integer("chain_id").notNull(),

  creatorId: uuid("creator_id")
    .references(() => usersTable.id)
    .notNull(),

  membersCount: integer("members_count").default(1),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const communityRolesEnum = pgEnum("community_roles", [
  "member",
  "moderator",
  "admin",
]);

export const communityMembersTable = pgTable(
  "community_members",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    communityId: uuid("community_id")
      .references(() => communitiesTable.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => usersTable.id, { onDelete: "cascade" })
      .notNull(),

    role: communityRolesEnum("role").default("member").notNull(),

    joinedAt: timestamp("joined_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("community_user_unique_idx").on(
      table.communityId,
      table.userId,
    ),
  ],
);
