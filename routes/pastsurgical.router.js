import express from "express";
import {
    createPastSurgical,
    editPastSurgical,
    removePastSurgical,
    fetchPastSurgical,
    fetchPastSurgicalById,
    fetchPastSurgicalByPatientId,
} from "../controllers/PastSurgical.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const PastSurgicalRouter = express.Router();

PastSurgicalRouter.post("/createPastSurgical", authMiddleware, createPastSurgical);
PastSurgicalRouter.put("/updatePastSurgical/:id", authMiddleware, editPastSurgical);
PastSurgicalRouter.delete("/deletePastSurgical/:id", authMiddleware, removePastSurgical);
PastSurgicalRouter.get("/getAllPastSurgical", authMiddleware, fetchPastSurgical);
PastSurgicalRouter.get("/getPastSurgicalById/:id", authMiddleware, fetchPastSurgicalById);
PastSurgicalRouter.get("/getPastSurgicalByPatientId/:patientId", authMiddleware, fetchPastSurgicalByPatientId);

export default PastSurgicalRouter;