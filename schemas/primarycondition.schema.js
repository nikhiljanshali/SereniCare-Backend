import mongoose from "mongoose";

const primaryConditionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
});

export default primaryConditionSchema;
