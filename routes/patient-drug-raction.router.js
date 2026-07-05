import express from "express";
import {
    createPatientDrugReaction,
    editPatientDrugReaction,
    removePatientDrugReaction,
    fetchPatientDrugReaction,
    fetchPatientDrugReactionById,
    fetchPatientDrugReactionByPatientId,
} from "../controllers/patient-drug-reaction.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const patientDrugReactionRouter = express.Router();

patientDrugReactionRouter.post("/createPatientDrugReaction", authMiddleware, createPatientDrugReaction);
patientDrugReactionRouter.put("/updatePatientDrugReaction/:id", authMiddleware, editPatientDrugReaction);
patientDrugReactionRouter.delete("/deletePatientDrugReaction/:id", authMiddleware, removePatientDrugReaction);
patientDrugReactionRouter.get("/getAllPatientDrugReaction", authMiddleware, fetchPatientDrugReaction);
patientDrugReactionRouter.get("/getPatientDrugReactionById/:id", authMiddleware, fetchPatientDrugReactionById);
patientDrugReactionRouter.get("/getPatientDrugReactionByPatientId/:id", authMiddleware, fetchPatientDrugReactionByPatientId);

export default patientDrugReactionRouter;