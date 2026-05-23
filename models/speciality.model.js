import mongoose from "mongoose";

import specialitySchema from "../schemas/speciality.schema.js";

const SpecialityModel = mongoose.model("specialities", specialitySchema);

export default SpecialityModel;