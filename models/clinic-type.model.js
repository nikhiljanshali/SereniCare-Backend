import mongoose from "mongoose";
import clinicTypeSchema from "../schemas/clinic-type.schema.js";

const ClinicTypeModel = mongoose.model("clinicTypes", clinicTypeSchema);

export default ClinicTypeModel;