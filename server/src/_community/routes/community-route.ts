import { validateData } from "@/middlewares/validate-middleware";
import { Router } from "express";
import { createCommunityDTO } from "../types/community-types";
import { catchAsync } from "@/utils/catch-async";
import { CommunityController } from "../controllers/community-controller";

export const communityRouter = Router();
const communityController = new CommunityController();

communityRouter.post(
  "/",
  validateData(createCommunityDTO),
  catchAsync(communityController.create),
);

communityRouter.get("/", catchAsync(communityController.getAll));
