import express from "express";
import {
  login,
  register,
} from "../controllers/auth-controller/auth-controller.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter;
