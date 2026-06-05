import mongoose from "mongoose";
const doctorWorkExperienceSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },

        hospitalName: {
            type: String,
            required: true,
            trim: true,
        },

        designation: {
            type: String,
            required: true,
            trim: true,
        },

        employmentType: {
            type: String,
            enum: [
                "Full Time",
                "Part Time",
                "Consultant",
                "Visiting",
                "Internship",
                "Residency",
            ],
            default: "Full Time",
        },

        department: {
            type: String,
            trim: true,
            default: "",
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            default: null,
        },

        currentlyWorking: {
            type: Boolean,
            default: false,
        },

        location: {
            type: String,
            trim: true,
            default: "",
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        achievements: {
            type: String,
            trim: true,
            default: "",
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

export default doctorWorkExperienceSchema;