import { Request } from "express";
import { UserRepository } from "../repositories/user-repository";
import { AppError } from "@/utils/error";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUser(req: Request) {
    const userId = req.user?.id;
    if (!userId) throw new AppError(404, "User not authenticated");
    const user = await this.userRepository.findById(userId);
    return user;
  }
}
