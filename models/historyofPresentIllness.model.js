import mongoose from "mongoose";
import historyOfPresentIllnessSchema from "../schemas/historyofPresentIllness.schema.js";
export const HistoryOfPresentIllnessModel = mongoose.model("patientHistoryOfPresentIllness", historyOfPresentIllnessSchema);
export default HistoryOfPresentIllnessModel;