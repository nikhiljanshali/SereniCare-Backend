import mongoose from "mongoose";

const doctorLeaveSchema = new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },
        leaveType: { type: String, required: true },
        leaveStartDate: { type: Date, required: true },
        leaveEndDate: { type: Date, required: true },
        leaveReason: { type: String, required: true },
        leaveStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    },
);

export default doctorLeaveSchema;