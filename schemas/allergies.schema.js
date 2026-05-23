import mongoose from "mongoose";

const allerigesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
});

export default allerigesSchema;
