import express from "express";
import {
    createPatientAllergies,
    editPatientAllergies,
    removePatientAllergies,
    fetchPatientAllergies,
    fetchPatientAllergiesById,
    fetchPatientAllergiesByPatientId,
} from "../controllers/patient-allergies.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const patientAllergiesRouter = express.Router();

patientAllergiesRouter.post("/createPatientAllergies", authMiddleware, createPatientAllergies);
patientAllergiesRouter.put("/updatePatientAllergies/:id", authMiddleware, editPatientAllergies);
patientAllergiesRouter.delete("/deletePatientAllergies/:id", authMiddleware, removePatientAllergies);
patientAllergiesRouter.get("/getAllPatientAllergies", authMiddleware, fetchPatientAllergies);
patientAllergiesRouter.get("/getPatientAllergiesById/:id", authMiddleware, fetchPatientAllergiesById);
patientAllergiesRouter.get("/getPatientAllergiesByPatientId/:id", authMiddleware, fetchPatientAllergiesByPatientId);

export default patientAllergiesRouter;