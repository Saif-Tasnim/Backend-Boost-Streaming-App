import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware setup basic for every production level projects
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import { router as userRouter } from "./routes/user.routes.js";

// routes declares
app.use("/api/v1/users", userRouter);

export { app };
