import { db } from "@/lib/config/db-config";
import { InsertSession } from "@/_auth/types/session-types";
import { sessionsTable } from "@/_auth/tables/session-table";

const SESSION_EXPIRATION_DAYS = 7;
const SESSION_EXPIRATION = new Date(
  Date.now() + SESSION_EXPIRATION_DAYS * 24 * 60 * 60 * 1000,
);

export class SessionRepository {
  async insert(data: InsertSession) {
    await db.insert(sessionsTable).values({
      ...data,
      expiresAt: SESSION_EXPIRATION,
    });
  }
}
