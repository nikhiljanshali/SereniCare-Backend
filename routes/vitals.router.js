import express from "express";
import {
    createVitalsController,
    updateVitalsController,
    deleteVitalsController,
    getAllVitalssController,
    getVitalsByIdController,
    getVitalsByPatientIdController,
    getLatestVitalByPatientIdController,
    getLatestVitalByPatientIdWithDocController
} from "../controllers/Vitals.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const vitalsRouter = express.Router();

vitalsRouter.post("/createVitals", authMiddleware, createVitalsController);
vitalsRouter.put("/updateVitals/:id", authMiddleware, updateVitalsController);
vitalsRouter.delete("/deleteVitals/:id", authMiddleware, deleteVitalsController);
vitalsRouter.get("/getAllVitals", authMiddleware, getAllVitalssController);
vitalsRouter.get("/getVitalsById/:id", authMiddleware, getVitalsByIdController);
vitalsRouter.get("/getVitalsByPatientId/:patientId", authMiddleware, getVitalsByPatientIdController);
vitalsRouter.get("/getLatestVitalByPatientId/:patientId", authMiddleware, getLatestVitalByPatientIdController);
vitalsRouter.get("/getLatestVitalByPatientIdWithDoc/:patientId", authMiddleware, getLatestVitalByPatientIdWithDocController);

export default vitalsRouter;