import express from "express";
import {
    addSupplier,
    getAllSuppliers,
    getSupplierById,
    getSupplierByAuthUserId,
    updateSupplier,
    updateSupplierStatus,
    deleteSupplier,
    deactivateSupplier,
    searchSuppliers,
    getSupplierStatistics
} from "../controllers/supplier.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const supplierRouter = express.Router();

supplierRouter.post("/suppliers", authMiddleware, addSupplier);
supplierRouter.get("/suppliers", authMiddleware, getAllSuppliers);
supplierRouter.get("/suppliers/:supplierId", authMiddleware, getSupplierById);
supplierRouter.put("/suppliers/:supplierId", authMiddleware, updateSupplier);
supplierRouter.delete("/suppliers/:supplierId", authMiddleware, deleteSupplier);
supplierRouter.patch("/suppliers/:supplierId/status", authMiddleware, updateSupplierStatus);
supplierRouter.patch("/suppliers/:supplierId/deactivate", authMiddleware, deactivateSupplier);
supplierRouter.get("/suppliers/search", authMiddleware, searchSuppliers);
supplierRouter.get("/suppliers/auth-user/:authUserId", authMiddleware, getSupplierByAuthUserId);
supplierRouter.get("/suppliers/statistics", authMiddleware, getSupplierStatistics);

export default supplierRouter;