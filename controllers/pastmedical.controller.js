import {
    addPastMedical,
    updatePastMedical,
    deletePastMedical,
    getAllPastMedical,
    getPastMedicalById,
    getPastMedicalByPatientId
} from "../services/pastMedical.service.js";

// Add
export const createPastMedical = async (req, res) => {
    try {
        const data = await addPastMedical({
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
export const editPastMedical = async (req, res) => {
    try {
        const data = await updatePastMedical(
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
export const removePastMedical = async (req, res) => {
    try {
        await deletePastMedical(req.params.id);
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
export const fetchPastMedical = async (req, res) => {
    try {
        const data = await getAllPastMedical();
        res.json({
            success: true,
            data: data.data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get By Id
export const fetchPastMedicalById = async (req, res) => {
    try {
        const data = await getPastMedicalById(req.params.id);
        res.json({
            success: true,
            data: data.data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const fetchPastMedicalByPatientId = async (req, res) => {
    try {
        const data = await getPastMedicalByPatientId(req.params.id);
        res.json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};