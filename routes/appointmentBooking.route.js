import express from "express";
import {
    addAppointmentBooking,
    updateAppointmentBooking,
    deleteAppointmentBooking,
    getAllAppointmentBooking,
    getAppointmentsByDoctorId,
    getDoctorAvailabilityByDay,
    getDoctorShiftsByDay,
    getDoctorSlotsByDay,
    getAppointmentsByAppointmentId,
    updateAppointmentStatus
} from "../controllers/appointmentBooking.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const appointmentBookingRouter = express.Router();

appointmentBookingRouter.post("/addAppointmentBooking", addAppointmentBooking);
appointmentBookingRouter.put("/updateAppointmentBooking/:id", updateAppointmentBooking);
appointmentBookingRouter.delete("/deleteAppointmentBooking/:id", deleteAppointmentBooking);
appointmentBookingRouter.get("/getAllAppointmentBooking", getAllAppointmentBooking);
appointmentBookingRouter.get("/getAppointmentBookingById/:doctorId", getAppointmentsByDoctorId);
appointmentBookingRouter.get("/getDoctorAvailabilityByDay/:doctorId/:dayOfWeek", getDoctorAvailabilityByDay);
appointmentBookingRouter.get("/getDoctorShiftsByDay/:doctorId/:dayOfWeek", getDoctorShiftsByDay);
appointmentBookingRouter.get("/getDoctorSlotsByDay/:doctorId/:dayOfWeek", getDoctorSlotsByDay);
appointmentBookingRouter.get("/getAppointmentsByAppointmentId/:appointmentId", getAppointmentsByAppointmentId);
appointmentBookingRouter.put("/updateAppointmentStatus/:appointmentId", updateAppointmentStatus);

export default appointmentBookingRouter;