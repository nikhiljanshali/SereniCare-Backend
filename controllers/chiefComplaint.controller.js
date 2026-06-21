import {
    addChiefComplaint,
    updateChiefComplaint,
    deleteChiefComplaint,
    getAllChiefComplaints,
    getChiefComplaintById,
    getChiefComplaintByPatientId,
} from "../services/chiefComplaint.service.js";

export const createChiefComplaintController = async (req, res) => {
    try {
        const complaint = await addChiefComplaint({ ...req.body, createdBy: req.user.id, });
        res.status(201).json({
            success: true,
            message: "Chief Complaint added successfully",
            data: complaint,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateChiefComplaintController = async (req, res) => {
    try {
        const complaint =
            await updateChiefComplaint(
                req.params.id,
                {
                    ...req.body,
                    updatedBy: req.user.id,
                }
            );

        res.status(200).json({
            success: true,
            message:
                "Chief Complaint updated successfully",
            data: complaint,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteChiefComplaintController = async (req, res) => {
    try {
        await deleteChiefComplaint(req.params.id);

        res.status(200).json({
            success: true,
            message:
                "Chief Complaint deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getChiefComplaintByIdController = async (req, res) => {
    try {
        const complaint =
            await getChiefComplaintById(
                req.params.id
            );

        res.status(200).json({
            success: true,
            data: complaint,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getChiefComplaintByPatientIdController = async (req, res) => {
    try {
        const complaints =
            await getChiefComplaintByPatientId(
                req.params.patientId
            );

        res.status(200).json({
            success: true,
            data: complaints,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllChiefComplaintsController = async (req, res) => {
    try {
        const complaints =
            await getAllChiefComplaints(
                req.user.tenantId
            );

        res.status(200).json({
            success: true,
            data: complaints,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};