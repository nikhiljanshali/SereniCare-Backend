import mongoose from "mongoose";

const primarySpecialitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  description: { type: String },
});

// ✅ UPDATED ADMIN SCHEMA (NO PASSWORD)
const adminSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authusers",
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  adminEmail: { type: String }, // optional (comes from AuthUser)
  mobile: { type: String, required: true },
});

const clinicSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctors",
      required: true,
    },
    clinicName: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    clinicType: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    phone: { type: Number, required: true },
    clinicEmail: { type: String, required: true },
    specializations: [primarySpecialitySchema],
    admin: adminSchema,
  },
  {
    timestamps: true,
  },
);

export default clinicSchema;
