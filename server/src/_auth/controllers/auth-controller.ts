import { AuthService } from "@/_auth/services/auth-service";
import { DataResponse } from "@/utils/response";
import { Request, Response } from "express";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  getNonce = async (req: Request, res: Response) => {
    const { address } = req.body;
    const nonce = await this.authService.getNonce(address);
    res.status(200).json(new DataResponse(200, { nonce }, "Nonce generated"));
  };

  verifyNonce = async (req: Request, res: Response) => {
    const { address, signature } = req.body;
    const userId = await this.authService.verifyNonce(address, signature, res);
    await this.authService.createSession(req, res, userId);
    res.status(200).json(new DataResponse(200, "Successfully authenticated"));
  };
}
