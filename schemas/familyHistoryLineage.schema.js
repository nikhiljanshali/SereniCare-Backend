
import mongoose from "mongoose";

const familyHistoryLineageSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        relationship: {
            type: String,
            required: true,
        },
        medicalConditions: [
            {
                medicalCondition: {
                    type: String,
                    required: true,
                },

                ageAtDiagnosis: {
                    type: Number,
                },

                complications: {
                    type: String,
                    default: "",
                },

                comments: {
                    type: String,
                    default: "",
                },
            },
        ],
        status: {
            type: String,
            enum: ["Living", "Deceased", "Unknown"],
            required: true,
        },
        currentAge: {
            type: Number,
            required: true,
        },
        causeOfDeath: {
            type: String,
            required: true,
        },
        genetic: {
            type: String,
            required: true,
        },
        multipleConditions: [{
            type: String
        }],
        comments: {
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

export default familyHistoryLineageSchema;