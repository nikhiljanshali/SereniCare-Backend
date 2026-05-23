import {
  register_Clinic_Service,
  getAll_Clinic_Service,
  get_Clinic_ById_Service,
  update_Clinic_Service,
  delete_Clinic_Service,
} from "../services/clinic.service.js";

// =======================
// 🔹 GET ALL PATIENTS
// =======================
export const getAllClinics = async (req, res) => {
  try {
    const result = await getAll_Clinic_Service();
    res.status(200).json({
      message: "Clinics fetched successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

// =======================
// 🔹 GET PATIENT BY ID
// =======================
export const getClinicById = async (req, res) => {
  try {
    const result = await get_Clinic_ById_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Clinic not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic fetched successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

// =======================
// 🔹 CREATE PATIENT
// =======================
export const createClinic = async (req, res) => {
  try {
    const result = await register_Clinic_Service(req.body);

    res.status(201).json({
      message: "Clinic created successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

// =======================
// 🔹 UPDATE PATIENT
// =======================
export const updateClinic = async (req, res) => {
  try {
    const result = await update_Clinic_Service(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Clinic not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

// =======================
// 🔹 DELETE PATIENT
// =======================
export const deleteClinic = async (req, res) => {
  try {
    const result = await delete_Clinic_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Clinic not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic deleted successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};
