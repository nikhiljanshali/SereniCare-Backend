import mongoose from "mongoose";

const historyOfPresentIllnessSchema = new mongoose.Schema(
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
            required: true
        },

        historyOfPresentIllness: {
            type: String,
            trim: true,
            required: true,
        },

        onset: {
            type: String,
            enum: ["Sudden", "Gradual", "Unknown"],
            required: true,
        },

        location: {
            type: String,
            trim: true,
            required: true,
        },

        duration: {
            type: String,
            trim: true,
            required: true,
        },

        character: {
            type: String,
            enum: [
                "Sharp",
                "Dull",
                "Burning",
                "Stabbing",
                "Cramping",
                "Throbbing",
                "Pressure",
                "Aching",
            ],
            required: true,
        },

        severity: {
            type: String,
            enum: [
                'Mild',
                'Moderate',
                'Severe'
            ]
        },

        radiation: {
            type: String,
            trim: true,
            default: "",
        },

        timing: {
            type: String,
            enum: [
                "Constant",
                "Intermittent",
                "Occasional",
                "Progressive",
            ],
            required: true,
        },

        aggravatingFactors: {
            type: [String],
            default: [],
        },

        relievingFactors: {
            type: [String],
            default: [],
        },

        associatedSymptoms: {
            type: [String],
            default: [],
        },

        progression: {
            type: String,
            enum: [
                "Improving",
                "Stable",
                "Worsening",
                "Resolved",
            ],
            required: true,
        },

        previousEpisodes: {
            type: String,
            trim: true,
            default: "",
        },

        treatmentsTried: {
            type: String,
            trim: true,
            default: "",
        },

        responseToTreatment: {
            type: String,
            enum: [
                "Complete Relief",
                "Partial Relief",
                "No Relief",
                "Symptoms Worsened",
            ],
            default: "",
        },

        additionalNotes: {
            type: String,
            trim: true,
            default: "",
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

export default historyOfPresentIllnessSchema;