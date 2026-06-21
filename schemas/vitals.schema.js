
import mongoose from "mongoose";

const vitalSchema = new mongoose.Schema(
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
        vitalDateTime: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bloodPressure: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        bloodPressureUnit: {
            type: String,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        temperatureUnit: {
            type: String,
            required: true,
        },
        respiratoryRate: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        respiratoryRateUnit: {
            type: String,
            required: true,
        },
        spO2: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        spO2Unit: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        weightUnit: {
            type: String,
            required: true,
        },
        height: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        heightUnit: {
            type: String,
            required: true,
        },
        bmi: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 10,
        },
        bmiUnit: {
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

export default vitalSchema;