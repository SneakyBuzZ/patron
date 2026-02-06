import { Request, Response } from "express";
import { CommunityService } from "../services/community-service";
import { DataResponse } from "@/utils/response";

export class CommunityController {
  private communityService: CommunityService;

  constructor() {
    this.communityService = new CommunityService();
  }

  create = async (req: Request, res: Response) => {
    await this.communityService.create(req);
    res
      .status(201)
      .json(new DataResponse(200, "Community created successfully"));
  };

  getAll = async (req: Request, res: Response) => {
    const communities = await this.communityService.getAll();
    res
      .status(200)
      .json(
        new DataResponse(200, communities, "Communities fetched successfully"),
      );
  };
}
