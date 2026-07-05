import {
    addPatientDrugReaction,
    updatePatientDrugReaction,
    deletePatientDrugReaction,
    getAllPatientDrugReaction,
    getPatientDrugReactionById,
    getPatientDrugReactionByPatientId
} from "../services/patient-drug-reaction.service.js";

// Add
export const createPatientDrugReaction = async (req, res) => {
    try {
        const data = await addPatientDrugReaction({
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
export const editPatientDrugReaction = async (req, res) => {
    try {
        const data = await updatePatientDrugReaction(req.params.id, {
            ...req.body,
            updatedBy: req.user.id
        });
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
export const removePatientDrugReaction = async (req, res) => {
    try {
        await deletePatientDrugReaction(req.params.id);
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
export const fetchPatientDrugReaction = async (req, res) => {
    try {
        const data = await getAllPatientDrugReaction();
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
export const fetchPatientDrugReactionById = async (req, res) => {
    try {
        const data = await getPatientDrugReactionById(
            req.params.id
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

export const fetchPatientDrugReactionByPatientId = async (req, res) => {
    try {
        const data = await getPatientDrugReactionByPatientId(req.params.id);

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