import mongoose from "mongoose";
import allerigesSchema from "../schemas/primarycondition.schema.js";

const AllergiesModel = mongoose.model("allergies", allerigesSchema);

export default AllergiesModel;
