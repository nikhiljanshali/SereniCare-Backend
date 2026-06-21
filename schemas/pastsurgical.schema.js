
import mongoose from "mongoose";

const pastSurgicalSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        surgeryName: {
            type: String,
            required: true,
        },
        surgeryDate: {
            type: Date,
            required: true,
        },
        surgeonName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },
        hospitalName: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
            required: true,
        },
        outcome: {
            type: Boolean,
            required: true,
        },
        complications: {
            type: String,
            required: true,
        },
        complicationDetails: {
            type: String,
            required: true,
        },
        anesthesiaType: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
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

export default pastSurgicalSchema;