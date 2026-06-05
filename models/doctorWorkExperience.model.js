import mongoose from "mongoose";
import doctorWorkExperienceSchema from "../schemas/doctorWorkExperience.schema.js";

const DoctorWorkExperienceModel = mongoose.model("doctorWorkExperience", doctorWorkExperienceSchema);

export default DoctorWorkExperienceModel;
