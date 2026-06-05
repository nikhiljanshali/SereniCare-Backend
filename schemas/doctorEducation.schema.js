import mongoose from "mongoose";

const doctorEducationSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },

        degreeName: {
            type: String,
            required: true,
            trim: true,
        },

        specializations: {
            type: String,
            trim: true,
            default: "",
        },

        instituteName: {
            type: String,
            required: false,
            trim: true,
        },

        universityName: {
            type: String,
            trim: false,
            default: "",
        },

        startYear: {
            type: Number,
            required: true,
        },

        endYear: {
            type: Number,
            required: true,
        },

        grade: {
            type: String,
            trim: true,
            default: "",
        },

        achievement: {
            type: String,
            trim: true,
            default: "",
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        educationType: {
            type: String,
            enum: [
                "Undergraduate",
                "Postgraduate",
                "Super Specialization",
                "Fellowship",
                "Certification",
                "Diploma",
            ],
            default: "Undergraduate",
        },

        isCompleted: {
            type: Boolean,
            default: true,
        },

        displayOrder: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default doctorEducationSchema;
