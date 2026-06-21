import VitalModel from "../models/vitals.model.js";

export const addVital = async (payload) => {
    return await VitalModel.create(payload);
};

export const updateVital = async (id, payload) => {
    return await VitalModel.findByIdAndUpdate(id, payload, { new: true, runValidators: true, });
};

export const deleteVital = async (id) => {
    return await VitalModel.findByIdAndDelete(id);
};

export const getVitalById = async (id) => {
    return await VitalModel.findById(id)
        .populate("patientId")
        .populate("createdBy");
};

export const getVitalByPatientId = async (patientId) => {
    console.log('patientId======>', patientId);
    const id = patientId?._id || patientId;
    return await VitalModel
        .find({
            patientId: id
        })
        .sort({ createdAt: -1 });
};

export const getAllVitals = async (tenantId) => {
    return await VitalModel.find({
        tenantId,
        isActive: true,
    }).populate("patientId").sort({ createdAt: -1 });
};