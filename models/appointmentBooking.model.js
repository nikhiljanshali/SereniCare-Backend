import mongoose from "mongoose";
import appointmentBookingSchema from "../schemas/appointmentBooking.schema.js";

const AppointmentBookingModel = mongoose.model("AppointmentBooking", appointmentBookingSchema);

export default AppointmentBookingModel;
