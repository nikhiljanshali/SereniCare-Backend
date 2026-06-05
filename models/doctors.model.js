import mongoose from "mongoose";

import doctorSchema from "../schemas/doctors.schema.js";
import authUserSchema from "../schemas/authuser.schema.js";
import clinicSchema from "../schemas/clinic.schema.js";
import doctorLeaveSchema from "../schemas/doctorLeaves.schema.js";
// import doctorSpecialitySchema from "../schemas/doctors.schema.js";

export const DoctorModel = mongoose.model("doctors", doctorSchema);
const AuthUserModel = mongoose.model("authusers", authUserSchema);
const ClinicModel = mongoose.model("clinics", clinicSchema);
const DoctorLeaveModel = mongoose.model("doctorleaves", doctorLeaveSchema);

export { ClinicModel, AuthUserModel, DoctorLeaveModel };
export default DoctorModel;
