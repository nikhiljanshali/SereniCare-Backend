import mongoose from "mongoose";
import authUserSchema from "../schemas/authuser.schema.js";

const AuthUserModel = mongoose.model("authusers", authUserSchema);

export default AuthUserModel;
