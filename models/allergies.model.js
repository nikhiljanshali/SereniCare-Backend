import mongoose from "mongoose";
import allerigesSchema from "../schemas/allergies.schema.js";

const AllergiesModel = mongoose.model("allergies", allerigesSchema);

export default AllergiesModel;
