import mongoose from "mongoose";

const medicalHistorySchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patients",
      required: true,
    },

    bloodGroup: String,
    condition: String,
    allergies: [String],
    medications: [String],
    surgeries: [String],

    familyHistory: String,
    lifestyle: {
      smoking: {
        status: Boolean,
        frequency: String, // e.g. "Occasional", "Daily"
        durationYears: Number,
      },
      alcohol: {
        status: Boolean,
        frequency: String, // e.g. "Weekly", "Monthly"
      },
      activityLevel: String, // Sedentary / Moderate / Active

      dietType: String, // Veg / Non-Veg / Vegan / Jain / Mixed
      exerciseFrequency: String, // Daily / Weekly / Rare

      sleepHours: Number,
      stressLevel: String, // Low / Medium / High

      caffeineIntake: String, // None / Low / Moderate / High

      waterIntake: Number, // Liters per day

      occupationType: String, // Desk / Field / Mixed

      hobbies: [String],

      substanceUse: {
        tobacco: Boolean,
        drugs: Boolean,
      },
    },

    notes: String,
  },
  { timestamps: true },
);

const insuranceSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patients",
      required: true,
    },

    providerName: String,
    policyNumber: String,
    policyHolderName: String,
    relationToHolder: String, // Self / Spouse / Parent / Child / Other
    coverageAmount: Number,
    coverageDetails: String,

    validFrom: Date,
    validTo: Date,

    status: {
      type: String,
      enum: ["active", "expired"],
      default: "active",
    },
  },
  { timestamps: true },
);

const patientSchema = new mongoose.Schema(
  {
    authUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authusers",
      required: true,
      unique: true,
    },
    // 🔹 Basic Info
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String },

    dateOfBirth: { type: Date },
    gender: { type: String, required: true },
    age: { type: Number },

    // 🔹 Contact Info
    phone: { type: String, required: true },
    email: { type: String },

    address: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pincode: { type: String },

    // 🔹 Identification (future use: govt / hospital)
    patientCode: { type: String, unique: true, sparse: true }, // e.g. PAT-0001
    aadhaarNumber: { type: String }, // optional (India context)

    // 🔹 Emergency Contact
    emergencyContact: {
      name: String,
      relation: String,
      phone: String,
    },

    // 🔹 Status Tracking
    status: {
      type: String,
      enum: ["active", "inactive", "deceased"],
      default: "active",
    },

    // 🔹 Doctor Mapping (primary doctor)
    primaryDoctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authusers",
      required: true,
    },

    // 🔹 Clinic Mapping
    // clinicId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "clinics",
    //   required: true,
    // },

    // 🔹 References (separate collections)
    medicalHistories: [
      { type: mongoose.Schema.Types.ObjectId, ref: "medicalhistories" },
    ],

    insuranceDetails: [
      { type: mongoose.Schema.Types.ObjectId, ref: "insurances" },
    ],
    // 🔹 Audit Fields (VERY IMPORTANT)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authusers",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authusers",
    },
    isDeleted: { type: Boolean, default: false },
  },

  { timestamps: true },
);

export { medicalHistorySchema, insuranceSchema };
export default patientSchema;
