import mongoose  from "mongoose";

const clinicTypeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String },
    description: { type: String },
});

export default clinicTypeSchema