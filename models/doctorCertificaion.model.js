import mongoose from "mongoose";
import doctorCertificationSchema from "../schemas/doctorCertificaion.schema.js";

const DoctorCertificationModel = mongoose.model("doctorcertifications", doctorCertificationSchema);

export default DoctorCertificationModel;
