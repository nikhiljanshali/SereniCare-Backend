import express from "express";

import {
    addPrescription,
    updatePrescription,
    deletePrescription,
    getAllPrescriptions,
    getPrescriptionById,
    getPrescriptionsByPatient,
    getPrescriptionsByDoctor,
    getPrescriptionByAppointment,
    searchPrescription,
    updatePrescriptionStatus
} from "../controllers/prescription.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const prescriptionRouter = express.Router();

/* CRUD */
prescriptionRouter.post("/addPrescription", authMiddleware, addPrescription);
prescriptionRouter.put("/updatePrescription/:id", authMiddleware, updatePrescription);
prescriptionRouter.delete("/deletePrescription/:id", authMiddleware, deletePrescription);
prescriptionRouter.get("/getAllPrescriptions", authMiddleware, getAllPrescriptions);
prescriptionRouter.get("/getPrescriptionById/:id", authMiddleware, getPrescriptionById);
/* Search */
prescriptionRouter.get("/searchPrescription", authMiddleware, searchPrescription);
/* Patient */
prescriptionRouter.get("/getPrescriptionsByPatient/:patientId", authMiddleware, getPrescriptionsByPatient);
/* Doctor */
prescriptionRouter.get("/getPrescriptionsByDoctor/:doctorId", authMiddleware, getPrescriptionsByDoctor);
/* Appointment */
prescriptionRouter.get("/getPrescriptionByAppointment/:appointmentId", authMiddleware, getPrescriptionByAppointment);
/* Status */
prescriptionRouter.patch("/updatePrescriptionStatus/:id/status", authMiddleware, updatePrescriptionStatus);
export default prescriptionRouter;