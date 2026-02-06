import { db, DbExecutor } from "@/lib/config/db-config";
import { User } from "../types/user-types";
import { usersTable } from "../tables/user-table";
import { getUsername } from "@/utils/fancy-name";
import { eq } from "drizzle-orm";

export class UserRepository {
  async insert(data: Partial<User>, transactionalDb?: DbExecutor) {
    const [row] = await (transactionalDb ?? db)
      .insert(usersTable)
      .values({
        ...data,
        username: getUsername(),
      })
      .returning();
    return row.id;
  }

  async findById(userId: string) {
    const [user] = await db
      .select({
        fullname: usersTable.fullname,
        username: usersTable.username,
        image: usersTable.image,
        createdAt: usersTable.createdAt,
      })
      .from(usersTable)
      .where(eq(usersTable.id, userId))
      .limit(1);
    return user;
  }
}
