import {
  getRoleByUserId,
  getDoctorCount,
  getPatientCount,
} from "../services/meshtable.service.js";

export const getRoleByUserIdController = async (req, res) => {
  try {
    const result = await getRoleByUserId(req.params.id);
    res.status(201).json({
      message: "User details fetched successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: false,
    });
  }
};

export const getDoctorCountController = async (req, res) => {
  try {
    const count = await getDoctorCount(req.user?.id);
    res.status(200).json({
      success: true,
      message: "Doctor count fetched successfully",
      data: { doctorCount: count },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPatientCountController = async (req, res) => {
  try {
    const count = await getPatientCount(req.user?.id);
    res.status(200).json({
      success: true,
      message: "Patient count fetched successfully",
      data: { patientCount: count },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
