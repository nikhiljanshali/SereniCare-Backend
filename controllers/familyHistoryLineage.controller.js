import {
    addFamilyHistory,
    updateFamilyHistory,
    deleteFamilyHistory,
    getAllFamilyHistory,
    getFamilyHistoryById,
    getFamilyHistoryByPatientId
} from "../services/familyHistoryLineage.service.js";

// Add
export const createFamilyHistory = async (req, res) => {
    try {
        const data = await addFamilyHistory({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update
export const editFamilyHistory = async (req, res) => {
    try {
        const data = await updateFamilyHistory(
            req.params.id,
            {
                ...req.body,
                updatedBy: req.user.id
            }
        );

        res.json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete
export const removeFamilyHistory = async (req, res) => {
    try {
        await deleteFamilyHistory(req.params.id);

        res.json({
            success: true,
            message: "Deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All
export const fetchFamilyHistory = async (req, res) => {
    try {
        const data = await getAllFamilyHistory();

        res.json({
            success: true,
            data: data.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get By Id
export const fetchFamilyHistoryById = async (req, res) => {
    try {
        const data = await getFamilyHistoryById(req.params.id);

        res.json({
            success: true,
            data: data.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get By Patient Id
export const fetchFamilyHistoryByPatientId = async (req, res) => {
    try {
        const data = await getFamilyHistoryByPatientId(req.params.id);

        res.json({
            success: true,
            data: data.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};