import express from "express";
import {
    createFamilyHistory,
    editFamilyHistory,
    removeFamilyHistory,
    fetchFamilyHistory,
    fetchFamilyHistoryById,
    fetchFamilyHistoryByPatientId,
} from "../controllers/FamilyHistory.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const familyHistoryRouter = express.Router();

familyHistoryRouter.post("/createFamilyHistory", authMiddleware, createFamilyHistory);
familyHistoryRouter.put("/updateFamilyHistory/:id", authMiddleware, editFamilyHistory);
familyHistoryRouter.delete("/deleteFamilyHistory/:id", authMiddleware, removeFamilyHistory);
familyHistoryRouter.get("/getAllFamilyHistory", authMiddleware, fetchFamilyHistory);
familyHistoryRouter.get("/getFamilyHistoryById/:id", authMiddleware, fetchFamilyHistoryById);
familyHistoryRouter.get("/getFamilyHistoryByPatientId/:id", authMiddleware, fetchFamilyHistoryByPatientId);

export default familyHistoryRouter;