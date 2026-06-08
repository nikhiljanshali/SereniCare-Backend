import {
    addSupplierService,
    getAllSuppliersService,
    getSupplierByIdService,
    getSupplierByAuthUserIdService,
    updateSupplierService,
    updateSupplierStatusService,
    deleteSupplierService,
    deactivateSupplierService,
    searchSuppliersService,
    getSupplierStatisticsService
} from "../services/supplier.service.js";

export const addSupplier = async (req, res) => {
    try {
        const result = await addSupplierService(req.body);
        return res.status(201).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllSuppliers = async (req, res) => {
    try {
        const result = await getAllSuppliersService();
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getSupplierById = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const result = await getSupplierByIdService(supplierId);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

export const getSupplierByAuthUserId = async (req, res) => {
    try {
        const { authUserId } = req.params;
        const result = await getSupplierByAuthUserIdService(authUserId);
        return res.status(200).json({
            success: true,
            ...result
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: error.message
        });

    }
};

export const updateSupplier = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const result = await updateSupplierService(supplierId, req.body);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateSupplierStatus = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const { status } = req.body;
        const result = await updateSupplierStatusService(supplierId, status);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteSupplier = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const result = await deleteSupplierService(supplierId);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deactivateSupplier = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const result = await deactivateSupplierService(supplierId);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const searchSuppliers = async (req, res) => {
    try {
        const { q } = req.query;
        const result = await searchSuppliersService(q);
        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getSupplierStatistics = async (req, res) => {
    try {
        const result = await getSupplierStatisticsService();
        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};