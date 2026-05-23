import expres from "express";
import {
  getRoleByUserIdController,
  getDoctorCountController,
  getPatientCountController,
} from "../controllers/meshtable.controller.js";

const meshTableRouter = expres.Router();

meshTableRouter.get("/getRoleByUserId/:id", getRoleByUserIdController);
meshTableRouter.get("/getDoctorCount/:id", getDoctorCountController);
meshTableRouter.get("/getPatientCount/:id", getPatientCountController);

export default meshTableRouter;
