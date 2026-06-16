import PrescriptionModel from "../models/prescription.model.js";
import PatientModel from "../models/patientuser.model.js";
import DoctorModel from "../models/doctors.model.js";
import ClinicModel from "../models/clinic.model.js";

/* -------------------------------------------------------------------------- */
/*                             Add Prescription                               */
/* -------------------------------------------------------------------------- */
export const addPrescriptionService = async (prescriptionData) => {
    try {
        const count = await PrescriptionModel.countDocuments();
        const prescriptionNumber = `PRESCRIP-${String(count + 1).padStart(4, "0")}`;
        const prescription = await PrescriptionModel.create({
            ...prescriptionData,
            prescriptionNumber
        });
        return {
            status: true,
            message: "Prescription created successfully",
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                           Update Prescription                              */
/* -------------------------------------------------------------------------- */
export const updatePrescriptionService = async (
    prescriptionId,
    updateData
) => {
    try {
        const prescription = await PrescriptionModel.findByIdAndUpdate(
            prescriptionId,
            updateData,
            {
                returnDocument: 'after',
                runValidators: true
            }
        );

        if (!prescription) {
            throw new Error("Prescription not found");
        }

        return {
            message: "Prescription updated successfully",
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                           Delete Prescription                              */
/* -------------------------------------------------------------------------- */
export const deletePrescriptionService = async (prescriptionId) => {
    try {
        const prescription =
            await PrescriptionModel.findByIdAndDelete(
                prescriptionId
            );

        if (!prescription) {
            throw new Error("Prescription not found");
        }

        return {
            message: "Prescription deleted successfully",
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                         Get All Prescriptions                              */
/* -------------------------------------------------------------------------- */
export const getAllPrescriptionsService = async () => {
    try {
        const prescriptions = await PrescriptionModel.find().populate("appointmentId").sort({ prescribedDate: -1 });
        const prescriptionData = await Promise.all(
            prescriptions.map(async (prescription) => {
                const patient = await PatientModel.findById(
                    prescription.patientId
                );
                const doctor = await DoctorModel.findById(
                    prescription.doctorId
                );
                const clinic = await ClinicModel.findById(
                    prescription.clinicId
                )
                return {
                    ...prescription.toObject(),
                    patientDetails: patient,
                    doctorDetails: doctor,
                    clinicDetails: clinic
                };
            })
        );
        return {
            status: true,
            message: "Prescription fetched successfully",
            count: prescriptionData.length,
            data: prescriptionData
        };

    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                      Get Prescription By Id                                */
/* -------------------------------------------------------------------------- */
export const getPrescriptionByIdService = async (
    prescriptionId
) => {
    try {
        const prescription = await PrescriptionModel
            .findById(prescriptionId)
            .populate("appointmentId")
            .populate("patientId")
            .populate("doctorId");

        if (!prescription) {
            throw new Error("Prescription not found");
        }

        return {
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                    Get Prescription By Patient                             */
/* -------------------------------------------------------------------------- */
export const getPrescriptionsByPatientService = async (
    patientId
) => {
    try {
        const prescriptions = await PrescriptionModel
            .find({ patientId })
            .populate("doctorId")
            .populate("appointmentId")
            .sort({ prescribedDate: -1 });

        return {
            count: prescriptions.length,
            data: prescriptions
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                     Get Prescription By Doctor                             */
/* -------------------------------------------------------------------------- */
export const getPrescriptionsByDoctorService = async (
    doctorId
) => {
    try {
        const prescriptions = await PrescriptionModel
            .find({ doctorId })
            .populate("patientId")
            .populate("appointmentId")
            .sort({ prescribedDate: -1 });

        return {
            count: prescriptions.length,
            data: prescriptions
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                  Get Prescription By Appointment                           */
/* -------------------------------------------------------------------------- */
export const getPrescriptionByAppointmentService = async (
    appointmentId
) => {
    try {
        const prescription = await PrescriptionModel
            .findOne({ appointmentId })
            .populate("patientId")
            .populate("doctorId");

        return {
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                          Search Prescription                               */
/* -------------------------------------------------------------------------- */
export const searchPrescriptionService = async (
    searchText
) => {
    try {
        const prescriptions = await PrescriptionModel.find({
            $or: [
                {
                    prescriptionNumber: {
                        $regex: searchText,
                        $options: "i"
                    }
                },
                {
                    diagnosis: {
                        $regex: searchText,
                        $options: "i"
                    }
                }
            ]
        })
            .populate("patientId")
            .populate("doctorId")
            .sort({ prescribedDate: -1 });

        return {
            count: prescriptions.length,
            data: prescriptions
        };
    } catch (error) {
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                       Update Prescription Status                           */
/* -------------------------------------------------------------------------- */
export const updatePrescriptionStatusService = async (
    prescriptionId,
    status
) => {
    try {
        const prescription =
            await PrescriptionModel.findByIdAndUpdate(
                prescriptionId,
                { status },
                { returnDocument: 'after' }
            );

        if (!prescription) {
            throw new Error("Prescription not found");
        }

        return {
            message: "Prescription status updated successfully",
            data: prescription
        };
    } catch (error) {
        throw error;
    }
};
