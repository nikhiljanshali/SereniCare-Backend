import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "./config.js";

async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      NODE_ENV === "production"
        ? "Production MONGODB_URI is not defined. Set MONGODB_URI or MONGO_URI in your environment."
        : "Local MongoDB connection string is not defined. Ensure MongoDB is running locally or set MONGODB_URI."
    );
  }

  await mongoose.connect(MONGODB_URI);
  console.log(MONGODB_URI);
  console.log(`Connected to MongoDB (${NODE_ENV})`);
}

export default connectToDatabase;
