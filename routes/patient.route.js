import express from "express";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

const patientRouter = express.Router();

patientRouter.get("/getAllPatients", getAllPatients);
patientRouter.get("/getPatientById/:id", getPatientById);
patientRouter.post("/createPatient", createPatient);
patientRouter.put("/updatePatient/:id", updatePatient);
patientRouter.delete("/deletePatient/:id", deletePatient);

export default patientRouter;
