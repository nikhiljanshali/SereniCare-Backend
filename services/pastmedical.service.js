import PastMedicalModel from "../models/pastmedical.model.js";
// Add Past Medical History
export const addPastMedical = async (data) => {
    try {
        const pastMedical = new PastMedicalModel(data);
        return await pastMedical.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
// Update Past Medical History
export const updatePastMedical = async (id, data) => {
    try {
        const updatedData = await PastMedicalModel.findByIdAndUpdate(
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
export const deletePastMedical = async (id) => {
    try {
        const deletedData = await PastMedicalModel.findByIdAndDelete(id);
        if (!deletedData) {
            throw new Error("Past medical history not found");
        }
        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Get All Past Medical History
// export const getAllPastMedical = async (filter = {}) => {
//     try {
//         return await PastMedicalModel.find(filter)
//             .populate("diagnosedBy", "name email")
//             .populate("createdBy", "name")
//             .populate("updatedBy", "name")
//             .sort({ createdAt: -1 });
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

export const getAllPastMedical = async () => {
    try {
        const pastMedicalHistory = await PastMedicalModel.find()
            .populate("diagnosedBy", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Past Medical History fetched successfully",
            data: pastMedicalHistory
        };
    } catch (error) {
        throw error;
    }
};


// Get Past Medical History By Id
export const getPastMedicalById = async (id) => {
    try {
        const pastMedicalHistory = await PastMedicalModel.findById(id)
            .populate("diagnosedBy", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Past Medical History fetched successfully",
            data: pastMedicalHistory
        };
    } catch (error) {
        throw error;
    }
};

export const getPastMedicalByPatientId = async (id) => {
    try {
        const pastMedicalHistory = await PastMedicalModel.find({ patientId: id })
            .populate("diagnosedBy", "firstName lastName email")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });
        return {
            message: "Past Medical History fetched successfully",
            data: pastMedicalHistory
        };
    } catch (error) {
        throw new Error(error.message);
    }
};