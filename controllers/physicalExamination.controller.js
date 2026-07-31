import {
    addPhysicalExamination,
    updatePhysicalExamination,
    deletePhysicalExamination,
    getAllPhysicalExaminations,
    getPhysicalExaminationById,
    getPhysicalExaminationByPatientId
} from "../services/physicalExamination.service.js";

// Create Physical Examination
export const createPhysicalExamination = async (req, res) => {
    try {
        const data = await addPhysicalExamination(req.body);

        res.status(201).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Physical Examination
export const editPhysicalExamination = async (req, res) => {
    try {
        const data = await updatePhysicalExamination(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Physical Examination
export const removePhysicalExamination = async (req, res) => {
    try {
        const data = await deletePhysicalExamination(req.params.id);

        res.status(200).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Physical Examinations
export const fetchPhysicalExaminations = async (req, res) => {
    try {
        const data = await getAllPhysicalExaminations();

        res.status(200).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Physical Examination By Id
export const fetchPhysicalExaminationById = async (req, res) => {
    try {
        const data = await getPhysicalExaminationById(req.params.id);

        res.status(200).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Physical Examination By Patient Id
export const fetchPhysicalExaminationByPatientId = async (req, res) => {
    try {
        const data = await getPhysicalExaminationByPatientId(req.params.id);

        res.status(200).json({
            success: true,
            data: data.data,
            message: data.message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};