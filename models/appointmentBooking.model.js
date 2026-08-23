import mongoose from "mongoose";
import appointmentBookingSchema from "../schemas/appointmentBooking.schema.js";

const AppointmentBookingModel = mongoose.model("appointmentBookings", appointmentBookingSchema);

export default AppointmentBookingModel;
