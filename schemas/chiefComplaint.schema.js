
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
            required: true,
            trim: true,
            maxlength: 500,
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