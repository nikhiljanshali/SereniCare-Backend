import mongoose from "mongoose";
import physicalExaminationSchema from "../schemas/physicalExamination.schema.js";
export const PhysicalExaminationModel = mongoose.model("physicalExamination", physicalExaminationSchema);
export default PhysicalExaminationModel;
