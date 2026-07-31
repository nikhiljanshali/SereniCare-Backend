
import mongoose from "mongoose";

const chiefComplaintSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },

        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "appointmentbookings",
            default: null,
        },

        complaint: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: String,
            trim: true,
            required: true
        },
        onset: {
            type: String,
            enum: [
                'Sudden',
                'Gradual'
            ],
            required: true
        },
        severity: {
            type: String,
            enum: [
                'Mild',
                'Moderate',
                'Severe'
            ],
            required: true
        },
        associatedSymptoms: {
            type: [String],
            default: []
        },
        patientStatement: {
            type: String,
            trim: true,
            default: ""
        },

        isActive: {
            type: Boolean,
            default: true,
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

export default chiefComplaintSchema;