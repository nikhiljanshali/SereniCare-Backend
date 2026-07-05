
import mongoose from "mongoose";

const patientRiskSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        riskCode: {
            type: String,
            required: false,
        },
        riskDescription: {
            type: String,
            required: false,
        },
        riskComment: {
            type: String,
            required: false,
        },
        reportedOn: {
            type: Date,
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

export default patientRiskSchema;