import mongoose from "mongoose";

const doctorPublicationSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        journalName: {
            type: String,
            required: true,
            trim: true,
        },

        publicationYear: {
            type: Number,
            required: true,
        },

        authorRole: {
            type: String,
            enum: [
                "Lead Author",
                "Co-author",
                "Contributing Author"
            ],
            required: true,
        },

        doi: {
            type: String,
            default: null,
            trim: true,
        },

        publicationUrl: {
            type: String,
            default: null,
        },

        abstract: {
            type: String,
            default: null,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

export default doctorPublicationSchema;