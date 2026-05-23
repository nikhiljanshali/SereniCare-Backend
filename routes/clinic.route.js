import express from "express";
import {
  getAllClinics,
  getClinicById,
  createClinic,
  updateClinic,
  deleteClinic,
} from "../controllers/clinic.controller.js";

const clinicRouter = express.Router();

clinicRouter.get("/getAllClinics", getAllClinics);
clinicRouter.get("/getClinicById/:id", getClinicById);
clinicRouter.post("/createClinic", createClinic);
clinicRouter.put("/updateClinic/:id", updateClinic);
clinicRouter.delete("/deleteClinic/:id", deleteClinic);

export default clinicRouter;
