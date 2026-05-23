import mongoose from "mongoose";

const specialitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String },
    description: { type: String },
});

export default specialitySchema