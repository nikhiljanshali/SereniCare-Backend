import {
  getAllDoctorsService,
  getAllDoctorsLimitedService,
  getDoctorByIdService,
  createDoctorService,
  updateDoctorService,
  deleteDoctorService,
} from "../services/doctors.service.js";

/**
 * ✅ GET ALL DOCTORS
 */
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await getAllDoctorsService();
    res.status(200).json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

/**
 * ✅ GET ALL DOCTORS WITH LIMITED FIELDS (for dropdowns, etc.)
 */
export const getAllDoctorsLimited = async (req, res) => {
  try {
    const doctors = await getAllDoctorsLimitedService();
    res.status(200).json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

/**
 * ✅ GET DOCTOR BY ID
 */
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await getDoctorByIdService(id);

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ CREATE DOCTOR
 */
export const createDoctor = async (req, res) => {
  try {
    // Extract authUserId from authenticated user
    const authUserId = req.user?.id || req.user?._id;

    if (!authUserId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: authUserId not found in token",
      });
    }

    // Add authUserId to doctorData from request
    const payload = {
      ...req.body,
      doctorData: {
        ...req.body.doctorData,
        authUserId,
      },
    };

    const result = await createDoctorService(payload);

    res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      data: result,
    });
  } catch (error) {
    const statusCode =
      error.message.includes("required") || error.message.includes("authUserId")
        ? 400
        : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ UPDATE DOCTOR
 */
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDoctor = await updateDoctorService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ DELETE DOCTOR
 */
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteDoctorService(id);

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};
