
import mongoose from "mongoose";
import AppointmentBookingModel from "../models/appointmentBooking.model.js";
import DoctorAvailabilityModel from "../models/doctorAvailability.model.js";
import DoctorSlotConfigurationModel from "../models/doctorSlotConfiguration.model.js";

export const addAppointmentBookingService = async (appointmentData) => {
    try {
        // Check for conflicting appointment
        const existingAppointment = await AppointmentBookingModel.findOne({
            doctorId: appointmentData.doctorId,
            appointmentDate: appointmentData.appointmentDate,
            appointmentStatus: {
                $nin: ["Cancelled", "No-Show"]
            },
            $or: [
                {
                    startTime: { $lt: appointmentData.endTime },
                    endTime: { $gt: appointmentData.startTime }
                }
            ]
        });

        if (existingAppointment) {
            throw new Error(
                `This time slot (${appointmentData.startTime} - ${appointmentData.endTime}) is already booked. Please select another slot.`
            );
        }

        // Generate Appointment Number
        const count = await AppointmentBookingModel.countDocuments();
        const appointmentNumber = `APT-${String(count + 1).padStart(4, "0")}`;

        const newAppointmentData = new AppointmentBookingModel({
            ...appointmentData,
            appointmentNumber,
        });

        const appointment = await AppointmentBookingModel.create(newAppointmentData);

        return {
            message: "Appointment booked successfully",
            data: appointment,
        };
    } catch (error) {
        throw error;
    }
    // try {
    //     // 2. Create Doctor
    //     const count = await AppointmentBookingModel.countDocuments();
    //     const appointmentNumber = `APT-${String(count + 1).padStart(4, "0")}`;
    //     const newappointmentData = new AppointmentBookingModel({
    //         ...appointmentData,
    //         appointmentNumber,
    //     });
    //     const appointment = await AppointmentBookingModel.create(newappointmentData);

    //     return {
    //         message: "Appointment booked successfully",
    //         data: appointment,
    //     };
    // } catch (error) {
    //     throw error;
    // }
};

export const updateAppointmentBookingService = async (appointmentId, updateData) => {
    try {
        const appointment = await AppointmentBookingModel.findByIdAndUpdate(appointmentId, updateData, { returnDocument: 'after', runValidators: true, });
        if (!appointment) {
            throw new Error("Appointment not found");
        }
        return {
            message: "Appointment updated successfully",
            data: appointment,
        };
    } catch (error) {
        throw error;
    }
};

export const updateAppointmentStatusService = async (appointmentId, appointmentStatus) => {
    try {
        const appointment = await AppointmentBookingModel.findByIdAndUpdate(appointmentId, { appointmentStatus },
            {
                returnDocument: 'after',
                runValidators: true
            });
        if (!appointment) {
            throw new Error("Appointment not found");
        }
        return {
            message: "Appointment status updated successfully",
            data: appointment
        };
    } catch (error) {
        throw error;
    }
};

export const deleteAppointmentBookingService = async (appointmentId) => {
    try {
        const appointment = await AppointmentBookingModel.findByIdAndDelete(appointmentId);
        if (!appointment) {
            throw new Error("Appointment not found");
        }

        return {
            message: "Appointment deleted successfully",
        };
    } catch (error) {
        throw error;
    }
};

export const getAllAppointmentBookingService = async () => {
    try {
        return await AppointmentBookingModel.find()
            .populate("doctorId")
            .populate("patientId")
            .sort({
                appointmentDate: -1,
            });
    } catch (error) {
        throw error;
    }
};

export const getAppointmentBookingByAppointmentIdService = async (appointmentId) => {
    try {
        return await AppointmentBookingModel.findById(appointmentId)
            .populate("doctorId")
            .populate("patientId")
            .populate("clinicId")
            .sort({ appointmentDate: -1 });
    } catch (error) {
        throw error;
    }
};

export const getAppointmentsByDoctorIdService = async (doctorId) => {
    try {
        const appointments = await AppointmentBookingModel.find({ doctorId, })
            .populate("patientId")
            .populate("doctorId")
            .populate("clinicId")
            .sort({
                appointmentDate: -1,
                slotStartTime: 1,
            });

        return appointments;
    } catch (error) {
        throw error;
    }
};

export const getDoctorAvailabilityByDayService = async (doctorId, dayOfWeek) => {
    try {
        const availability = await DoctorAvailabilityModel.findOne({ doctorId, dayOfWeek, isAvailable: true, });
        if (!availability) {
            throw new Error("Doctor availability not found");
        }
        return availability;
    } catch (error) {
        throw error;
    }
};

export const getDoctorShiftsByDayService = async (doctorId, dayOfWeek) => {
    try {
        const availability = await DoctorAvailabilityModel.findOne({ doctorId, dayOfWeek, isAvailable: true, }).select("shifts dayOfWeek appointmentTypes");
        if (!availability) {
            throw new Error("Doctor availability not found");
        }
        return availability;
    } catch (error) {
        throw error;
    }
};

export const getDoctorSlotsByDayService = async (doctorId, dayOfWeek, slotDuration = 30) => {
    try {
        const availability = await DoctorAvailabilityModel.findOne({ doctorId, dayOfWeek, isAvailable: true, }).select("shifts dayOfWeek appointmentTypes");
        const slotConfig = await DoctorSlotConfigurationModel.findOne({ doctorId, });
        const slotDurationToUse = slotConfig ? slotConfig.defaultSlotDuration : slotDuration;
        if (!availability) {
            throw new Error("Doctor availability not found");
        }

        // Remove break shifts
        const workingShifts = availability.shifts.filter(
            shift => !shift.isBreakTime
        );
        // add break shifts
        const breakShifts = availability.shifts.filter(
            shift => shift.isBreakTime
        );
        const slots = [];
        workingShifts.forEach((shift) => {
            const start = new Date(`2000-01-01T${shift.startTime}:00`);
            const end = new Date(`2000-01-01T${shift.endTime}:00`);
            let current = new Date(start);
            while (current < end) {
                const slotEnd = new Date(
                    current.getTime() + slotDurationToUse * 60000
                );
                if (slotEnd <= end) {
                    slots.push({
                        startTime: current.toTimeString().slice(0, 5),
                        endTime: slotEnd.toTimeString().slice(0, 5),
                    });
                }
                current = slotEnd;
            }
        });
        return {
            dayOfWeek: availability.dayOfWeek,
            appointmentTypes: availability.appointmentTypes,
            shifts: workingShifts, // Break shifts removed
            breakShifts: breakShifts, // Break shifts added separately
            slots,
        };
    } catch (error) {
        throw error;
    }
};
