import { Request } from "express";
import { CommunityRepository } from "../repositories/community-repository";
import { AppError } from "@/utils/error";

export class CommunityService {
  private communityRepository: CommunityRepository;

  constructor() {
    this.communityRepository = new CommunityRepository();
  }

  async create(req: Request) {
    const data = req.body;
    const userId = req.user?.id;
    if (!userId) throw new AppError(403, "Unauthorized");

    await this.communityRepository.insert({
      name: data.name,
      slug: data.slug,
      description: data.description,
      avatar: data.avatar,
      banner: data.banner,

      metadataCid: data.metadataCid,
      creatorId: userId,
      contractAddress: "0x2342SEA232",
      tokenId: 0,
      mintTxHash: data.txHash,
      chainId: 11155111,
    });
  }

  async getAll() {
    return await this.communityRepository.getAll();
  }
}
