import mongoose from "mongoose";

const primarySpecialitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
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
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export { doctorSchema };
export default doctorSchema;
