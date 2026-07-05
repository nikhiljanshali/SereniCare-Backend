import PatientRiskModel from "../models/patientrisk.model.js";
// Add Patient Risk
export const addPatientRisk = async (data) => {
    try {
        const PatientRisk = new PatientRiskModel(data);
        return await PatientRisk.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Patient Risk
export const updatePatientRisk = async (id, data) => {
    try {
        const updatedData = await PatientRiskModel.findByIdAndUpdate(id, {
            ...data,
            updatedBy: data.updatedBy
        }, {
            new: true,
            runValidators: true
        });
        if (!updatedData) {
            throw new Error("Patient Risk not found");
        }
        return updatedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Delete Patient Risk
export const deletePatientRisk = async (id) => {
    try {
        const deletedData = await PatientRiskModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Patient Risk not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Patient Risk
export const getAllPatientRisk = async () => {
    try {
        const PatientRiskHistory = await PatientRiskModel.find()
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Risk fetched successfully",
            data: PatientRiskHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Patient Risk By Id
export const getPatientRiskById = async (id) => {
    try {
        const data = await PatientRiskModel.findById(id)
            .populate("diagnosedBy", "name email")
            .populate("createdBy", "name")
            .populate("updatedBy", "name");
        if (!data) {
            throw new Error("Patient Risk not found");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getPatientRiskByPatientId = async (id) => {
    try {
        const PatientRisk = await PatientRiskModel.find({ patientId: id })
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Risk fetched successfully",
            data: PatientRisk
        };
    } catch (error) {
        throw new Error(error.message);
    }
};