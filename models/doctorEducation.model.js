import mongoose from "mongoose";
import doctorEducationSchema from "../schemas/doctorEducation.schema.js";

const DoctorEducaionModel = mongoose.model("doctoreducation", doctorEducationSchema);

export default DoctorEducaionModel;
