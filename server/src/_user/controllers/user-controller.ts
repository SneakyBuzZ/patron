import { Request, Response } from "express";
import { UserService } from "../services/user-service";
import { DataResponse } from "@/utils/response";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUser = async (req: Request, res: Response) => {
    const user = await this.userService.getUser(req);
    res
      .status(200)
      .json(new DataResponse(200, user, "User fetched successfully"));
  };
}
