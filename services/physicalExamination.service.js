import PhysicalExaminationModel from "../models/physicalExamination.model.js";
// Create Physical Examination
export const addPhysicalExamination = async (data) => {
    try {
        const physicalExamination = new PhysicalExaminationModel(data);
        const savedData = await physicalExamination.save();

        return {
            message: "Physical Examination created successfully",
            data: savedData
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update Physical Examination
export const updatePhysicalExamination = async (id, data) => {
    try {
        const updatedData = await PhysicalExaminationModel.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedData) {
            throw new Error("Physical Examination not found");
        }

        return {
            message: "Physical Examination updated successfully",
            data: updatedData
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete Physical Examination
export const deletePhysicalExamination = async (id) => {
    try {
        const deletedData = await PhysicalExaminationModel.findByIdAndDelete(id);

        if (!deletedData) {
            throw new Error("Physical Examination not found");
        }

        return {
            message: "Physical Examination deleted successfully",
            data: deletedData
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get All Physical Examinations
export const getAllPhysicalExaminations = async () => {
    try {
        const data = await PhysicalExaminationModel.find()
            .populate("patientId")
            .sort({ createdAt: -1 });

        return {
            message: "Physical Examinations fetched successfully",
            data
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get Physical Examination By Id
export const getPhysicalExaminationById = async (id) => {
    try {
        const data = await PhysicalExaminationModel.findById(id)
            .populate("patientId");

        if (!data) {
            throw new Error("Physical Examination not found");
        }

        return {
            message: "Physical Examination fetched successfully",
            data
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get Physical Examination By Patient Id
export const getPhysicalExaminationByPatientId = async (patientId) => {
    try {
        const data = await PhysicalExaminationModel.find({ patientId })
            .populate("patientId")
            .sort({ createdAt: -1 });

        return {
            message: "Physical Examination fetched successfully",
            data
        };
    } catch (error) {
        throw new Error(error.message);
    }
};