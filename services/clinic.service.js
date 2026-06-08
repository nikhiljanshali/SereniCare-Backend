import ClinicModel from "../models/clinic.model.js";
import AuthUserModel from "../models/authuser.model.js";
import bcrypt from "bcryptjs";

export const register_Clinic_Service = async (clinicData) => {
  const admin = clinicData.admin;

  if (!admin) {
    throw new Error("Admin data is required");
  }

  // 🔍 1. Check Admin Email in Auth Users
  const existingUser = await AuthUserModel.findOne({
    workEmail: admin.adminEmail,
  });

  if (existingUser) {
    return {
      status: false,
      message: "Admin email already registered in system.",
    };
  }

  // 🔍 2. Check Admin Email in Clinics
  const existingAdminInClinic = await ClinicModel.findOne({
    "admin.adminEmail": admin.adminEmail,
  });

  if (existingAdminInClinic) {
    return {
      status: false,
      message: "Admin email already linked with another clinic.",
    };
  }

  // 🔍 3. Check Clinic Email
  const existingClinicEmail = await ClinicModel.findOne({
    clinicEmail: clinicData.clinicEmail,
  });

  if (existingClinicEmail) {
    return {
      status: false,
      message: "Clinic email already exists.",
    };
  }

  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash(admin.password, 10);

  // ✅ Create new user (no update allowed now)
  const user = await AuthUserModel.create({
    firstName: admin.firstName,
    lastName: admin.lastName,
    role: admin.role,
    workEmail: admin.adminEmail,
    phone: admin.mobile,
    password: hashedPassword,
  });

  // ✅ Attach userId
  clinicData.admin.userId = user._id;

  // ❌ remove password before saving clinic
  delete clinicData.admin.password;

  // 🏥 Save clinic
  const clinic = new ClinicModel(clinicData);
  const savedClinic = await clinic.save();

  return {
    status: true,
    message: "Clinic registered successfully",
    clinic: savedClinic,
    user,
  };
};

export const getAll_Clinic_Service = async () => {
  const clinics = await ClinicModel.find();
  return clinics;
};

export const get_Clinic_ById_Service = async (id) => {
  const clinic = await ClinicModel.findById(id);
  return clinic;
};

export const get_Clinics_By_DoctorId_Service = async (doctorId) => {
  const clinic = await ClinicModel.findOne({ DoctorId: doctorId });
  return clinic;
};

export const update_Clinic_Service = async (id, clinicData) => {
  const clinic = await ClinicModel.findByIdAndUpdate(id, clinicData, {
    new: ttrue,
  });
  return clinic;
};

export const delete_Clinic_Service = async (id) => {
  const clinic = await ClinicModel.findByIdAndDelete(id);
  return clinic;
};
