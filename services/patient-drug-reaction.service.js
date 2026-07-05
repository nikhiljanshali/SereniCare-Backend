import PatientDrugReactionModel from "../models/patient-drug-reaction.model.js";
// Add Patient Risk
export const addPatientDrugReaction = async (data) => {
    try {
        const PatientDrugReaction = new PatientDrugReactionModel(data);
        return await PatientDrugReaction.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Patient Risk
export const updatePatientDrugReaction = async (id, data) => {
    try {
        const updatedData = await PatientDrugReactionModel.findByIdAndUpdate(id, {
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
export const deletePatientDrugReaction = async (id) => {
    try {
        const deletedData = await PatientDrugReactionModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Patient Risk not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Patient Risk
export const getAllPatientDrugReaction = async () => {
    try {
        const PatientDrugReactionHistory = await PatientDrugReactionModel.find()
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Risk fetched successfully",
            data: PatientDrugReactionHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Patient Risk By Id
export const getPatientDrugReactionById = async (id) => {
    try {
        const data = await PatientDrugReactionModel.findById(id)
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

export const getPatientDrugReactionByPatientId = async (id) => {
    try {
        const PatientDrugReaction = await PatientDrugReactionModel.find({ patientId: id })
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Risk fetched successfully",
            data: PatientDrugReaction
        };
    } catch (error) {
        throw new Error(error.message);
    }
};