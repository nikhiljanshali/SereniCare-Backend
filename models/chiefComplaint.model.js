

import mongoose from "mongoose";

import chiefComplaintSchema from "../schemas/chiefComplaint.schema.js";

export const ChiefComplaintModel = mongoose.model("chiefcomplaints", chiefComplaintSchema);

export default ChiefComplaintModel;
