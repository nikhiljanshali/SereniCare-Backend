import {
    addMedicineService,
    updateMedicineService,
    deleteMedicineService,
    getAllMedicinesService,
    getMedicineByIdService,
    searchMedicineService,
    getMedicinesByCategoryService,
    getActiveMedicinesService,
    getPrescriptionMedicinesService,
    updateMedicineStatusService,
    categoryWiseMedicineService,
    addMultipleMedicinesService
} from "../services/medicine.service.js";

/* -------------------------------------------------------------------------- */
/*                               Add Multiple Medicine                                 */
/* -------------------------------------------------------------------------- */
export const addMultipleMedicines = async (req, res) => {
    try {
        const medicinesData = req.body;
        const result = await addMultipleMedicinesService(medicinesData);
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
/* -------------------------------------------------------------------------- */
/*                               Add Medicine                                 */
/* -------------------------------------------------------------------------- */

export const addMedicine = async (req, res) => {
    try {
        const result = await addMedicineService(req.body);
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

/* -------------------------------------------------------------------------- */
/*                             Update Medicine                                */
/* -------------------------------------------------------------------------- */

export const updateMedicine = async (req, res) => {
    try {

        const { medicineId } = req.params;

        const result = await updateMedicineService(
            medicineId,
            req.body
        );

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

/* -------------------------------------------------------------------------- */
/*                             Delete Medicine                                */
/* -------------------------------------------------------------------------- */

export const deleteMedicine = async (req, res) => {
    try {

        const { medicineId } = req.params;

        const result = await deleteMedicineService(
            medicineId
        );

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

/* -------------------------------------------------------------------------- */
/*                             Get All Medicines                              */
/* -------------------------------------------------------------------------- */

export const getAllMedicines = async (req, res) => {
    try {
        const result = await getAllMedicinesService();
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

/* -------------------------------------------------------------------------- */
/*                           Get Medicine By Id                               */
/* -------------------------------------------------------------------------- */

export const getMedicineById = async (req, res) => {
    try {

        const { medicineId } = req.params;

        const result = await getMedicineByIdService(
            medicineId
        );

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

/* -------------------------------------------------------------------------- */
/*                              Search Medicine                               */
/* -------------------------------------------------------------------------- */

export const searchMedicine = async (req, res) => {
    try {

        const { searchText } = req.query;

        const result = await searchMedicineService(
            searchText || ""
        );

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

/* -------------------------------------------------------------------------- */
/*                        Get Medicines By Category                           */
/* -------------------------------------------------------------------------- */

export const getMedicinesByCategory = async (req, res) => {
    try {

        const { category } = req.params;

        const result = await getMedicinesByCategoryService(
            category
        );

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

/* -------------------------------------------------------------------------- */
/*                          Get Active Medicines                              */
/* -------------------------------------------------------------------------- */

export const getActiveMedicines = async (req, res) => {
    try {
        const result = await getActiveMedicinesService();
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

/* -------------------------------------------------------------------------- */
/*                     Get Prescription Medicines                             */
/* -------------------------------------------------------------------------- */

export const getPrescriptionMedicines = async (req, res) => {
    try {

        const result = await getPrescriptionMedicinesService();

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

/* -------------------------------------------------------------------------- */
/*                         Update Medicine Status                             */
/* -------------------------------------------------------------------------- */

export const updateMedicineStatus = async (req, res) => {
    try {

        const { medicineId } = req.params;
        const { isActive } = req.body;

        const result = await updateMedicineStatusService(
            medicineId,
            isActive
        );

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


/* -------------------------------------------------------------------------- */
/*                       Category Wise Medicines                              */
/* -------------------------------------------------------------------------- */

export const categoryWiseMedicine = async (
    req,
    res
) => {
    try {

        const result =
            await categoryWiseMedicineService();

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