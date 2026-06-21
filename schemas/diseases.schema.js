import mongoose from "mongoose";

const diseasesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String },
    description: { type: String },
});

export default diseasesSchema;
