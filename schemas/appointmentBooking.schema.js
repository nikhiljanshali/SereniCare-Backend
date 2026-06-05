import mongoose from "mongoose";

const appointmentBookingSchema = new mongoose.Schema(
    {
        appointmentNumber: {
            type: String,
            unique: true,
            required: true,
        },

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

        appointmentDate: {
            type: Date,
            required: true,
        },

        dayOfWeek: {
            type: String,
            required: true,
        },

        startTime: {
            type: String,
            required: true,
        },

        endTime: {
            type: String,
            required: true,
        },

        appointmentType: {
            type: String,
            enum: [
                "In-Person",
                "Telemedicine",
            ],
            required: true,
        },

        consultationMode: {
            type: String,
            enum: [
                "New Patient",
                "Follow-Up",
                "Emergency",
            ],
            default: "New Patient",
        },

        appointmentStatus: {
            type: String,
            enum: [
                "Pending",
                "Confirmed",
                "Checked-In",
                "Completed",
                "Cancelled",
                "No-Show",
            ],
            default: "Pending",
        },

        bookingSource: {
            type: String,
            enum: [
                "Patient Portal",
                "Reception",
                "Doctor",
                "Admin",
            ],
            default: "Patient Portal",
        },

        symptoms: {
            type: String,
            trim: true,
        },

        notes: {
            type: String,
            trim: true,
        },

        consultationFee: {
            type: Number,
            default: 0,
        },

        paymentStatus: {
            type: String,
            enum: [
                "Pending",
                "Paid",
                "Refunded",
            ],
            default: "Pending",
        },

        cancelledReason: {
            type: String,
        },

        // cancelledBy: {
        //     type: String,
        //     enum: [
        //         "Patient",
        //         "Doctor",
        //         "Admin",
        //     ],
        // },
    },
    {
        timestamps: true,
    }
); 
export default appointmentBookingSchema;