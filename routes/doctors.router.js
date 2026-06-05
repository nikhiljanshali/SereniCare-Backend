import express from "express";
import {
    getAllDoctors,
    getAllDoctorsLimited,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor,

    addDoctorLeave,
    updateDoctorLeave,
    deleteDoctorLeave,
    getAllDoctorLeaves,
    getDoctorLeavesByDoctorId,
    getDoctorLeaveById,

    addDoctorEducation,
    updateDoctorEducation,
    deleteDoctorEducation,
    getAllDoctorEducation,
    getDoctorEducationById,
    getDoctorEducationByDoctorId,

    addDoctorWorkExperience,
    updateDoctorWorkExperience,
    deleteDoctorWorkExperience,
    getAllDoctorWorkExperience,
    getDoctorWorkExperienceById,
    getDoctorWorkExperienceByDoctorId,

    addDoctorCertification,
    updateDoctorCertification,
    deleteDoctorCertification,
    getAllDoctorCertification,
    getDoctorCertificationById,
    getDoctorCertificationByDoctorId,

    addDoctorPublication,
    updateDoctorPublication,
    deleteDoctorPublication,
    getAllDoctorPublication,
    getDoctorPublicationById,
    getDoctorPublicationByDoctorId,

    addDoctorSlotConfiguration,
    updateDoctorSlotConfiguration,
    deleteDoctorSlotConfiguration,
    getDoctorSlotConfigurationByDoctorId,

    addDoctorAvailability,
    updateDoctorAvailability,
    deleteDoctorAvailability,
    getAllDoctorAvailability,
    getDoctorAvailabilityById,
    getDoctorAvailabilityByDoctorId,
    getDoctorAvailabilityByDay,
    toggleDoctorAvailabilityStatus

} from "../controllers/doctors.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const doctorsRouter = express.Router();
/* -------------------------------------------------------------------------- */
/*                      Doctor Registration Routes                                */
/* -------------------------------------------------------------------------- */
doctorsRouter.get("/getAllDoctors", authMiddleware, getAllDoctors);
doctorsRouter.get("/getAllDoctorsLimited", authMiddleware, getAllDoctorsLimited);
doctorsRouter.get("/getDoctorById/:id", getDoctorById);
doctorsRouter.post("/createDoctor", authMiddleware, createDoctor);
doctorsRouter.put("/updateDoctor/:id", authMiddleware, updateDoctor);
doctorsRouter.delete("/deleteDoctor/:id", authMiddleware, deleteDoctor);
/* -------------------------------------------------------------------------- */
/*                      Doctor Leave Routes                                */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addLeave", authMiddleware, addDoctorLeave);
doctorsRouter.put("/updateLeave/:id", authMiddleware, updateDoctorLeave);
doctorsRouter.delete("/deleteLeave/:id", authMiddleware, deleteDoctorLeave);
doctorsRouter.get("/getAllLeaves", authMiddleware, getAllDoctorLeaves);
doctorsRouter.get("/getLeavesByDoctor/:doctorId", authMiddleware, getDoctorLeavesByDoctorId);
doctorsRouter.get("/getLeaveById/:id", authMiddleware, getDoctorLeaveById);
/* -------------------------------------------------------------------------- */
/*                      Doctor Education Routes                                */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addEducation", authMiddleware, addDoctorEducation);
doctorsRouter.put("/updateEducation/:id", authMiddleware, updateDoctorEducation);
doctorsRouter.delete("/deleteEducation/:id", authMiddleware, deleteDoctorEducation);
doctorsRouter.get("/getAllEducation", authMiddleware, getAllDoctorEducation);
doctorsRouter.get("/getEducationById/:id", authMiddleware, getDoctorEducationById);
doctorsRouter.get("/getEducationByDoctor/:doctorId", authMiddleware, getDoctorEducationByDoctorId);
/* -------------------------------------------------------------------------- */
/*                    Doctor Work Experience Routes                            */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addWorkExperience", authMiddleware, addDoctorWorkExperience);
doctorsRouter.put("/updateWorkExperience/:id", authMiddleware, updateDoctorWorkExperience);
doctorsRouter.delete("/deleteWorkExperience/:id", authMiddleware, deleteDoctorWorkExperience);
doctorsRouter.get("/getAllWorkExperience", authMiddleware, getAllDoctorWorkExperience);
doctorsRouter.get("/getWorkExperienceById/:id", authMiddleware, getDoctorWorkExperienceById);
doctorsRouter.get("/getWorkExperienceByDoctor/:doctorId", authMiddleware, getDoctorWorkExperienceByDoctorId);
/* -------------------------------------------------------------------------- */
/*                      Doctor Certificaion Routes                            */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addDoctorCertification", addDoctorCertification);
doctorsRouter.put("/updateDoctorCertification/:id", updateDoctorCertification);
doctorsRouter.delete("/deleteDoctorCertification/:id", deleteDoctorCertification);
doctorsRouter.get("/getAllDoctorCertification", getAllDoctorCertification);
doctorsRouter.get("/getDoctorCertificationById/:id", getDoctorCertificationById);
doctorsRouter.get("/getDoctorCertificationByDoctor/:doctorId", getDoctorCertificationByDoctorId);
/* -------------------------------------------------------------------------- */
/*                      Doctor Publicaion Routes                              */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addPublication", addDoctorPublication);
doctorsRouter.put("/updatePublication/:id", updateDoctorPublication);
doctorsRouter.delete("/deletePublication/:id", deleteDoctorPublication);
doctorsRouter.get("/getAllPublication", getAllDoctorPublication);
doctorsRouter.get("/getPublicationById/:id", getDoctorPublicationById);
doctorsRouter.get("/getPublicationByDoctor/:doctorId", getDoctorPublicationByDoctorId);
/* -------------------------------------------------------------------------- */
/*                      Doctor Slots Configuration Routes                     */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addDoctorSlotConfiguration", addDoctorSlotConfiguration);
doctorsRouter.put("/updateDoctorSlotConfiguration/:id", updateDoctorSlotConfiguration);
doctorsRouter.delete("/deleteDoctorSlotConfiguration/:id", deleteDoctorSlotConfiguration);
doctorsRouter.get("/getDoctorSlotConfigurationByDoctor/:doctorId", getDoctorSlotConfigurationByDoctorId);
/* -------------------------------------------------------------------------- */
/*                      Doctor Availability Routes                     */
/* -------------------------------------------------------------------------- */
doctorsRouter.post("/addDoctorAvailability", addDoctorAvailability);
doctorsRouter.put("/updateDoctorAvailability/:id", updateDoctorAvailability);
doctorsRouter.delete("/deleteDoctorAvailability/:id", deleteDoctorAvailability);
doctorsRouter.get("/getAllDoctorAvailability", getAllDoctorAvailability);
doctorsRouter.get("/getDoctorAvailabilityById/:id", getDoctorAvailabilityById);
doctorsRouter.get("/getDoctorAvailabilityByDoctor/:doctorId", getDoctorAvailabilityByDoctorId);
doctorsRouter.get("/getDoctorAvailabilityByDay/:doctorId/:dayOfWeek", getDoctorAvailabilityByDay);
doctorsRouter.patch("/toggleDoctorAvailabilityStatus/:id", toggleDoctorAvailabilityStatus);


export default doctorsRouter;