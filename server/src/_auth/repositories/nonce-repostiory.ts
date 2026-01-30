import { db } from "@/lib/config/db-config";
import { getNonce } from "@/utils/crypto";
import { noncesTable } from "@/_auth/tables/nonce-table";
import { eq } from "drizzle-orm";

const NONCE_EXPIRATION_MINUTES = 5;
function getNonceExpiration() {
  return new Date(Date.now() + NONCE_EXPIRATION_MINUTES * 60 * 1000);
}

export class NonceRepisitory {
  async insert(address: string) {
    const [row] = await db
      .insert(noncesTable)
      .values({
        address,
        nonce: getNonce(),
        expiresAt: getNonceExpiration(),
      })
      .returning();
    return row.nonce;
  }

  async findByAddress(address: string) {
    const [row] = await db
      .select()
      .from(noncesTable)
      .where(eq(noncesTable.address, address));
    return row;
  }

  async delete(id: string) {
    await db.delete(noncesTable).where(eq(noncesTable.id, id));
  }
}
