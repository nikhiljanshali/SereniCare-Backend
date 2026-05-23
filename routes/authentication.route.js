import express from "express";
import {
  signup,
  signin,
  sendOTP,
  verifyOTP,
  resetPassword,
} from "../controllers/authentication.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/sendOtp", sendOTP);
authRouter.post("/verifyOtp", verifyOTP);
authRouter.post("/resendOtp", sendOTP);
authRouter.post("/resetPassword", resetPassword);

export default authRouter;
