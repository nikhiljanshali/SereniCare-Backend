import AuthUserModel from "../models/authuser.model.js";
import MedicineModel from "../models/medicine.model.js";
import AppointmentBookingModel from "../models/appointmentBooking.model.js";
import ChiefComplaintModel from "../models/chiefComplaint.model.js"
import HistoryOfPresentIllnessModel from "../models/historyofPresentIllness.model.js";
import PastMedicalHistoryModel from "../models/pastmedical.model.js";
import PastSurgicalHistoryModel from "../models/pastsurgical.model.js";
import FamilyHistoryModel from "../models/familyhistory.model.js"
import AllergyHistoryModel from "../models/allergies.model.js"
import RiskFactorModel from "../models/riskmaster.model.js"
import AdverseDrugReactionModel from "../models/patient-drug-reaction.model.js"
import FamilyHistoryLineageModel from "../models/familyHistoryLineage.model.js"

export const getRoleByUserId = async (role) => {
  const result = await AuthUserModel.findById(role);
  return result;
};

export const getDoctorCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Doctor" });
  } catch (err) {
    console.error("Doctor count error:", err);
    throw err;
  }
};

export const getPatientCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Patient" });
  } catch (err) {
    console.error("Patient count error:", err);
    throw err;
  }
};

export const getSupplierCount = async (userId) => {
  try {
    return await AuthUserModel.countDocuments({ role: "Supplier" });
  } catch (err) {
    console.error("Supplier count error:", err);
    throw err;
  }
};

export const getMedicineCount = async (userId) => {
  try {
    return await MedicineModel.countDocuments();
  } catch (err) {
    console.error("Medicine count error:", err);
    throw err;
  }
};

export const getAppointmentCount = async (userId) => {
  try {
    return await AppointmentBookingModel.countDocuments();
  } catch (err) {
    console.error("AppoinmentBooking count error:", err);
    throw err;
  }
};

export const getChiefofcomplaintsCount = async (userId) => {
  try {
    return await ChiefComplaintModel.countDocuments();
  } catch (err) {
    console.error("Chief Complaint count error:", err);
    throw err;
  }
};

export const getPresentIllnessCount = async (userId) => {
  try {
    return await HistoryOfPresentIllnessModel.countDocuments();
  } catch (err) {
    console.error("History Of Present Illness count error:", err);
    throw err;
  }
};

export const getPatientMedicalHistoryCount = async (userId) => {
  try {
    return await PastMedicalHistoryModel.countDocuments();
  } catch (err) {
    console.error("Past Medical History count error:", err);
    throw err;
  }
};

export const getPatientSurgicalHistoryCount = async (userId) => {
  try {
    return await PastSurgicalHistoryModel.countDocuments();
  } catch (err) {
    console.error("Past Surgical History count error:", err);
    throw err;
  }
};

export const getFamilyHistoryCount = async (userId) => {
  try {
    return await FamilyHistoryModel.countDocuments();
  } catch (err) {
    console.error("Family History count error:", err);
    throw err;
  }
}

export const getAllergyHistoryCount = async (userId) => {
  try {
    return await AllergyHistoryModel.countDocuments();
  } catch (err) {
    console.error("Allergy History count error:", err);
    throw err;
  }
}

export const getRiskFactorCount = async (userId) => {
  try {
    return await RiskFactorModel.countDocuments();
  } catch (err) {
    console.error("Risk Factory count error:", err);
    throw err;
  }
}

export const getAdverseDrugReactionCount = async (userId) => {
  try {
    return await AdverseDrugReactionModel.countDocuments();
  } catch (err) {
    console.error("Adverse Drug Reaction count error:", err);
    throw err;
  }
}

export const getFamilyHistoryLineageCount = async (userId) => {
  try {
    return await FamilyHistoryLineageModel.countDocuments();
  } catch (err) {
    console.error("Family History Lineage count error:", err);
    throw err;
  }
}