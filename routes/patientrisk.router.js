import express from "express";
import {
    createPatientRisk,
    editPatientRisk,
    removePatientRisk,
    fetchPatientRisk,
    fetchPatientRiskById,
    fetchPatientRiskByPatientId,
} from "../controllers/patientrisk.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const patientRiskRouter = express.Router();

patientRiskRouter.post("/createPatientRisk", authMiddleware, createPatientRisk);
patientRiskRouter.put("/updatePatientRisk/:id", authMiddleware, editPatientRisk);
patientRiskRouter.delete("/deletePatientRisk/:id", authMiddleware, removePatientRisk);
patientRiskRouter.get("/getAllPatientRisk", authMiddleware, fetchPatientRisk);
patientRiskRouter.get("/getPatientRiskById/:id", authMiddleware, fetchPatientRiskById);
patientRiskRouter.get("/getPatientRiskByPatientId/:id", authMiddleware, fetchPatientRiskByPatientId);

export default patientRiskRouter;