import express from "express";
import {
    createFamilyHistory,
    editFamilyHistory,
    removeFamilyHistory,
    fetchFamilyHistory,
    fetchFamilyHistoryById,
    fetchFamilyHistoryByPatientId,
} from "../controllers/familyHistoryLineage.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const familyHistoryLineageRouter = express.Router();

familyHistoryLineageRouter.post("/createFamilyHistoryLineage", authMiddleware, createFamilyHistory);
familyHistoryLineageRouter.put("/updateFamilyHistoryLineage/:id", authMiddleware, editFamilyHistory);
familyHistoryLineageRouter.delete("/deleteFamilyHistoryLineage/:id", authMiddleware, removeFamilyHistory);
familyHistoryLineageRouter.get("/getAllFamilyHistoryLineage", authMiddleware, fetchFamilyHistory);
familyHistoryLineageRouter.get("/getFamilyHistoryLineageById/:id", authMiddleware, fetchFamilyHistoryById);
familyHistoryLineageRouter.get("/getFamilyHistoryLineageByPatientId/:id", authMiddleware, fetchFamilyHistoryByPatientId);

export default familyHistoryLineageRouter;