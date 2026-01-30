import { NonceRepisitory } from "@/_auth/repositories/nonce-repostiory";
import { SessionRepository } from "@/_auth/repositories/session-repository";
import { WalletRepository } from "@/_auth/repositories/wallet-repository";
import { UserRepository } from "@/_user/repositories/user-repository";
import { db } from "@/lib/config/db-config";
import { AppError } from "@/utils/error";
import { generateAndSetTokens } from "@/utils/jwt";
import { verifyMessage } from "ethers";
import { Request, Response } from "express";

export class AuthService {
  private nonceRepo: NonceRepisitory;
  private sessionRepo: SessionRepository;
  private walletRepo: WalletRepository;
  private userRepo: UserRepository;

  constructor() {
    this.nonceRepo = new NonceRepisitory();
    this.sessionRepo = new SessionRepository();
    this.walletRepo = new WalletRepository();
    this.userRepo = new UserRepository();
  }

  async getNonce(address: string) {
    //* Normalize address
    address = address.toLowerCase();
    const nonce = await this.nonceRepo.findByAddress(address);
    if (nonce && nonce.expiresAt > new Date()) {
      return nonce.nonce;
    }
    return await this.nonceRepo.insert(address);
  }

  async verifyNonce(address: string, signature: string, res: Response) {
    //* Normalize address
    address = address.toLowerCase();

    //* Fetch nonce
    const nonce = await this.nonceRepo.findByAddress(address);
    if (!nonce) throw new AppError(404, "Nonce not found");
    if (nonce.expiresAt < new Date()) {
      await this.nonceRepo.delete(nonce.id);
      throw new AppError(400, "Nonce expired");
    }

    //* Verify signature
    const message = `Login nonce: ${nonce.nonce}`;
    const recoveredAddress = verifyMessage(message, signature).toLowerCase();
    if (recoveredAddress !== address)
      throw new AppError(400, "Invalid signature");

    //* Delete nonce
    await this.nonceRepo.delete(nonce.id);

    //* Find or Create wallet
    let wallet = await this.walletRepo.findByAddress(address);
    let userId: string;
    if (!wallet) {
      userId = await db.transaction(async (tx) => {
        const id = await this.userRepo.insert({}, tx);
        await this.walletRepo.insert(
          {
            userId: id,
            address: address,
          },
          tx,
        );
        return id;
      });
    } else {
      userId = wallet.userId;
    }

    return userId;
  }

  async createSession(req: Request, res: Response, userId: string) {
    //* Create session
    const token = await generateAndSetTokens(res, userId);
    await this.sessionRepo.insert({
      userId,
      token,
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip,
    });
  }
}
