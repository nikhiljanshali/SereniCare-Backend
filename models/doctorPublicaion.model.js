import mongoose from "mongoose";
import doctorPublicationSchema from "../schemas/doctorPublication.schema.js";

const DoctorPublicaionModel = mongoose.model("doctorpublicaion", doctorPublicationSchema);

export default DoctorPublicaionModel;
