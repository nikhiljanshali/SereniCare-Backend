import mongoose from "mongoose";

import patientDrugReactionSchema from "../schemas/patient-drug-reaction.schema.js";

export const PatientDrugReactionModel = mongoose.model("patientdrugreaction", patientDrugReactionSchema);

export default PatientDrugReactionModel;
