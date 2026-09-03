import mongoose from "mongoose";
import clinicStampSchema from "../schemas/clinicstamp.schema.js";

const ClinicStampModel = mongoose.model("clinicstamp", clinicStampSchema);

export default ClinicStampModel;
