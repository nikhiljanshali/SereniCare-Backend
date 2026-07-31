import {
    addHistoryOfPresentIllness,
    updateHistoryOfPresentIllness,
    deleteHistoryOfPresentIllness,
    getAllHistoryOfPresentIllness,
    getHistoryOfPresentIllnessById,
    getHistoryOfPresentIllnessByPatientId,
} from "../services/historyofPresentIllness.service.js";

export const createHistoryOfPresentIllnessController = async (req, res) => {
    try {
        console.log('addHistoryOfPresentIllness');
        const history = await addHistoryOfPresentIllness({ ...req.body, createdBy: req.user.id, });
        res.status(201).json({
            success: true,
            message: "History of Present Illness added successfully",
            data: history,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateHistoryOfPresentIllnessController = async (req, res) => {
    try {
        const history = await updateHistoryOfPresentIllness(
            req.params.id,
            {
                ...req.body,
                updatedBy: req.user.id,
            }
        );

        res.status(200).json({
            success: true,
            message: "History of Present Illness updated successfully",
            data: history,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteHistoryOfPresentIllnessController = async (req, res) => {
    try {
        await deleteHistoryOfPresentIllness(req.params.id);

        res.status(200).json({
            success: true,
            message: "History of Present Illness deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getHistoryOfPresentIllnessByIdController = async (req, res) => {
    try {
        const history = await getHistoryOfPresentIllnessById(req.params.id);

        res.status(200).json({
            success: true,
            data: history,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getHistoryOfPresentIllnessByPatientIdController = async (req, res) => {
    try {
        const history = await getHistoryOfPresentIllnessByPatientId(req.params.patientId);

        res.status(200).json({
            success: true,
            data: history,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllHistoryOfPresentIllnessController = async (req, res) => {
    try {
        const history = await getAllHistoryOfPresentIllness(req.user.tenantId);

        res.status(200).json({
            success: true,
            data: history,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};