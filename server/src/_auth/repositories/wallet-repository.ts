import { db, DbExecutor } from "@/lib/config/db-config";
import { walletsTable } from "@/_auth/tables/wallet-table";
import { eq } from "drizzle-orm";
import { InsertWallet } from "@/_auth/types/wallet-types";

export class WalletRepository {
  async insert(data: InsertWallet, transactionalDb?: DbExecutor) {
    await (transactionalDb ?? db).insert(walletsTable).values({
      chainId: "1",
      ...data,
    });
  }

  async findByAddress(address: string) {
    const [wallet] = await db
      .select()
      .from(walletsTable)
      .where(eq(walletsTable.address, address));
    return wallet;
  }
}
