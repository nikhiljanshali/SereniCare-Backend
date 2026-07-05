import FamilyHistoryLineageModel from "../models/familyHistoryLineage.model.js";

// Add Family History
export const addFamilyHistory = async (data) => {
    try {
        const lastRecord = await FamilyHistoryLineageModel
            .findOne()
            .sort({ createdAt: -1 });

        let nextNumber = 1;

        if (lastRecord?.familyHistoryCode) {
            const lastNumber = parseInt(
                lastRecord.familyHistoryCode.replace("FMH", ""),
                10
            );
            nextNumber = lastNumber + 1;
        }

        data.familyHistoryCode = `FMH${String(nextNumber).padStart(5, "0")}`;

        const familyHistory = new FamilyHistoryLineageModel(data);

        return await familyHistory.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update Family History
export const updateFamilyHistory = async (id, data) => {
    try {
        const updatedData = await FamilyHistoryLineageModel.findByIdAndUpdate(
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
            throw new Error("Family history record not found");
        }

        return updatedData;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete Family History
export const deleteFamilyHistory = async (id) => {
    try {
        const deletedData = await FamilyHistoryLineageModel.findByIdAndDelete(id);

        if (!deletedData) {
            throw new Error("Family history record not found");
        }

        return deletedData;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get All Family History
export const getAllFamilyHistory = async () => {
    try {
        const familyHistory = await FamilyHistoryLineageModel.find()
            .populate("patientId", "patientCode firstName lastName")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });

        return {
            message: "Family history fetched successfully",
            data: familyHistory
        };
    } catch (error) {
        throw error;
    }
};

// Get Family History By Id
export const getFamilyHistoryById = async (id) => {
    try {
        const familyHistory = await FamilyHistoryLineageModel.findById(id)
            .populate("patientId", "patientCode firstName lastName")
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email");

        if (!familyHistory) {
            throw new Error("Family history record not found");
        }

        return {
            message: "Family history fetched successfully",
            data: familyHistory
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get Family History By Patient Id
export const getFamilyHistoryByPatientId = async (patientId) => {
    try {
        console.log("Fetching family history for patientId:", patientId); // Debugging log
        const familyHistory = await FamilyHistoryLineageModel.find({
            patientId
        })
            .populate("createdBy", "name email")
            .populate("updatedBy", "name email")
            .sort({ createdAt: -1 });

        return {
            message: "Family history fetched successfully",
            data: familyHistory
        };
    } catch (error) {
        throw new Error(error.message);
    }
};