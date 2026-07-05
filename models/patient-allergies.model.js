import mongoose from "mongoose";

import patientAllergiesSchema from "../schemas/patient-allergies.schema.js";

export const PatientAllergiesModel = mongoose.model("patientallergies", patientAllergiesSchema);

export default PatientAllergiesModel;
