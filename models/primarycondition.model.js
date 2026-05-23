import mongoose from "mongoose";
import primaryConditionSchema from "../schemas/primarycondition.schema.js";

const PrimaryConditionModel = mongoose.model("primaryConditions", primaryConditionSchema);

export default PrimaryConditionModel;
