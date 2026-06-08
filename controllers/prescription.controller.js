import * as prescriptionService from "../services/prescription.service.js";

export const addPrescription = async (req, res) => {
    try {
        const result =
            await prescriptionService.addPrescriptionService(req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePrescription = async (req, res) => {
    try {
        const result =
            await prescriptionService.updatePrescriptionService(
                req.params.id,
                req.body
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePrescription = async (req, res) => {
    try {
        const result =
            await prescriptionService.deletePrescriptionService(
                req.params.id
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllPrescriptions = async (req, res) => {
    try {
        const result = await prescriptionService.getAllPrescriptionsService();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrescriptionById = async (req, res) => {
    try {
        const result =
            await prescriptionService.getPrescriptionByIdService(
                req.params.id
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrescriptionsByPatient = async (req, res) => {
    try {
        const result =
            await prescriptionService.getPrescriptionsByPatientService(
                req.params.patientId
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrescriptionsByDoctor = async (req, res) => {
    try {
        const result =
            await prescriptionService.getPrescriptionsByDoctorService(
                req.params.doctorId
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrescriptionByAppointment = async (
    req,
    res
) => {
    try {
        const result =
            await prescriptionService.getPrescriptionByAppointmentService(
                req.params.appointmentId
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const searchPrescription = async (req, res) => {
    try {
        const result =
            await prescriptionService.searchPrescriptionService(
                req.query.search
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePrescriptionStatus = async (
    req,
    res
) => {
    try {
        const result =
            await prescriptionService.updatePrescriptionStatusService(
                req.params.id,
                req.body.status
            );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};