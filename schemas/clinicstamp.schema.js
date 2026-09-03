import mongoose, { Schema } from 'mongoose';

const clinicStampSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },
        clinicId: {
            type: Schema.Types.ObjectId,
            ref: 'Clinic',
            required: true,
            index: true
        },
        fileName: {
            type: String,
            required: true,
            trim: true
        },
        fileType: {
            type: String,
            required: true,
            trim: true
        },
        fileSize: {
            type: Number,
            required: true
        },
        fileData: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default clinicStampSchema;