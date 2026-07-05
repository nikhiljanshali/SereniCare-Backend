import mongoose from "mongoose";

import familyHistorySchema from "../schemas/familyhistory.schema.js";

export const FamilyHistoryModel = mongoose.model("familyhistory", familyHistorySchema);

export default FamilyHistoryModel;
