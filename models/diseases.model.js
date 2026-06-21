import mongoose from "mongoose";
import diseasesSchema from "../schemas/diseases.schema.js";

const DiseasesModel = mongoose.model("diseases", diseasesSchema);

export default DiseasesModel;
