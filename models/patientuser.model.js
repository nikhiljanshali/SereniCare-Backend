import mongoose from "mongoose";
import authUserSchema from "../schemas/authuser.schema.js";
import patientSchema, { medicalHistorySchema, insuranceSchema, } from "../schemas/patientuser.schema.js";

export const PatientModel = mongoose.model("patients", patientSchema);
export const AuthUserModel = mongoose.model("authusers", authUserSchema);
export const MedicalHistoryModel = mongoose.model("medicalhistories", medicalHistorySchema);
export const InsuranceModel = mongoose.model("insurances", insuranceSchema);

export default PatientModel;
