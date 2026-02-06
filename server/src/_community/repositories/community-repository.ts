import { db } from "@/lib/config/db-config";
import { InsertCommunity } from "../types/community-types";
import {
  communitiesTable,
  communityMembersTable,
} from "../tables/community-table";
import { eq } from "drizzle-orm";
import { getSlug } from "@/utils/fancy-name";

export class CommunityRepository {
  async insert(data: InsertCommunity) {
    const [community] = await db
      .insert(communitiesTable)
      .values({
        ...data,
        slug: getSlug(),
      })
      .returning();

    await db.insert(communityMembersTable).values({
      communityId: community.id,
      userId: data.creatorId,
      role: "admin",
    });
  }

  async getAll() {
    return await db.select().from(communitiesTable);
  }

  async getByUser(userId: string) {
    return await db
      .select()
      .from(communitiesTable)
      .where(eq(communitiesTable.creatorId, userId));
  }

  async getUserJoinedCommunities(userId: string) {
    return await db
      .select()
      .from(communitiesTable)
      .innerJoin(
        communityMembersTable,
        eq(communitiesTable.id, communityMembersTable.communityId),
      )
      .where(eq(communityMembersTable.userId, userId));
  }
}
