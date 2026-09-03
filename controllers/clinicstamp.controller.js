import {
  uploadClinicStamp_Service,
  getAllClinicStamps_Service,
  getClinicStampById_Service,
  getClinicStampsByClinicId_Service,
  deleteClinicStamp_Service,
} from "../services/clinicstamp.service.js";

/**
 * Upload clinic stamp
 */
export const uploadClinicStamp = async (req, res) => {
  try {
    const { clinicId, doctorId, fileName, fileType, fileSize, fileData } =
      req.body;

    const uploadData = {
      clinicId,
      doctorId,
      fileName,
      fileType,
      fileSize,
      fileData, // Should be base64 encoded file data
    };

    const result = await uploadClinicStamp_Service(uploadData);

    if (!result.status) {
      return res.status(400).json({
        message: result.message,
        status: false,
      });
    }

    res.status(201).json({
      message: result.message,
      status: true,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

/**
 * Get all clinic stamps
 */
export const getAllClinicStamps = async (req, res) => {
  try {
    const result = await getAllClinicStamps_Service();

    res.status(200).json({
      message: "Clinic stamps fetched successfully",
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

/**
 * Get clinic stamp by ID
 */
export const getClinicStampById = async (req, res) => {
  try {
    const result = await getClinicStampById_Service(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Clinic stamp not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic stamp fetched successfully",
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

/**
 * Get clinic stamps by clinic ID
 */
export const getClinicStampsByClinicId = async (req, res) => {
  try {
    const result = await getClinicStampsByClinicId_Service(req.params.clinicId);

    if (!result || result.length === 0) {
      return res.status(404).json({
        message: "No clinic stamps found for this clinic",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic stamps fetched successfully",
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

/**
 * Delete clinic stamp
 */
export const deleteClinicStamp = async (req, res) => {
  try {
    const result = await deleteClinicStamp_Service(req.params.id);
    if (!result) {
      return res.status(404).json({
        message: "Clinic stamp not found",
        status: false,
      });
    }
    res.status(200).json({
      message: "Clinic stamp deleted successfully",
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
