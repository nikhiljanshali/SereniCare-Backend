import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
    {
        medicineCode: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        medicineName: {
            type: String,
            required: true,
            trim: true
        },

        genericName: {
            type: String,
            required: true
        },

        brandName: {
            type: String,
            default: ""
        },

        category: {
            type: String,
            enum: [
                "Tablet",
                "Capsule",
                "Syrup",
                "Injection",
                "Drops",
                "Cream",
                "Ointment",
                "Powder",
                "Inhaler",
                "Solution"
            ]
        },

        therapeuticClass: {
            type: String
        },

        strength: {
            type: String
        },

        unit: {
            type: String,
            enum: [
                "mg",
                "mcg",
                "g",
                "ml",
                "unit",
                "tablet",
                "capsule",
                "vial",
                "ampoule"
            ]
        },

        manufacturer: {
            type: String
        },

        supplierId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "supplier"
        },

        hsnCode: String,

        gstPercentage: Number,

        purchasePrice: Number,

        sellingPrice: Number,

        reorderLevel: {
            type: Number,
            default: 10
        },

        maxStockLevel: Number,

        storageCondition: {
            type: String
        },

        requiresPrescription: {
            type: Boolean,
            default: true
        },

        isControlledDrug: {
            type: Boolean,
            default: false
        },

        contraindications: [String],

        sideEffects: [String],

        drugInteractions: [String],

        dosageInstructions: String,

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


export default medicineSchema;