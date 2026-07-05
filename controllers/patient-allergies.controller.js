import {
    addPatientAllergies,
    updatePatientAllergies,
    deletePatientAllergies,
    getAllPatientAllergies,
    getPatientAllergiesById,
    getPatientAllergiesByPatientId
} from "../services/patient-allergies.service.js";

// Add
export const createPatientAllergies = async (req, res) => {
    try {
        const data = await addPatientAllergies({
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
export const editPatientAllergies = async (req, res) => {
    try {
        const data = await updatePatientAllergies(req.params.id, {
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
export const removePatientAllergies = async (req, res) => {
    try {
        await deletePatientAllergies(req.params.id);
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
export const fetchPatientAllergies = async (req, res) => {
    try {
        const data = await getAllPatientAllergies();
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
export const fetchPatientAllergiesById = async (req, res) => {
    try {
        const data = await getPatientAllergiesById(
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

export const fetchPatientAllergiesByPatientId = async (req, res) => {
    try {
        const data = await getPatientAllergiesByPatientId(req.params.id);

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