import express from "express";
import {
    createPhysicalExamination,
    editPhysicalExamination,
    removePhysicalExamination,
    fetchPhysicalExaminations,
    fetchPhysicalExaminationById,
    fetchPhysicalExaminationByPatientId,
} from "../controllers/physicalExamination.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const physicalExaminationRouter = express.Router();

physicalExaminationRouter.post("/createPhysicalExamination", authMiddleware, createPhysicalExamination);
physicalExaminationRouter.put("/updatePhysicalExamination/:id", authMiddleware, editPhysicalExamination);
physicalExaminationRouter.delete("/deletePhysicalExamination/:id", authMiddleware, removePhysicalExamination);
physicalExaminationRouter.get("/getAllPhysicalExaminations", authMiddleware, fetchPhysicalExaminations);
physicalExaminationRouter.get("/getPhysicalExaminationById/:id", authMiddleware, fetchPhysicalExaminationById);
physicalExaminationRouter.get("/getPhysicalExaminationByPatientId/:id", authMiddleware, fetchPhysicalExaminationByPatientId);

export default physicalExaminationRouter;``