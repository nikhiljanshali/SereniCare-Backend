import mongoose from "mongoose";
import clinicSchema from "../schemas/clinic.schema.js";

const ClinicModel = mongoose.model("clinics", clinicSchema);

export default ClinicModel;
