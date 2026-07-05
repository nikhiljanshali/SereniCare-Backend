
import mongoose from "mongoose";

const pastMedicalHistoryDocumentSchema = new mongoose.Schema(
    {
        fileName: {
            type: String,
            required: true
        },

        fileType: {
            type: String, // application/pdf, image/png etc.
            required: true
        },

        fileSize: {
            type: Number // bytes
        },

        fileData: {
            type: String, // Base64 data
            required: true
        },

        uploadedAt: {
            type: Date,
            default: Date.now
        }
    },
    { _id: true }
);

const assignedMedicationSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        required: true
    },
    dosage: {
        type: String
    },
    dosageUnit: {
        type: String
    },
    frequency: {
        type: String
    },
    duration: {
        type: String
    },
    durationUnit: {
        type: String
    }
})

const pastMedicalSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        problem: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            required: true,
        },
        diagnosedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: true,
        },
        diagnosedDate: {
            type: Date,
            required: true,
        },
        ongoing: {
            type: Boolean,
            require: true,
        },
        endDate: {
            type: Date,
            default: null,
        },
        pastMedicalCode: {
            type: String,
            required: true,
        },
        medications: [assignedMedicationSchema],
        outcome: {
            type: String,
            required: true,
        },
        historydocuments: [pastMedicalHistoryDocumentSchema],
        remark: {
            type: String,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authusers",
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authusers",
        },
    },
    {
        timestamps: true,
    }
);

export default pastMedicalSchema;