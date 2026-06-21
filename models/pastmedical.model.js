import mongoose from "mongoose";
import pastMedicalSchema from "../schemas/pastmedical.schema.js";
export const PastMedicalModel = mongoose.model("pastMedicalHistory", pastMedicalSchema);
export default PastMedicalModel;
