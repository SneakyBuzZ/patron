import { Router } from "express";
import { AuthController } from "../controllers/auth-controller";
import { catchAsync } from "@/utils/catch-async";

export const authRouter = Router();
const authController = new AuthController();

authRouter.post("/nonce", catchAsync(authController.getNonce));
authRouter.post("/verify", catchAsync(authController.verifyNonce));
