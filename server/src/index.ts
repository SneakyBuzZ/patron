import express from "express";
import "dotenv/config";
import morgan from "morgan";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import { CLIENT_URL, COOKIE_SECRET } from "@/utils/constants";
import { errorMiddleware } from "@/middlewares/error-middleware";
import { authRouter } from "@/_auth/routes/auth-route";
import { userRouter } from "./_user/routes/user-route";
import { authenticateJwt } from "./middlewares/authenticate-middleware";
import { communityRouter } from "./_community/routes/community-route";

const app = express();

app.use(cookieParser(COOKIE_SECRET));
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use(errorMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/user", authenticateJwt(), userRouter);
app.use("/api/communities", authenticateJwt(), communityRouter);

const server = http.createServer(app);

server.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
