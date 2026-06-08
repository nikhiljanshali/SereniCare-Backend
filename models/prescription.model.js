import mongoose from "mongoose";
import prescriptionSchema from "../schemas/prescription.schema.js";

export const PrescriptionModel = mongoose.model("prescription", prescriptionSchema);
export default PrescriptionModel;
