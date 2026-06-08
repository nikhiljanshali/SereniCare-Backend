import express from "express";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  getPatientsByDoctorId
} from "../controllers/patient.controller.js";

const patientRouter = express.Router();

patientRouter.get("/getAllPatients", getAllPatients);
patientRouter.get("/getPatientById/:id", getPatientById);
patientRouter.post("/createPatient", createPatient);
patientRouter.put("/updatePatient/:id", updatePatient);
patientRouter.delete("/deletePatient/:id", deletePatient);
patientRouter.get("/getPatientsByDoctorId/:id", getPatientsByDoctorId);

export default patientRouter;
