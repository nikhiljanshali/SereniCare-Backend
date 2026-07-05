import mongoose from "mongoose";

const allerigesSchema = new mongoose.Schema({
  groupname: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
});

export default allerigesSchema;
