import {
  getAllPatients_Service,
  getPatientById_Service,
  registerPatient_Service,
  updatePatient_Service,
  deletePatient_Service,
  getPatientsByDoctorId_Service
} from "../services/patient.service.js";

export const createPatient = async (req, res) => {
  try {
    const userId = req.user?.id; // from JWT middleware

    const result = await registerPatient_Service(req.body, userId);

    res.status(201).json({
      message: "Patient created successfully",
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

export const getAllPatients = async (req, res) => {
  try {
    const patients = await getAllPatients_Service();
    res.status(200).json({
      message: "Patients fetched successfully",
      status: true,
      data: patients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const result = await getPatientById_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Patient not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Patient fetched successfully",
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

export const updatePatient = async (req, res) => {
  try {
    const userId = req.user?.id;

    const result = await updatePatient_Service(req.params.id, req.body, userId);

    if (!result) {
      return res.status(404).json({
        message: "Patient not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Patient updated successfully",
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

export const deletePatient = async (req, res) => {
  try {
    const result = await deletePatient_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Patient not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Patient deleted successfully",
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

export const getPatientsByDoctorId = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await getPatientsByDoctorId_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Patient not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Patient fetched successfully",
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