import mongoose from "mongoose";
import familyHistoryLineageSchema from "../schemas/familyHistoryLineage.schema.js";
export const FamilyHistoryLineageModel = mongoose.model("familyHistoryLineage", familyHistoryLineageSchema);
export default FamilyHistoryLineageModel;
