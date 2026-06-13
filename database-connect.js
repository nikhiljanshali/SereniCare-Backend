import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined. Check your environment configuration.");
  }

  await mongoose.connect(MONGODB_URI);
  console.log(MONGODB_URI);
  console.log(`Connected to MongoDB (${process.env.NODE_ENV || "development"})`);
}

export default connectToDatabase;
