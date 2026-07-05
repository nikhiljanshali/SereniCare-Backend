
import mongoose from "mongoose";

const generalSurveySchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        distress: {
            type: String,
            required: true,
        },

        consciousness: {
            type: String,
            required: true,
        },

        orientation: {
            type: String,
            required: true,
        },

        nutritionalStatus: {
            type: String,
            required: true,
        },

        hydrationStatus: {
            type: String,
            required: true,
        },

        mobility: {
            type: String,
            required: true,
        },

        gait: {
            type: String,
            required: true,
        },

        painLevel: {
            score: {
                type: Number,
                required: true,
                min: 0,
                max: 10
            },
            location: {
                type: String,
                required: true,
                trim: true
            },
            character: {
                type: String,
                required: true,
                trim: true
                // Optional: If you want to restrict this to a dropdown list later:
                // enum: ['Sharp', 'Dull', 'Throbbing', 'Burning', 'Aching', 'Cramping', 'Shooting']
            }
        },

        distressLevel: {
            type: String,
            required: true,
        },

        hygiene: {
            type: String,
            required: true,
        },

        speech: {
            type: String,
            required: true,
        },

        moodBehavior: {
            type: String,
            required: true,
        },

        perfusion: {
            type: String,
            required: true,
        },

        notes: {
            type: String,
            required: true,
        },

        generalAppearance: {
            NORMAL: { type: Boolean, default: false },
            ILL_LOOKING: { type: Boolean, default: false },
            TOXIC_LOOKING: { type: Boolean, default: false },
            DISTRESSED: { type: Boolean, default: false },
            UNCONSCIOUS: { type: Boolean, default: false },
            ALERT: { type: Boolean, default: false },
            ALERT_ORIENTED: { type: Boolean, default: false },
            DROWSY: { type: Boolean, default: false },
            LETHARGIC: { type: Boolean, default: false },
            RESTLESS: { type: Boolean, default: false },
            AGITATED: { type: Boolean, default: false },
            CONFUSED: { type: Boolean, default: false },
            DEHYDRATED: { type: Boolean, default: false },
            WELL_HYDRATED: { type: Boolean, default: false },
            PALE: { type: Boolean, default: false },
            CYANOSED: { type: Boolean, default: false },
            JAUNDICED: { type: Boolean, default: false },
            CACHECTIC: { type: Boolean, default: false },
            OBESE: { type: Boolean, default: false },
            UNDERWEIGHT: { type: Boolean, default: false },
            WELL_NOURISHED: { type: Boolean, default: false },
            MALNOURISHED: { type: Boolean, default: false },
            FEBRILE: { type: Boolean, default: false },
            DIAPHORETIC: { type: Boolean, default: false },
            COMFORTABLE: { type: Boolean, default: false },
            IN_PAIN: { type: Boolean, default: false },
        },
    },
    {
        timestamps: true,
    }
);

const cardiovascularSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },
        heartSoundAuscultation: {
            type: String,
            required: true,
        },
        hsaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        peripheralPulsesPerfusion: {
            type: String,
            required: true,
        },
        pppNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        extremitiesDependentEdemaTracking: {
            type: String,
            required: true,
        },
        edetNormalAbnormal: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const respiratorySchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },
        effertsNChestExpansion: {
            type: String,
            required: true,
        },
        eceNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        lungAuscultation: {
            type: String,
            required: true,
        },
        laNormalAbnormal: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const neurologicalSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },
        cranialNerves: {
            type: String,
            required: true,
        },
        cnNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        mentalStatusOrientation: {
            type: String,
            required: true,
        },
        msoNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        sensoryExam: {
            type: String,
            required: true,
        },
        seNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        coordinationCerebellarFunction: {
            type: String,
            required: true,
        },
        ccfNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        motorStrengthMatrix: {
            type: String,
            required: true,
        },
        msmfNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        deepTendonReflexes: {
            type: String,
            required: true,
        },
        dtrNormalAbnormal: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default familyHistoryLineageSchema;