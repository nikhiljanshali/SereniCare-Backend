import mongoose from "mongoose";
import doctorSlotConfigurationSchema from "../schemas/doctorSlotConfiguration.schema.js";

const DoctorSlotConfigurationModel = mongoose.model("doctorslotconfiguration", doctorSlotConfigurationSchema);

export default DoctorSlotConfigurationModel;
