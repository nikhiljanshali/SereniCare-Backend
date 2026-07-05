import mongoose from "mongoose";
import riskMasterSchema from "../schemas/riskmaster.schema.js";

const RiskMasterModel = mongoose.model("risk", riskMasterSchema);

export default RiskMasterModel;
