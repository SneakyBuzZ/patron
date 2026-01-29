import { db, DbExecutor } from "@/lib/config/db-config";
import { User } from "../types/user-types";
import { usersTable } from "../tables/user-table";
import { getUsername } from "@/utils/fancy-name";

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
}
