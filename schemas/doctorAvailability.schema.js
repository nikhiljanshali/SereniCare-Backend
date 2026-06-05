import mongoose from "mongoose";

const doctorAvailabilitySchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true
        },
        dayOfWeek: {
            type: String,
            enum: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            required: true
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        shifts: [
            {
                isBreakTime: Boolean,
                startTime: String,
                endTime: String
            }
        ],
        appointmentTypes: [
            {
                type: String,
                enum: [
                    "In-Person",
                    "Telemedicine"
                ]
            }
        ]
    },
    {
        timestamps: true
    }
);

export default doctorAvailabilitySchema;