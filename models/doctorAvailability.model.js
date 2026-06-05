import mongoose from "mongoose";
import doctorAvailabilitySchema from "../schemas/doctorAvailability.schema.js";

const DoctorAvailabilityModel = mongoose.model("doctorAvailability", doctorAvailabilitySchema);

export default DoctorAvailabilityModel;
