import mongoose from "mongoose";
import medicineSchema from "../schemas/medicine.schema.js";

export const MedicineModel = mongoose.model("medicine", medicineSchema);
export default MedicineModel;
