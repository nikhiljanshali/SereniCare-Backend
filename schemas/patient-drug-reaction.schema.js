
import mongoose from "mongoose";

const patientDrugReactionSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        subject: {
            type: String,
            required: false,
        },
        medicineCode: {
            type: String,
            required: false,
        },
        medicineName: {
            type: String,
            required: false,
        },
        adrDetails: {
            type: String,
            required: false,
        },
        adrDate: {
            type: Date,
            required: false,
        },
        ovrNumber: {
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

export default patientDrugReactionSchema;