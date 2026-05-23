import AuthUserModel from "../models/authuser.model.js";

export const getRoleByUserId = async (role) => {
  const result = await AuthUserModel.findById(role);
  return result;
};

export const getDoctorCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "doctor" });
  } catch (err) {
    console.error("Doctor count error:", err);
    throw err;
  }
};

export const getPatientCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "patient" });
  } catch (err) {
    console.error("Patient count error:", err);
    throw err;
  }
};
