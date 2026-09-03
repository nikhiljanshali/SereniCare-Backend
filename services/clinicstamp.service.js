import ClinicStampModel from "../models/clinicstamp.model.js";

/**
 * Upload clinic stamp
 * @param {Object} uploadData - Object containing clinicId, doctorId, file data
 * @returns {Object} Upload result with status and data
 */
export const uploadClinicStamp_Service = async (uploadData) => {
  try {
    const { clinicId, doctorId, fileName, fileType, fileSize, fileData } =
      uploadData;

    // Validation
    if (!clinicId || !doctorId || !fileName || !fileType || !fileSize || !fileData) {
      return {
        status: false,
        message: "Missing required fields: clinicId, doctorId, fileName, fileType, fileSize, fileData",
      };
    }

    // Create clinic stamp document
    const clinicStamp = new ClinicStampModel({
      clinicId,
      doctorId,
      fileName,
      fileType,
      fileSize,
      fileData,
    });

    const savedClinicStamp = await clinicStamp.save();

    return {
      status: true,
      message: "Clinic stamp uploaded successfully",
      data: savedClinicStamp,
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
    };
  }
};

/**
 * Get all clinic stamps
 * @returns {Array} All clinic stamp records
 */
export const getAllClinicStamps_Service = async () => {
  try {
    const clinicStamps = await ClinicStampModel.find()
      .populate("clinicId")
      .populate("doctorId");
    return clinicStamps;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Get clinic stamp by ID
 * @param {String} id - Clinic stamp ID
 * @returns {Object} Clinic stamp document
 */
export const getClinicStampById_Service = async (id) => {
  try {
    const clinicStamp = await ClinicStampModel.findById(id)
      .populate("clinicId")
      .populate("doctorId");
    return clinicStamp;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Get clinic stamps by clinic ID
 * @param {String} clinicId - Clinic ID
 * @returns {Array} Clinic stamps for the clinic
 */
export const getClinicStampsByClinicId_Service = async (clinicId) => {
  try {
    const clinicStamps = await ClinicStampModel.find({ clinicId })
      // .populate("doctorId")
      .sort({ createdAt: -1 });
    return clinicStamps;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Delete clinic stamp
 * @param {String} id - Clinic stamp ID
 * @returns {Object} Deleted clinic stamp document
 */
export const deleteClinicStamp_Service = async (id) => {
  try {
    const clinicStamp = await ClinicStampModel.findByIdAndDelete(id);
    return clinicStamp;
  } catch (error) {
    throw new Error(error.message);
  }
};
