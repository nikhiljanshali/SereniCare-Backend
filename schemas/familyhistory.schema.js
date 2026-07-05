
import mongoose from "mongoose";

const familyHistorySchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        noFamilyHistory: {
            type: Boolean,
            required: false,
        },
        problem: {
            type: String,
            required: true,
        },
        father: {
            type: Boolean,
            required: false,
        },
        mother: {
            type: Boolean,
            required: false,
        },
        brother: {
            type: Boolean,
            required: false,
        },
        sister: {
            type: Boolean,
            required: false,
        },
        child: {
            type: Boolean,
            required: false,
        },
        paternal: {
            type: Boolean,
            required: false,
        },
        meternal: {
            type: Boolean,
            required: false,
        },
        comments: {
            type: String,
            required: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authusers",
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authusers",
        },
    },
    {
        timestamps: true,
    }
);

export default familyHistorySchema;