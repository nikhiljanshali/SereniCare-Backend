import expres from "express";
import {
  getRoleByUserIdController,
  getDoctorCountController,
  getPatientCountController,
  getSupplierCountController
} from "../controllers/meshtable.controller.js";

const meshTableRouter = expres.Router();

meshTableRouter.get("/getRoleByUserId/:id", getRoleByUserIdController);
meshTableRouter.get("/getDoctorCount/:id", getDoctorCountController);
meshTableRouter.get("/getPatientCount/:id", getPatientCountController);
meshTableRouter.get("/getSupplierCount/:id", getSupplierCountController);

export default meshTableRouter;
