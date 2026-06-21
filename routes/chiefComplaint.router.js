import express from "express";
import {
    createChiefComplaintController,
    updateChiefComplaintController,
    deleteChiefComplaintController,
    getAllChiefComplaintsController,
    getChiefComplaintByIdController,
    getChiefComplaintByPatientIdController,
} from "../controllers/chiefComplaint.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const chiefComplaintRouter = express.Router();

chiefComplaintRouter.post("/createChiefComplaint", authMiddleware, createChiefComplaintController);
chiefComplaintRouter.put("/updateChiefComplaint/:id", authMiddleware, updateChiefComplaintController);
chiefComplaintRouter.delete("/deleteChiefComplaint/:id", authMiddleware, deleteChiefComplaintController);
chiefComplaintRouter.get("/getAllChiefComplaint", authMiddleware, getAllChiefComplaintsController);
chiefComplaintRouter.get("/getChiefComplaintById/:id", authMiddleware, getChiefComplaintByIdController);
chiefComplaintRouter.get("/getChiefComplaintByPatientId/:patientId", authMiddleware, getChiefComplaintByPatientIdController);

export default chiefComplaintRouter;