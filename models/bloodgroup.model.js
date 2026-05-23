import mongoose from "mongoose";
import bloodGroupSchema from "../schemas/bloodgroup.schema.js";

const BloodGroupModel = mongoose.model("bloodGroups", bloodGroupSchema);

export default BloodGroupModel;
