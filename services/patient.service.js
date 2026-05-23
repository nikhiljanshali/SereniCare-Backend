import PatientModel, {
  AuthUserModel,
  MedicalHistoryModel,
  InsuranceModel,
} from "../models/patientuser.model.js";

export const registerPatient_Service = async (patientData, userId) => {
  let savedUser = null;
  let savedPatient = null;
  try {
    const { medicalHistories, insuranceDetails, ...basicData } = patientData;
    console.log("Received patient data:", patientData);
    const workEmail = patientData?.email;
    const existingUser = await AuthUserModel.findOne({ workEmail });
    if (existingUser)
      throw new Error("User already exists with this workEmail.");
    const count = await PatientModel.countDocuments();
    const patientCode = `PAT-${String(count + 1).padStart(4, "0")}`;
    console.log("Generated patient code:", patientCode);
    // 1. Create Auth User
    const user = new AuthUserModel({
      firstName: patientData.firstName,
      lastName: patientData.lastName,
      workEmail: patientData.email,
      phone: patientData.phone,
      password: "Dummy@2026",
      role: patientData.role,
    });
    savedUser = await user.save();

    // ✅ Create Patient First
    const patient = new PatientModel({
      ...basicData,
      patientCode,
      authUserId: savedUser._id,
      createdBy: userId,
    });
    savedPatient = await patient.save();
    // =========================
    // 🔹 Medical History Save
    // =========================
    if (medicalHistories && Array.isArray(medicalHistories)) {
      const histories = await MedicalHistoryModel.insertMany(
        medicalHistories.map((h) => ({
          ...h,
          patientId: savedPatient._id,
        })),
      );
      savedPatient.medicalHistories = histories.map((h) => h._id);
    }

    // =========================
    // 🔹 Insurance Save
    // =========================
    if (insuranceDetails && Array.isArray(insuranceDetails)) {
      console.log("Saving insurance details:", insuranceDetails);
      const insurances = await InsuranceModel.insertMany(
        insuranceDetails.map((h) => ({
          ...h,
          patientId: savedPatient._id,
        })),
      );
      savedPatient.insuranceDetails = insurances.map((h) => h._id);
    }
    await savedPatient.save();

    return savedPatient;
  } catch (error) {
    // 🧹 Manual rollback — clean up whatever was saved before the failure
    if (savedPatient) await PatientModel.deleteOne({ _id: savedPatient._id });
    throw error;
  }
};

export const getAllPatients_Service = async () => {
  // return await PatientModel.aggregate([
  //   {
  //     $lookup: {
  //       from: "clinics", // collection name
  //       localField: "_id", // doctor._id
  //       foreignField: "doctorId", // clinic.doctorId
  //       as: "clinicDetails",
  //     },
  //   },
  //   {
  //     $sort: { createdAt: -1 },
  //   },
  // ]);
  return await PatientModel.find({ isDeleted: false })
    .populate("medicalHistories")
    .populate("insuranceDetails")
    .sort({ createdAt: -1 });
};

export const getPatientById_Service = async (id) => {
  return await PatientModel.findOne({ _id: id, isDeleted: false })
    .populate("medicalHistories")
    .populate("insuranceDetails");
};

export const updatePatient_Service = async (id, patientData, userId) => {
  const { medicalHistories, insuranceDetails, ...basicData } = patientData;

  // Update basic patient info
  const updatedPatient = await PatientModel.findByIdAndUpdate(
    id,
    {
      ...basicData,
      updatedBy: userId,
    },
    { new: true },
  );

  // Update medical histories if provided
  if (medicalHistories && Array.isArray(medicalHistories)) {
    // Remove old histories for this patient
    await MedicalHistoryModel.deleteMany({ patientId: id });
    // Add new histories
    const histories = await MedicalHistoryModel.insertMany(
      medicalHistories.map((h) => ({
        ...h,
        patientId: id,
      })),
    );
    updatedPatient.medicalHistories = histories.map((h) => h._id);
  }

  // Update insurance details if provided
  if (insuranceDetails && Array.isArray(insuranceDetails)) {
    // Remove old insurances for this patient
    await InsuranceModel.deleteMany({ patientId: id });
    // Add new insurances
    const insurances = await InsuranceModel.insertMany(
      insuranceDetails.map((i) => ({
        ...i,
        patientId: id,
      })),
    );
    updatedPatient.insuranceDetails = insurances.map((i) => i._id);
  }

  await updatedPatient.save();

  // Return populated data
  return await PatientModel.findById(id)
    .populate("medicalHistories")
    .populate("insuranceDetails");
};

export const deletePatient_Service = async (id) => {
  return await PatientModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
    .populate("medicalHistories")
    .populate("insuranceDetails");
};
