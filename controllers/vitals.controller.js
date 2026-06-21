import {
    addVital, updateVital, deleteVital, getAllVitals, getVitalById, getVitalByPatientId,
} from "../services/vitals.services.js";

export const createVitalsController = async (req, res) => {
    try {
        const vitals = await addVital({ ...req.body, createdBy: req.user.id, });
        res.status(201).json({
            success: true,
            message: "Vitals added successfully",
            data: vitals,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateVitalsController = async (req, res) => {
    try {
        const vitals =
            await updateVital(
                req.params.id,
                {
                    ...req.body,
                    updatedBy: req.user.id,
                }
            );

        res.status(200).json({
            success: true,
            message:
                "Vitals updated successfully",
            data: vitals,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteVitalsController = async (req, res) => {
    try {
        await deleteVital(req.params.id);

        res.status(200).json({
            success: true,
            message:
                "Vitals deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getVitalsByIdController = async (req, res) => {
    try {
        const vitals =
            await getVitalById(
                req.params.id
            );

        res.status(200).json({
            success: true,
            data: vitals,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getVitalsByPatientIdController = async (req, res) => {
    try {
        const vitalss = await getVitalByPatientId(req.params.patientId);
        res.status(200).json({
            success: true,
            data: vitalss,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllVitalssController = async (req, res) => {
    try {
        const vitalss =
            await getAllVitals(
                req.user.tenantId
            );

        res.status(200).json({
            success: true,
            data: vitalss,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};