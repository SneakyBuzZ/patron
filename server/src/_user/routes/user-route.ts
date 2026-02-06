import { catchAsync } from "@/utils/catch-async";
import { Router } from "express";
import { UserController } from "../controllers/user-controller";

export const userRouter = Router();
const userController = new UserController();

userRouter.get("/", catchAsync(userController.getUser));
