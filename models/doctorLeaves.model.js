import mongoose from "mongoose";
import doctorLeaveSchema from "../schemas/doctorLeaves.schema.js";

const DoctorLeaveModel = mongoose.model("doctorleaves", doctorLeaveSchema);

export default DoctorLeaveModel;
