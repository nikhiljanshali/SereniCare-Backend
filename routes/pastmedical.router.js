import express from "express";
import {
    createPastMedical,
    editPastMedical,
    removePastMedical,
    fetchPastMedical,
    fetchPastMedicalById,
    fetchPastMedicalByPatientId,
} from "../controllers/PastMedical.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const pastMedicalRouter = express.Router();

pastMedicalRouter.post("/createPastMedical", authMiddleware, createPastMedical);
pastMedicalRouter.put("/updatePastMedical/:id", authMiddleware, editPastMedical);
pastMedicalRouter.delete("/deletePastMedical/:id", authMiddleware, removePastMedical);
pastMedicalRouter.get("/getAllPastMedical", authMiddleware, fetchPastMedical);
pastMedicalRouter.get("/getPastMedicalById/:id", authMiddleware, fetchPastMedicalById);
pastMedicalRouter.get("/getPastMedicalByPatientId/:id", authMiddleware, fetchPastMedicalByPatientId);

export default pastMedicalRouter;