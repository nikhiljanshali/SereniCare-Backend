// models/counter.model.js

import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
    _id: {
        type: String, // UHID
    },
    seq: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model("Counter", counterSchema);