import express from "express";

import {
    createHistoryOfPresentIllnessController,
    updateHistoryOfPresentIllnessController,
    deleteHistoryOfPresentIllnessController,
    getAllHistoryOfPresentIllnessController,
    getHistoryOfPresentIllnessByIdController,
    getHistoryOfPresentIllnessByPatientIdController,
} from "../controllers/historyOfPresentIllness.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const historyOfPresentIllnessRouter = express.Router();

historyOfPresentIllnessRouter.post("/createHistoryOfPresentIllness", authMiddleware, createHistoryOfPresentIllnessController);
historyOfPresentIllnessRouter.put("/updateHistoryOfPresentIllness/:id", authMiddleware, updateHistoryOfPresentIllnessController);
historyOfPresentIllnessRouter.delete("/deleteHistoryOfPresentIllness/:id", authMiddleware, deleteHistoryOfPresentIllnessController);
historyOfPresentIllnessRouter.get("/getAllHistoryOfPresentIllness", authMiddleware, getAllHistoryOfPresentIllnessController);
historyOfPresentIllnessRouter.get("/getHistoryOfPresentIllnessById/:id", authMiddleware, getHistoryOfPresentIllnessByIdController);
historyOfPresentIllnessRouter.get("/getHistoryOfPresentIllnessByPatientId/:patientId", authMiddleware, getHistoryOfPresentIllnessByPatientIdController);

export default historyOfPresentIllnessRouter;