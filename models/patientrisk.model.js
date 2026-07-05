import mongoose from "mongoose";

import patientRiskSchema from "../schemas/patientrisk.schema.js";

export const PatientRiskModel = mongoose.model("patientrisk", patientRiskSchema);

export default PatientRiskModel;
