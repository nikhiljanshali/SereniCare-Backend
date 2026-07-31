

import mongoose from "mongoose";

import chiefComplaintSchema from "../schemas/chiefComplaint.schema.js";

export const ChiefComplaintModel = mongoose.model("patientChiefOfComplaints", chiefComplaintSchema);

export default ChiefComplaintModel;
