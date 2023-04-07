import express from "express";
import userRoutes from "./routes/user.js";
import { config } from "dotenv";

//craeting server
export const app = express();

config({
  path: "./data/config.env",
});
//Using Middleware
app.use(express.json());

//Using Routes
app.use("/user", userRoutes);
