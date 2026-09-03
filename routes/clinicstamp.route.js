import express from "express";
import {
    uploadClinicStamp,
    getAllClinicStamps,
    getClinicStampById,
    getClinicStampsByClinicId,
    deleteClinicStamp
} from "../controllers/clinicstamp.controller.js";

const clinicstampRouter = express.Router();

clinicstampRouter.post("/uploadClinicStamp", uploadClinicStamp);
clinicstampRouter.get("/getAllClinicStamps", getAllClinicStamps);
clinicstampRouter.get("/getClinicStampById/:id", getClinicStampById);
clinicstampRouter.get("/getClinicStampsByClinicId/:clinicId", getClinicStampsByClinicId);
clinicstampRouter.delete("/deleteClinicStamp/:id", deleteClinicStamp);

export default clinicstampRouter;
