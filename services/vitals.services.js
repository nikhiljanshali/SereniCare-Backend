import VitalModel from "../models/vitals.model.js";

export const addVital = async (payload) => {
    console.log('payload=>>>>>>>', payload)
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


export const getLatestVitalByPatientId = async (patientId) => {
    const id = patientId?._id || patientId;

    return await VitalModel.findOne({
        patientId: id,
    }).sort({ vitalDateTime: -1 }); // or createdAt: -1
};

export const getLatestVitalByPatientIdWithDoc = async (patientId) => {
    const id = patientId?._id || patientId;

    return await VitalModel.findOne({ patientId: id })
        .populate('doctorId', 'firstName lastName')
        .sort({ vitalDateTime: -1 })
        .lean();
};