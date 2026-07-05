
import mongoose from "mongoose";

const patientAllergiesSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        noKnownAllergies: {
            type: Boolean,
            required: false,
        },
        assesmentNotPossible: {
            type: Boolean,
            required: false,
        },
        comments: {
            type: String,
            required: false,
        },
        allergies: {
            type: String,
            required: false,
        },
        evaluation: {
            type: String,
            required: false,
        },
        allergyType: {
            type: String,
            required: false,
        },
        allergyGroup: {
            type: String,
            required: false,
        },
        allergyReaction: {
            type: String,
            required: false,
        },
        certainty: {
            type: String,
            required: false,
        },
        serverity: {
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

export default patientAllergiesSchema;