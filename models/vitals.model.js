import mongoose from "mongoose";

import vitalSchema from "../schemas/vitals.schema.js";

export const VitalModel = mongoose.model("vitals", vitalSchema);

export default VitalModel;
