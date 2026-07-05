import {
    addPatientRisk,
    updatePatientRisk,
    deletePatientRisk,
    getAllPatientRisk,
    getPatientRiskById,
    getPatientRiskByPatientId
} from "../services/patientrisk.service.js";

// Add
export const createPatientRisk = async (req, res) => {
    try {
        const data = await addPatientRisk({
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
export const editPatientRisk = async (req, res) => {
    try {
        const data = await updatePatientRisk(req.params.id, {
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
export const removePatientRisk = async (req, res) => {
    try {
        await deletePatientRisk(req.params.id);
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
export const fetchPatientRisk = async (req, res) => {
    try {
        const data = await getAllPatientRisk();
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
export const fetchPatientRiskById = async (req, res) => {
    try {
        const data = await getPatientRiskById(
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

export const fetchPatientRiskByPatientId = async (req, res) => {
    try {
        const data = await getPatientRiskByPatientId(req.params.id);

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