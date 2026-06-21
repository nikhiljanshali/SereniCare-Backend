import ChiefComplaintModel from "../models/chiefComplaint.model.js";

export const addChiefComplaint = async (payload) => {
    console.log(payload);
    return await ChiefComplaintModel.create(payload);
};

export const updateChiefComplaint = async (id, payload) => {
    return await ChiefComplaintModel.findByIdAndUpdate(id, payload, { new: true, runValidators: true, });
};

export const deleteChiefComplaint = async (id) => {
    return await ChiefComplaintModel.findByIdAndDelete(id);
};

export const getChiefComplaintById = async (id) => {
    return await ChiefComplaintModel.findById(id)
        .populate("patientId")
        .populate("createdBy");
};

export const getChiefComplaintByPatientId = async (patientId) => {
    return await ChiefComplaintModel.find({
        patientId,
        isActive: true,
    }).sort({ createdAt: -1 });
};

export const getAllChiefComplaints = async (tenantId) => {
    return await ChiefComplaintModel.find({
        tenantId,
        isActive: true,
    }).populate("patientId").sort({ createdAt: -1 });
};