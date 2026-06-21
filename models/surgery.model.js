import mongoose from "mongoose";
import surgerySchema from "../schemas/surgery.schema.js";

const SurgeryModel = mongoose.model("surgery", surgerySchema);

export default SurgeryModel;
