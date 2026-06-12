import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
    {
        medicineName: {
            type: String,
            required: true,
        },
        dosage: {
            type: String, // 500mg
            required: true,
        },
        dosageUnit: {
            type: String, // 500mg
            required: true,
        },
        frequency: {
            type: String, // 1-0-1
            required: true,
        },
        frequencyUnit: {
            type: String, // 1-0-1
            required: true,
        },
        duration: {
            type: String, // 5 Days
            required: true,
        },
        durationType: {
            type: String, // 5 Days
            required: true,
        },
        instructions: {
            type: String, // After Food
            default: "",
        },
    },
    { _id: false }
);

const investigationSchema = new mongoose.Schema(
    {
        testName: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const prescriptionSchema = new mongoose.Schema(
    {
        prescriptionNumber: {
            type: String,
            unique: true,
            required: true,
        },

        appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AppointmentBooking",
            required: true,
        },

        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },

        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },
        
        clinicId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Clinic",
            required: true,
        },

        diagnosis: {
            type: [String],
            required: true,
        },

        symptoms: {
            type: [String],
            default: [],
        },

        medicines: [medicineSchema],

        investigations: [investigationSchema],

        advice: {
            type: String,
            default: "",
        },

        followUpDate: {
            type: Date,
            default: null,
        },

        notes: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: ["Draft", "Completed", "Cancelled"],
            default: "Completed",
        },

        prescribedDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);


export default prescriptionSchema;