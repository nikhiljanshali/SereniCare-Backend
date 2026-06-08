import AuthUserModel from "../models/authuser.model.js";

export const getRoleByUserId = async (role) => {
  const result = await AuthUserModel.findById(role);
  return result;
};

export const getDoctorCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Doctor" });
  } catch (err) {
    console.error("Doctor count error:", err);
    throw err;
  }
};

export const getPatientCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Patient" });
  } catch (err) {
    console.error("Patient count error:", err);
    throw err;
  }
};

export const getSupplierCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Supplier" });
  } catch (err) {
    console.error("Supplier count error:", err);
    throw err;
  }
};
