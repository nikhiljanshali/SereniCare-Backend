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

const router = express.Router();

/* CRUD */
router.post("/", authMiddleware, addPrescription);
router.put("/:id", authMiddleware, updatePrescription);
router.delete("/:id", authMiddleware, deletePrescription);

router.get("/", authMiddleware, getAllPrescriptions);
router.get("/:id", authMiddleware, getPrescriptionById);

/* Search */
router.get("/search/list", authMiddleware, searchPrescription);

/* Patient */
router.get(
    "/patient/:patientId", authMiddleware,
    getPrescriptionsByPatient
);

/* Doctor */
router.get(
    "/doctor/:doctorId", authMiddleware,
    getPrescriptionsByDoctor
);

/* Appointment */
router.get(
    "/appointment/:appointmentId", authMiddleware,
    getPrescriptionByAppointment
);

/* Status */
router.patch(
    "/:id/status", authMiddleware,
    updatePrescriptionStatus
);

export default router;