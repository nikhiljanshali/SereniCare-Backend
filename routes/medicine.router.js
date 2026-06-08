import express from "express";

import {
    addMedicine,
    updateMedicine,
    deleteMedicine,
    getAllMedicines,
    getMedicineById,
    searchMedicine,
    getMedicinesByCategory,
    getActiveMedicines,
    getPrescriptionMedicines,
    updateMedicineStatus,
    categoryWiseMedicine,
    addMultipleMedicines
} from "../controllers/medicine.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const medicineRouter = express.Router();

/* CRUD */
medicineRouter.post("/addMedicine", authMiddleware, addMedicine);
medicineRouter.post("/bulkMedicineImport", authMiddleware, addMultipleMedicines);
medicineRouter.get("/getAllMedicines", authMiddleware, getAllMedicines);
medicineRouter.get("/medicines/:medicineId", authMiddleware, getMedicineById);
medicineRouter.put("/medicines/:medicineId", authMiddleware, updateMedicine);
medicineRouter.delete("/medicines/:medicineId", authMiddleware, deleteMedicine);
/* Search */
medicineRouter.get("/medicines/search", authMiddleware, searchMedicine);
/* Category */
medicineRouter.get("/medicines/category/:category", authMiddleware, getMedicinesByCategory);
/* Active Medicines */
medicineRouter.get("/getActiveMedicines", authMiddleware, getActiveMedicines);
/* Prescription Medicines */
medicineRouter.get("/medicines/prescription", authMiddleware, getPrescriptionMedicines);
/* Activate/Deactivate */
medicineRouter.patch("/medicines/:medicineId/status", authMiddleware, updateMedicineStatus);
medicineRouter.get("/medicines/category-wise", authMiddleware, categoryWiseMedicine);

export default medicineRouter;