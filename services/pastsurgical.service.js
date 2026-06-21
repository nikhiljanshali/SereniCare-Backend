import PastSurgicalModel from "../models/pastsurgical.model.js";
// Add Past Medical History
export const addPastSurgical = async (data) => {
    try {
        console.log(data);
        const PastSurgical = new PastSurgicalModel(data);
        return await PastSurgical.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Past Medical History
export const updatePastSurgical = async (id, data) => {
    try {
        const updatedData = await PastSurgicalModel.findByIdAndUpdate(
            id,
            {
                ...data,
                updatedBy: data.updatedBy
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!updatedData) {
            throw new Error("Past medical history not found");
        }
        return updatedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Delete Past Medical History
export const deletePastSurgical = async (id) => {
    try {
        const deletedData = await PastSurgicalModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Past medical history not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Past Medical History
export const getAllPastSurgical = async () => {
    try {
        const PastSurgicalHistory = await PastSurgicalModel.find()
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Past Medical History fetched successfully",
            data: PastSurgicalHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Past Medical History By Id
export const getPastSurgicalById = async (id) => {
    try {
        const data = await PastSurgicalModel.findById(id)
            .populate("diagnosedBy", "name email")
            .populate("createdBy", "name")
            .populate("updatedBy", "name");
        if (!data) {
            throw new Error("Past medical history not found");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getPastSurgicalByPatientId = async (id) => {
    try {
        console.log(id);
        const pastMedicalHistory = await PastSurgicalModel.find({ patientId: id })
            .populate("surgeonName", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Past Surgical History fetched successfully",
            data: pastMedicalHistory
        };
    } catch (error) {
        throw new Error(error.message);
    }
};