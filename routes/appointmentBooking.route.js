import express from "express";
import {
    addAppointmentBooking,
    updateAppointmentBooking,
    deleteAppointmentBooking,
    getAllAppointmentBooking,
    getDoctorAvailabilityByDay,
    getDoctorShiftsByDay,
    getDoctorSlotsByDay,
    getAppointmentsByAppointmentId,
    updateAppointmentStatus,
    getAppointmentBookingByPatientId,
    getAppointmentBookingByDoctorId,
    getAppointmentsByDoctorIdPatientId
} from "../controllers/appointmentBooking.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const appointmentBookingRouter = express.Router();

appointmentBookingRouter.post("/addAppointmentBooking", authMiddleware, addAppointmentBooking);
appointmentBookingRouter.put("/updateAppointmentBooking/:id", authMiddleware, updateAppointmentBooking);
appointmentBookingRouter.delete("/deleteAppointmentBooking/:id", authMiddleware, deleteAppointmentBooking);
appointmentBookingRouter.get("/getAllAppointmentBooking", authMiddleware, getAllAppointmentBooking);
appointmentBookingRouter.get("/getDoctorAvailabilityByDay/:doctorId/:dayOfWeek", authMiddleware, getDoctorAvailabilityByDay);
appointmentBookingRouter.get("/getDoctorShiftsByDay/:doctorId/:dayOfWeek", authMiddleware, getDoctorShiftsByDay);
appointmentBookingRouter.get("/getDoctorSlotsByDay/:doctorId/:dayOfWeek", authMiddleware, getDoctorSlotsByDay);
appointmentBookingRouter.get("/getAppointmentsByAppointmentId/:appointmentId", authMiddleware, getAppointmentsByAppointmentId);
appointmentBookingRouter.put("/updateAppointmentStatus/:appointmentId", authMiddleware, updateAppointmentStatus);
appointmentBookingRouter.get("/getAppointmentBookingById/:doctorId/:patientId", authMiddleware, getAppointmentsByDoctorIdPatientId);
appointmentBookingRouter.get("/getAppointmentBookingByPatientId/:patientId", authMiddleware, getAppointmentBookingByPatientId);
appointmentBookingRouter.get("/getAppointmentBookingByDoctorId/:doctorId", authMiddleware, getAppointmentBookingByDoctorId);

export default appointmentBookingRouter;