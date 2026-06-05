import {
    addAppointmentBookingService,
    updateAppointmentBookingService,
    deleteAppointmentBookingService,
    getAllAppointmentBookingService,
    getAppointmentsByDoctorIdService,
    getDoctorAvailabilityByDayService,
    getDoctorShiftsByDayService,
    getDoctorSlotsByDayService,
    getAppointmentBookingByAppointmentIdService,
    updateAppointmentStatusService
} from "../services/appointmentBooking.service.js";


export const addAppointmentBooking = async (req, res) => {
    try {
        const result =
            await addAppointmentBookingService(
                req.body
            );

        res.status(201).json({
            success: true,
            message:
                "Appointment booked successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateAppointmentBooking = async (req, res) => {
    try {
        const result =
            await updateAppointmentBookingService(
                req.params.id,
                req.body
            );

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(
            error.message ===
                "Appointment not found"
                ? 404
                : 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateAppointmentStatus = async (req, res) => {
    try {

        console.log('Test', req.params);
        const { appointmentId } = req.params;
        const { appointmentStatus } = req.body;

        const result = await updateAppointmentStatusService(
            appointmentId,
            appointmentStatus
        );

        return res.status(200).json({
            success: true,
            ...result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteAppointmentBooking = async (req, res) => {
    try {
        const result =
            await deleteAppointmentBookingService(
                req.params.id
            );

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(
            error.message ===
                "Appointment not found"
                ? 404
                : 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllAppointmentBooking = async (req, res) => {
    try {
        const result =
            await getAllAppointmentBookingService();

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAppointmentsByDoctorId = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const result = await getAppointmentsByDoctorIdService(doctorId);

        res.status(200).json({
            success: true,
            message:
                "Doctor appointments fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getDoctorAvailabilityByDay = async (req, res) => {
    try {
        const { doctorId, dayOfWeek } =
            req.params;

        const result =
            await getDoctorAvailabilityByDayService(
                doctorId,
                dayOfWeek
            );

        res.status(200).json({
            success: true,
            message:
                "Doctor availability fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(
            error.message ===
                "Doctor availability not found"
                ? 404
                : 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

export const getDoctorShiftsByDay = async (req, res) => {
    try {
        const { doctorId, dayOfWeek } = req.params;
        const result = await getDoctorShiftsByDayService(doctorId, dayOfWeek);
        res.status(200).json({
            success: true,
            message:
                "Doctor shifts fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(
            error.message ===
                "Doctor availability not found"
                ? 404
                : 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

export const getDoctorSlotsByDay = async (req, res) => {
    try {
        const { doctorId, dayOfWeek } = req.params;
        const result = await getDoctorSlotsByDayService(doctorId, dayOfWeek);
        res.status(200).json({
            success: true,
            message:
                "Doctor slots fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(
            error.message ===
                "Doctor availability not found"
                ? 404
                : 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAppointmentsByAppointmentId = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const result = await getAppointmentBookingByAppointmentIdService(appointmentId);
        res.status(200).json({
            success: true,
            message: "Doctor appointments fetched successfully", data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};