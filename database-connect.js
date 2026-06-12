import mongoose from "mongoose";

async function connectToDatabase() {
  const mongoUri =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI 

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}

export default connectToDatabase;
