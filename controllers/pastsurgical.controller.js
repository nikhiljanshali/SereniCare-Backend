import {
    addPastSurgical,
    updatePastSurgical,
    deletePastSurgical,
    getAllPastSurgical,
    getPastSurgicalById,
    getPastSurgicalByPatientId
} from "../services/pastsurgical.service.js";

// Add
export const createPastSurgical = async (req, res) => {
    try {
        const data = await addPastSurgical({
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
export const editPastSurgical = async (req, res) => {
    try {
        const data = await updatePastSurgical(
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
export const removePastSurgical = async (req, res) => {
    try {
        await deletePastSurgical(req.params.id);
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
export const fetchPastSurgical = async (req, res) => {
    try {
        const data = await getAllPastSurgical();
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
export const fetchPastSurgicalById = async (req, res) => {
    try {
        const data = await getPastSurgicalById(
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

export const fetchPastSurgicalByPatientId = async (req, res) => {
    try {
        const data = await getPastSurgicalByPatientId(req.params.id);

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