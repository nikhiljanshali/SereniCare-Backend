import MedicineModel from "../models/medicine.model.js";
/* -------------------------------------------------------------------------- */
/*                          Add Multiple Medicines                            */
/* -------------------------------------------------------------------------- */

export const addMultipleMedicinesService = async (medicinesData) => {
    try {
        if (!Array.isArray(medicinesData) || medicinesData.length === 0) {
            throw new Error("Medicine data array is required");
        }
        const medicines = await MedicineModel.insertMany(medicinesData, {
            ordered: false
        });
        return {
            success: true,
            count: medicines.length,
            message: `${medicines.length} medicines imported successfully`,
            data: medicines
        };
    } catch (error) {
        throw error;
    }
};

export const addMultipleMedicinesSafeService = async (medicinesData) => {
    try {

        if (!Array.isArray(medicinesData) || medicinesData.length === 0) {
            throw new Error("Medicine data array is required");
        }

        const medicineCodes = medicinesData.map(
            medicine => medicine.medicineCode
        );

        const existingMedicines = await MedicineModel.find({
            medicineCode: { $in: medicineCodes }
        }).select("medicineCode");

        const existingCodes = existingMedicines.map(
            item => item.medicineCode
        );

        const newMedicines = medicinesData.filter(
            item => !existingCodes.includes(item.medicineCode)
        );

        if (newMedicines.length === 0) {
            return {
                success: false,
                message: "All medicines already exist",
                count: 0,
                data: []
            };
        }

        const insertedMedicines = await MedicineModel.insertMany(
            newMedicines
        );

        return {
            success: true,
            message: `${insertedMedicines.length} medicines imported successfully`,
            count: insertedMedicines.length,
            skipped: existingCodes.length,
            data: insertedMedicines
        };

    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                               Add Medicine                                 */
/* -------------------------------------------------------------------------- */
export const addMedicineService = async (medicineData) => {
    try {
        const medicine = await MedicineModel.create(medicineData);
        return {
            message: "Medicine added successfully",
            data: medicine
        };
    } catch (error) {
        throw error;
    }
};
/* -------------------------------------------------------------------------- */
/*                             Update Medicine                                */
/* -------------------------------------------------------------------------- */
export const updateMedicineService = async (medicineId, updateData) => {
    try {
        const medicine = await MedicineModel.findByIdAndUpdate(medicineId, updateData, {
            new: true,
            runValidators: true
        });
        if (!medicine) {
            throw new Error("Medicine not found");
        }
        return {
            message: "Medicine updated successfully",
            data: medicine
        };

    } catch (error) {
        throw error;
    }
};
/* -------------------------------------------------------------------------- */
/*                             Delete Medicine                                */
/* -------------------------------------------------------------------------- */
export const deleteMedicineService = async (medicineId) => {
    try {
        const medicine = await MedicineModel.findByIdAndDelete(medicineId);
        if (!medicine) {
            throw new Error("Medicine not found");
        }
        return {
            message: "Medicine deleted successfully",
            data: medicine
        };
    } catch (error) {
        throw error;
    }
};
/* -------------------------------------------------------------------------- */
/*                             Get All Medicines                              */
/* -------------------------------------------------------------------------- */
export const getAllMedicinesService = async () => {
    try {
        const medicines = await MedicineModel.find().populate("supplierId").sort({ medicineName: 1 });
        return {
            message: "Medicines fetched successfully",
            // count: medicines.length,
            data: medicines
        };
    } catch (error) {
        throw error;
    }
};
/* -------------------------------------------------------------------------- */
/*                           Get Medicine By Id                               */
/* -------------------------------------------------------------------------- */
export const getMedicineByIdService = async (medicineId) => {
    try {
        const medicine = await MedicineModel.findById(medicineId).populate("supplierId");
        if (!medicine) {
            throw new Error("Medicine not found");
        }
        return {
            data: medicine
        };
    } catch (error) {
        throw error;
    }
};
/* -------------------------------------------------------------------------- */
/*                              Search Medicine                               */
/* -------------------------------------------------------------------------- */
export const searchMedicineService = async (searchText) => {
    try {
        const medicines = await MedicineModel.find({
            $or: [
                {
                    medicineName: {
                        $regex: searchText,
                        $options: "i"
                    }
                },
                {
                    genericName: {
                        $regex: searchText,
                        $options: "i"
                    }
                },
                {
                    brandName: {
                        $regex: searchText,
                        $options: "i"
                    }
                },
                {
                    medicineCode: {
                        $regex: searchText,
                        $options: "i"
                    }
                },
                {
                    manufacturer: {
                        $regex: searchText,
                        $options: "i"
                    }
                }
            ]
        })
            .populate("supplierId")
            .sort({ medicineName: 1 });

        return {
            count: medicines.length,
            data: medicines
        };

    } catch (error) {
        throw error;
    }
};

export const getMedicinesByCategoryService = async (category) => {
    try {
        const medicines = await MedicineModel.find({
            category
        });
        return {
            count: medicines.length,
            data: medicines
        };
    } catch (error) {
        throw error;
    }
};

export const getActiveMedicinesService = async () => {
    try {
        const medicines = await MedicineModel.find({ isActive: true });
        return {
            message: 'Active medicine fetched successfully',
            count: medicines.length,
            data: medicines
        };
    } catch (error) {
        throw error;
    }
};

export const getPrescriptionMedicinesService = async () => {
    try {
        const medicines = await MedicineModel.find({ requiresPrescription: true });
        return {
            count: medicines.length,
            data: medicines
        };
    } catch (error) {
        throw error;
    }
};

export const updateMedicineStatusService = async (medicineId, isActive) => {
    try {
        const medicine = await MedicineModel.findByIdAndUpdate(medicineId, { isActive }, { new: true });
        if (!medicine) {
            throw new Error("Medicine not found");
        }
        return {
            message: `Medicine ${isActive ? "activated" : "deactivated"} successfully`,
            data: medicine
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                       Category Wise Medicines                              */
/* -------------------------------------------------------------------------- */

export const categoryWiseMedicineService = async () => {
    try {
        const medicines = await MedicineModel.find({ isActive: true }).sort({ category: 1, medicineName: 1 });
        const groupedMedicines = medicines.reduce(
            (acc, medicine) => {
                const category = medicine.category || "Others";
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(medicine);
                return acc;
            }, {}
        );
        return {
            count: medicines.length,
            data: groupedMedicines
        };

    } catch (error) {
        throw error;
    }
};