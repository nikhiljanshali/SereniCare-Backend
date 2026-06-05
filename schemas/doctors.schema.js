import mongoose from "mongoose";

const primarySpecialitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
});

const qualificaionSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const areaofExpertiseSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const doctorSchema = new mongoose.Schema(
  {
    authUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authusers",
      required: true,
      unique: true,
    },
    doctorCode: { type: String, unique: true, index: true }, // e.g. DOC-0001
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dateOfBirth: Date,
    dateOfJoin: Date,
    age: Number,
    phone: String,
    email: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    aadhaarNumber: { type: String, unique: true, sparse: true },
    licenseNumber: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ["active", "inactive", "deceased"],
      default: "inactive",
    },
    specializations: [primarySpecialitySchema],
    officeStatus: {
      type: String,
      enum: ["On Duty", "Off Duty", "On Leave"],
      default: "On Duty",
    },
    qualifications: [qualificaionSchema],
    experience: {
      type: Number,
      default: 0
    },
    officeNumber: {
      type: Number,
      default: 0
    },
    residentDoctor: { type: Boolean, default: false },
    areaOfExpertise: [areaofExpertiseSchema],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export { doctorSchema };
export default doctorSchema;
