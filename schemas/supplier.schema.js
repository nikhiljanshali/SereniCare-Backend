import mongoose from "mongoose";

const supplierContactSchema = new mongoose.Schema(
    {
        contactPersonName: {
            type: String,
            required: true
        },

        designation: String,

        mobileNumber: {
            type: String,
            required: true
        },

        alternateMobileNumber: String,

        email: String,

        isPrimary: {
            type: Boolean,
            default: false
        }
    },
    { _id: false }
);

const supplierBankSchema = new mongoose.Schema(
    {
        bankName: String,

        accountHolderName: String,

        accountNumber: String,

        ifscCode: String,

        branchName: String,

        swiftCode: String
    },
    { _id: false }
);

const supplierAddressSchema = new mongoose.Schema(
    {
        addressLine1: String,

        addressLine2: String,

        city: String,

        state: String,

        country: {
            type: String,
            default: "India"
        },

        postalCode: String
    },
    { _id: false }
);

const supplierSchema = new mongoose.Schema(
    {
        authUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authusers",
            required: true,
            unique: true,
        },

        supplierCode: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        supplierType: {
            type: String,
            enum: [
                "Medicine",
                "Medical Equipment",
                "Laboratory",
                "Consumables",
                "General"
            ],
            required: true
        },

        registrationNumber: String,

        gstNumber: String,

        panNumber: String,

        drugLicenseNumber: String,

        website: String,

        email: {
            type: String,
            lowercase: true
        },

        phoneNumber: String,

        alternatePhoneNumber: String,

        contacts: [supplierContactSchema],

        billingAddress: supplierAddressSchema,

        shippingAddress: supplierAddressSchema,

        bankDetails: supplierBankSchema,

        paymentTerms: {
            type: String,
            default: "30 Days"
        },

        creditLimit: {
            type: Number,
            default: 0
        },

        openingBalance: {
            type: Number,
            default: 0
        },

        outstandingBalance: {
            type: Number,
            default: 0
        },

        suppliedCategories: [{
            type: String
        }],

        suppliedBrands: [{
            type: String
        }],

        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 5
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Inactive"
            ],
            default: "Pending"
        },

        remarks: String,

        documents: [
            {
                fileName: String,
                fileUrl: String,
                uploadedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ],

        // createdBy: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User"
        // },
        // approvedBy: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User"
        // },
        // approvedAt: Date,

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

export default supplierSchema;