import SupplierModel from "../models/supplier.model.js";
import AuthUserModel from "../models/authuser.model.js";
import bcrypt from "bcryptjs";

export const addSupplierService = async (supplierData) => {
    let savedUser = null;
    let savedSupplier = null;
    try {
        const workEmail = supplierData?.email;
        const existingUser = await AuthUserModel.findOne({ workEmail });
        if (existingUser)
            throw new Error("User already exists with this workEmail.");
        const hashedPassword = await bcrypt.hash('Supplier@2026', 10);
        // 1. Create Auth User
        const user = new AuthUserModel({
            firstName: supplierData.firstName,
            lastName: supplierData.lastName,
            workEmail: workEmail,
            phone: supplierData.phoneNumber,
            password: hashedPassword,
            role: supplierData.role,
        });
        savedUser = await user.save();

        const count = await SupplierModel.countDocuments();
        const supplierCode = `SUP-${String(count + 1).padStart(4, "0")}`;
        const supplier = new SupplierModel({
            ...supplierData,
            supplierCode,
            authUserId: savedUser._id,
        });
        savedSupplier = await supplier.save();
        return {
            message: "Supplier created successfully",
            data: [savedUser, savedSupplier]
        };
    } catch (error) {
        // 🧹 Manual rollback — clean up whatever was saved before the failure
        if (savedSupplier) await SupplierModel.deleteOne({ _id: savedDoctor._id });
        if (savedUser) await AuthUserModel.deleteOne({ _id: savedUser._id });
        throw error;
    }
};

export const getAllSuppliersService = async () => {
    try {
        const suppliers = await SupplierModel.find().sort({ createdAt: -1 });
        return {
            message: "Suppliers fetched successfully",
            data: suppliers
        };
    } catch (error) {
        throw error;
    }
};

export const getSupplierByAuthUserIdService = async (authUserId) => {
    try {
        const supplier = await SupplierModel.findOne({ authUserId });
        if (!supplier) {
            throw new Error("Supplier not found");
        }
        return {
            message: "Supplier fetched successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};

export const updateSupplierService = async (supplierId, updateData) => {
    try {
        const supplier = await SupplierModel.findByIdAndUpdate(supplierId, updateData, {
            new: true,
            runValidators: true
        });
        if (!supplier) {
            throw new Error("Supplier not found");
        }
        return {
            message: "Supplier updated successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};

export const updateSupplierStatusService = async (supplierId, status) => {
    try {
        const supplier = await SupplierModel.findByIdAndUpdate(supplierId, { status }, { new: true, runValidators: true });
        if (!supplier) {
            throw new Error("Supplier not found");
        }
        return {
            message: "Supplier status updated successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};

export const deleteSupplierService = async (supplierId) => {
    try {
        const supplier = await SupplierModel.findByIdAndDelete(supplierId);
        if (!supplier) {
            throw new Error("Supplier not found");
        }
        return {
            message: "Supplier deleted successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};

export const deactivateSupplierService = async (supplierId) => {
    try {
        const supplier = await SupplierModel.findByIdAndUpdate(supplierId, { isActive: false, status: "Inactive" }, { new: true });
        if (!supplier) {
            throw new Error("Supplier not found");
        }
        return {
            message: "Supplier deactivated successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};

export const searchSuppliersService = async (searchText) => {
    try {
        const suppliers = await SupplierModel.find({
            $or: [{
                supplierName: { $regex: searchText, $options: "i" }
            },
            {
                supplierCode: { $regex: searchText, $options: "i" }
            },
            {
                email: { $regex: searchText, $options: "i" }
            }]
        });
        return {
            message: "Suppliers fetched successfully",
            data: suppliers
        };

    } catch (error) {
        throw error;
    }
};

export const getSupplierByIdService = async (supplierId) => {
    try {

        const supplier = await SupplierModel.findById(supplierId);

        if (!supplier) {
            throw new Error("Supplier not found");
        }

        return {
            message: "Supplier fetched successfully",
            data: supplier
        };

    } catch (error) {
        throw error;
    }
};


export const getSupplierStatisticsService = async () => {
    try {
        const totalSuppliers =
            await SupplierModel.countDocuments();
        const activeSuppliers =
            await SupplierModel.countDocuments({
                isActive: true
            });
        const approvedSuppliers =
            await SupplierModel.countDocuments({
                status: "Approved"
            });
        const pendingSuppliers =
            await SupplierModel.countDocuments({
                status: "Pending"
            });
        return {
            totalSuppliers,
            activeSuppliers,
            approvedSuppliers,
            pendingSuppliers
        };
    } catch (error) {
        throw error;
    }
};