import express from "express";
import {
    getAllDoctors,
    getAllDoctorsLimited,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor
} from "../controllers/doctors.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const doctorsRouter = express.Router();


doctorsRouter.get("/getAllDoctors", getAllDoctors);
doctorsRouter.get("/getAllDoctorsLimited", getAllDoctorsLimited);
doctorsRouter.get("/getDoctorById/:id", getDoctorById);
doctorsRouter.post("/createDoctor", authMiddleware, createDoctor);
doctorsRouter.put("/updateDoctor/:id", authMiddleware, updateDoctor);
doctorsRouter.delete("/deleteDoctor/:id", authMiddleware, deleteDoctor);

export default doctorsRouter;