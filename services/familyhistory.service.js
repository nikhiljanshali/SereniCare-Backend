import FamilyHistoryModel from "../models/familyhistory.model.js";
// Add Family History
export const addFamilyHistory = async (data) => {
    try {
        const FamilyHistory = new FamilyHistoryModel(data);
        return await FamilyHistory.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Family History
export const updateFamilyHistory = async (id, data) => {
    try {
        const updatedData = await FamilyHistoryModel.findByIdAndUpdate(id, {
            ...data,
            updatedBy: data.updatedBy
        }, {
            new: true,
            runValidators: true
        });
        if (!updatedData) {
            throw new Error("Family History not found");
        }
        return updatedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Delete Family History
export const deleteFamilyHistory = async (id) => {
    try {
        const deletedData = await FamilyHistoryModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Family History not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Family History
export const getAllFamilyHistory = async () => {
    try {
        const FamilyHistoryHistory = await FamilyHistoryModel.find()
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Family History fetched successfully",
            data: FamilyHistoryHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Family History By Id
export const getFamilyHistoryById = async (id) => {
    try {
        const data = await FamilyHistoryModel.findById(id)
            .populate("diagnosedBy", "name email")
            .populate("createdBy", "name")
            .populate("updatedBy", "name");
        if (!data) {
            throw new Error("Family History not found");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getFamilyHistoryByPatientId = async (id) => {
    try {
        const familyHistory = await FamilyHistoryModel.find({ patientId: id })
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Family History fetched successfully",
            data: familyHistory
        };
    } catch (error) {
        throw new Error(error.message);
    }
};