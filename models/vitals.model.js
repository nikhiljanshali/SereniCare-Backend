import mongoose from "mongoose";

import vitalSchema from "../schemas/vitals.schema.js";

export const VitalModel = mongoose.model("patientVitals", vitalSchema);

export default VitalModel;
