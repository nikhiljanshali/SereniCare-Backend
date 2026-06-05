import {
  signinUser_Service,
  registerUser_Service,
  sendOTP_Service,
  verifyOTP_Service,
  resetPassword_Service,
} from "../services/authentication.service.js";

const signup = async (req, res) => {
  try {
    const result = await registerUser_Service(req.body);
    res.status(201).json({
      message: "User registered successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};

const signin = async (req, res) => {
  try {
    const result = await signinUser_Service(req.body);
    res.json({ message: "Signin successful", status: true, data: result });
  } catch (error) {
    res.status(401).json({ message: error.message, status: false });
  }
};
// Send OTP endpoint
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await sendOTP_Service(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Verify OTP endpoint
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const result = await verifyOTP_Service(email, otp);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await resetPassword_Service(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signup, signin, sendOTP, verifyOTP, resetPassword };
