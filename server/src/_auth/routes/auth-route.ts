import { Router } from "express";
import { AuthController } from "../controllers/auth-controller";
import { catchAsync } from "@/utils/catch-async";
import { authenticateJwt } from "@/middlewares/authenticate-middleware";

export const authRouter = Router();
const authController = new AuthController();

authRouter.post(
  "/status",
  authenticateJwt(),
  catchAsync(authController.status),
);
authRouter.post("/nonce", catchAsync(authController.getNonce));
authRouter.post("/verify", catchAsync(authController.verifyNonce));
