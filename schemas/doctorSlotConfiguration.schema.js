import mongoose from "mongoose";

const doctorSlotConfigurationSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },

        defaultSlotDuration: {
            type: Number,
            required: true,
            min: 5,
        },

        maxDailyAppointments: {
            type: Number,
            required: true,
            min: 1,
        },

        emergencyBufferSlots: {
            type: Number,
            default: 0,
        },

        telemedicineEnabled: {
            type: Boolean,
            default: false,
        },

        telemedicineSlotsPerDay: {
            type: String,
            default: 0,
        },

        effectiveFromDate: {
            type: Date,
            default: Date.now,
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },
    },
    {
        timestamps: true,
    }
);


export default doctorSlotConfigurationSchema;