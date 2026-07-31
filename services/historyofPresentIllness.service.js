import HistoryOfPresentIllnessModel from "../models/historyofPresentIllness.model.js";


export const addHistoryOfPresentIllness = async (payload) => {
    console.log(payload);
    return await HistoryOfPresentIllnessModel.create(payload);
};

export const updateHistoryOfPresentIllness = async (id, payload) => {
    return await HistoryOfPresentIllnessModel.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true,
        }
    );
};

export const deleteHistoryOfPresentIllness = async (id) => {
    return await HistoryOfPresentIllnessModel.findByIdAndDelete(id);
};

export const getHistoryOfPresentIllnessById = async (id) => {
    return await HistoryOfPresentIllnessModel.findById(id)
        .populate("patientId")
        .populate("appointmentId")
        .populate("createdBy");
};

export const getHistoryOfPresentIllnessByPatientId = async (patientId) => {
    return await HistoryOfPresentIllnessModel.find({
        patientId,
        isActive: true,
    }).sort({ createdAt: -1 });
};

export const getAllHistoryOfPresentIllness = async (tenantId) => {
    return await HistoryOfPresentIllnessModel.find({
        tenantId,
        isActive: true,
    })
        .populate("patientId")
        .sort({ createdAt: -1 });
};