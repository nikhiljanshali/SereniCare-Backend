import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import DoctorModel from "../models/doctors.model.js";
import AuthUserModel from "../models/authuser.model.js";
import ClinicModel from "../models/clinic.model.js";
import SpecialityModel from "../models/doctors.model.js";
export const createDoctorService = async (payload) => {
  let savedUser = null;
  let savedDoctor = null;

  try {
    const { doctorData, userData, clinics: clinicList } = payload;

    const workEmail = userData?.workEmail;
    const existingUser = await AuthUserModel.findOne({ workEmail });
    if (existingUser)
      throw new Error("User already exists with this workEmail.");

    // 1. Create Auth User
    const user = new AuthUserModel({
      firstName: userData.firstName,
      lastName: userData.lastName,
      workEmail: userData.workEmail,
      phone: userData.phone,
      password: "Dummy@2026",
      role: userData.role,
    });
    savedUser = await user.save();

    // 2. Create Doctor
    const count = await DoctorModel.countDocuments();
    const doctorCode = `DOC-${String(count + 1).padStart(4, "0")}`;

    const doctor = new DoctorModel({
      ...doctorData,
      doctorCode,
      authUserId: savedUser._id,
      phone: userData.phone,
      email: userData.workEmail,
    });
    savedDoctor = await doctor.save();

    // 3. Create Clinics
    const clinicsToInsert = clinicList.map((clinic) => ({
      ...clinic,
      doctorId: savedDoctor._id,
      specializations: clinic.specializations ?? [],
    }));
    const savedClinics = await ClinicModel.insertMany(clinicsToInsert);

    return { savedUser, savedDoctor, savedClinics };
  } catch (error) {
    // 🧹 Manual rollback — clean up whatever was saved before the failure
    if (savedDoctor) await DoctorModel.deleteOne({ _id: savedDoctor._id });
    if (savedUser) await AuthUserModel.deleteOne({ _id: savedUser._id });
    throw error;
  }
};

/**
 * ✅ GET ALL DOCTORS
 */
export const getAllDoctorsService = async () => {
  return await DoctorModel.aggregate([
    {
      $lookup: {
        from: "clinics", // collection name
        localField: "_id", // doctor._id
        foreignField: "doctorId", // clinic.doctorId
        as: "clinicDetails",
      },
    },
    {
      $sort: { createdAt: -1 },
    },
  ]);
};

/**
 * ✅ GET ALL DOCTORS WITH LIMITED FIELDS (for dropdowns, etc.)
 */
export const getAllDoctorsLimitedService = async () => {
  return await DoctorModel.find({}, { _id: 1, firstName: 1, lastName: 1 }).sort({ createdAt: -1 });
};
/**
 * ✅ GET DOCTOR BY ID (with clinics)
 */
export const getDoctorByIdService = async (doctorId) => {
  const doctor = await DoctorModel.findById(doctorId)
    .populate("authUserId")
    .lean();

  if (!doctor) throw new Error("Doctor not found");

  const clinics = await ClinicModel.find({ doctorId }).lean();

  return {
    ...doctor,
    clinics,
  };
};

/**
 * ✅ UPDATE DOCTOR
 */
export const updateDoctorService = async (doctorId, payload) => {
  try {
    const { doctorData, userData, clinics } = payload;

    const doctor = await DoctorModel.findByIdAndUpdate(doctorId, doctorData, {
      new: true,
    });

    if (!doctor) throw new Error("Doctor not found");

    // Update User
    if (userData) {
      await UserModel.findOneAndUpdate(
        { authUserId: doctor.authUserId },
        userData,
      );
    }

    // Replace Clinics (simple approach)
    if (clinics) {
      await ClinicModel.deleteMany({ doctorId });

      await ClinicModel.insertMany(
        clinics.map((c) => ({
          ...c,
          doctorId,
        })),
      );
    }

    return doctor;
  } catch (error) {
    throw error;
  }
};

/**
 * ✅ DELETE DOCTOR (cascade delete)
 */
export const deleteDoctorService = async (doctorId) => {
  try {
    const doctor = await DoctorModel.findById(doctorId);

    if (!doctor) throw new Error("Doctor not found");

    // Delete clinics
    await ClinicModel.deleteMany({ doctorId });

    // Delete doctor
    await DoctorModel.findByIdAndDelete(doctorId);

    // Delete user
    await UserModel.findOneAndDelete({
      authUserId: doctor.authUserId,
    });

    return { message: "Doctor deleted successfully" };
  } catch (error) {
    throw error;
  }
};
