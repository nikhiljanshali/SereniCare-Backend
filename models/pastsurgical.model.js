import mongoose from "mongoose";

import pastSurgicalSchema from "../schemas/pastsurgical.schema.js";

export const PastSurgicalModel = mongoose.model("pastSurgicalHistory", pastSurgicalSchema);

export default PastSurgicalModel;
