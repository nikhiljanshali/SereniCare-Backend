import PatientAllergiesModel from "../models/patient-allergies.model.js";
// Add Patient Allergies
export const addPatientAllergies = async (data) => {
    try {
        const PatientAllergies = new PatientAllergiesModel(data);
        return await PatientAllergies.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Patient Allergies
export const updatePatientAllergies = async (id, data) => {
    try {
        const updatedData = await PatientAllergiesModel.findByIdAndUpdate(id, {
            ...data,
            updatedBy: data.updatedBy
        }, {
            new: true,
            runValidators: true
        });
        if (!updatedData) {
            throw new Error("Patient Allergies not found");
        }
        return updatedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Delete Patient Allergies
export const deletePatientAllergies = async (id) => {
    try {
        const deletedData = await PatientAllergiesModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Patient Allergies not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Patient Allergies
export const getAllPatientAllergies = async () => {
    try {
        const PatientAllergiesHistory = await PatientAllergiesModel.find()
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Allergies fetched successfully",
            data: PatientAllergiesHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Patient Allergies By Id
export const getPatientAllergiesById = async (id) => {
    try {
        const data = await PatientAllergiesModel.findById(id)
            .populate("diagnosedBy", "name email")
            .populate("createdBy", "name")
            .populate("updatedBy", "name");
        if (!data) {
            throw new Error("Patient Allergies not found");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getPatientAllergiesByPatientId = async (id) => {
    try {
        const PatientAllergies = await PatientAllergiesModel.find({ patientId: id })
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Patient Allergies fetched successfully",
            data: PatientAllergies
        };
    } catch (error) {
        throw new Error(error.message);
    }
};