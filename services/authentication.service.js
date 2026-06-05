import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import AuthUserModel from "../models/authuser.model.js";
import ClinicModel from "../models/clinic.model.js";
import DoctorModel from "../models/doctors.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "ShreeHari#486248";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

// In-memory OTP storage (use Redis or Database for production)
const otpStore = new Map();

const registerUser_Service = async ({
  firstName,
  lastName,
  workEmail,
  phone,
  password,
  role,
}) => {
  if (!firstName || !lastName || !workEmail || !phone || !password || !role) {
    throw new Error(
      "FirstName, LastName, WorkEmail, Phone, and Password are required.",
    );
  }

  const existingUser = await AuthUserModel.findOne({ workEmail });
  if (existingUser) {
    throw new Error("User already exists with this workEmail.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new AuthUserModel({
    firstName,
    lastName,
    workEmail,
    phone,
    password: hashedPassword,
    role,
  });
  const savedUser = await user.save();
  return {
    id: savedUser._id,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
    workEmail: savedUser.workEmail,
    phone: savedUser.phone,
    role: savedUser.role,
  };
};

const signinUser_Service = async ({ workEmail, password }) => {
  if (!workEmail || !password) {
    throw new Error("Email and password are required.");
  }

  const user = await AuthUserModel.findOne({ workEmail });
  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid email or password.");
  }
  // 🔍 ✅ Fetch clinic linked to this user
  // const clinic = await ClinicModel.findOne({
  //   "admin.userId": user._id,
  // });
  let userDetails = {};

  if (user.role === "Doctor") {
    const doctor = await DoctorModel.findOne({
      authUserId: user._id,
    });

    userDetails = {
      id: doctor._id,
    };
  }

  const token = jwt.sign(
    {
      id: user._id,

      workEmail: user.workEmail,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN },
  );

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      workEmail: user.workEmail,
      phone: user.phone,
      role: user.role,
    },
    userDetails
  };
};

// 📧 Generate and send OTP to email
const sendOTP_Service = async (email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  // Validate email credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error(
      "Email credentials are not configured. Please set EMAIL_USER and EMAIL_PASSWORD in environment variables.",
    );
  }
  const myEmail = "nikhil.janshali@gmail.com";
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with expiration time (5 minutes)
  const expirationTime = Date.now() + 5 * 60 * 1000;
  otpStore.set(myEmail, {
    otp,
    expiresAt: expirationTime,
    attempts: 0,
  });

  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates (development)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: myEmail,
      subject: "Your SereniCare OTP Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>SereniCare OTP Verification</h2>
          <p>Your 6-digit OTP verification code is:</p>
          <h1 style="color: #007bff; letter-spacing: 5px;">${otp}</h1>
          <p>This code will expire in <strong>5 minutes</strong>.</p>
          <p style="color: #888; font-size: 12px;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "OTP sent successfully to your email.",
      myEmail,
    };
  } catch (error) {
    throw new Error(`Failed to send OTP: ${error.message}`);
  }
};

// ✅ Verify OTP
const verifyOTP_Service = async (email, otp) => {
  if (!email || !otp) {
    throw new Error("Email and OTP are required.");
  }

  const myEmail = "nikhil.janshali@gmail.com";

  const storedData = otpStore.get(myEmail);

  if (!storedData) {
    throw new Error("OTP not found or expired. Please request a new OTP.");
  }

  // Check if OTP has expired
  if (Date.now() > storedData.expiresAt) {
    otpStore.delete(myEmail);
    throw new Error("OTP has expired. Please request a new OTP.");
  }

  // Check OTP attempts (max 3 attempts)
  if (storedData.attempts >= 3) {
    otpStore.delete(myEmail);
    throw new Error(
      "Maximum OTP verification attempts exceeded. Request a new OTP.",
    );
  }

  // Verify OTP
  if (storedData.otp !== otp.toString()) {
    storedData.attempts += 1;
    throw new Error(
      `Invalid OTP. Attempts remaining: ${3 - storedData.attempts}`,
    );
  }

  // OTP verified successfully - remove it
  otpStore.delete(email);

  return {
    success: true,
    message: "OTP verified successfully.",
    email,
  };
};

const resetPassword_Service = async (workEmail, password) => {
  if (!workEmail || !password) {
    return {
      success: false,
      message: "WorkEmail and Password are required.",
    };
  }
  // Find existing user
  const existingUser = await AuthUserModel.findOne({ workEmail });
  if (!existingUser) {
    return {
      success: false,
      message: "User not found.",
    };
  }
  // Hash new password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Update password
  existingUser.password = hashedPassword;
  await existingUser.save();
  return {
    success: true,
    message: "Password reset successfully.",
    data: {
      id: existingUser._id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      workEmail: existingUser.workEmail,
      phone: existingUser.phone,
      role: existingUser.role,
    },
  };
};

export {
  registerUser_Service,
  signinUser_Service,
  sendOTP_Service,
  verifyOTP_Service,
  resetPassword_Service,
};
