import {
  getRoleByUserId,
  getDoctorCount,
  getPatientCount,
  getSupplierCount,
  getMedicineCount,
  getAppointmentCount,
  getChiefofcomplaintsCount,
  getPresentIllnessCount,
  getPatientMedicalHistoryCount,
  getPatientSurgicalHistoryCount,
  getFamilyHistoryCount,
  getAllergyHistoryCount,
  getRiskFactorCount,
  getAdverseDrugReactionCount,
  getFamilyHistoryLineageCount
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

export const getSupplierCountController = async (req, res) => {
  try {
    const count = await getSupplierCount(req.user?.id);
    res.status(200).json({
      success: true,
      message: "Supplier count fetched successfully",
      data: { supplierCount: count },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCountsController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const [
      doctorCount,
      patientCount,
      supplierCount,
      medicineCount,
      appointmentCount,
      ChiefofcomplaintsCount,
      PresentIllnessCount,
      PastMedicalHistoryCount,
      PastSurgicalHistoryCount,
      FamilyHistoryCount,
      AllergyHistoryCount,
      RiskFactorCount,
      AdverseDrugReactionCount,
      FamilyHistoryLineageCount,
    ] = await Promise.all([
      getDoctorCount(userId),
      getPatientCount(userId),
      getSupplierCount(userId),
      getMedicineCount(userId),
      getAppointmentCount(userId),
      getChiefofcomplaintsCount(userId),
      getPresentIllnessCount(userId),
      getPatientMedicalHistoryCount(userId),
      getPatientSurgicalHistoryCount(userId),
      getFamilyHistoryCount(userId),
      getAllergyHistoryCount(userId),
      getRiskFactorCount(userId),
      getAdverseDrugReactionCount(userId),
      getFamilyHistoryLineageCount(userId)
    ]);

    res.status(200).json({
      success: true,
      message: "Dashboard counts fetched successfully",
      data: {
        doctorCount,
        patientCount,
        supplierCount,
        medicineCount,
        appointmentCount,
        ChiefofcomplaintsCount,
        PresentIllnessCount,
        PastMedicalHistoryCount,
        PastSurgicalHistoryCount,
        FamilyHistoryCount,
        AllergyHistoryCount,
        RiskFactorCount,
        AdverseDrugReactionCount,
        FamilyHistoryLineageCount,
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};