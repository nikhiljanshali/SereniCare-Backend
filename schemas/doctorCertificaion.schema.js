import mongoose from "mongoose";

const doctorCertificationSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors',
            required: true,
            index: true
        },

        certificateName: {
            type: String,
            required: true,
            trim: true
        },

        issuingBody: {
            type: String,
            required: true,
            trim: true
        },

        certificateNumber: {
            type: String,
            trim: true,
            default: null
        },

        issuedDate: {
            type: Date,
            required: true
        },

        expiryDate: {
            type: Date,
            default: null
        },

        isLifetime: {
            type: Boolean,
            default: false
        },

        status: {
            type: String,
            enum: [
                'Valid',
                'Renewal Due',
                'Expired',
                'Suspended'
            ],
            default: 'Valid'
        },

        documentUrl: {
            type: String,
            default: null
        },

        remarks: {
            type: String,
            trim: true,
            default: null
        }
    },
    {
        timestamps: true
    }
);

export default doctorCertificationSchema;