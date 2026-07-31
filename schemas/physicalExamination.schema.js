
import mongoose from "mongoose";

const generalSurveySchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        constitutionalState: {
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
        heartSounds: {
            type: [String],
            required: false,
            default: []
        },
        heartRhythm: {
            type: [String],
            required: false,
            default: []
        },
        heartMurmurs: {
            type: [String],
            required: false,
            default: []
        },
        heartRate: {
            type: Number,
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
        perfusionSide: {
            type: String,
            required: true,
        },
        pppNormalValue: {
            type: [String],
            required: false,
            default: []
        },
        pppAbNormalValue: {
            type: [String],
            required: false,
            default: []
        },
        perfusionfindingNotes: {
            type: String,
            required: true,
        },
        pulseQuality: {
            type: [String],
            required: true,
            default: []
        },
        otherFindding: {
            type: [String],
            required: true,
            default: []
        },
        radialPulse: {
            type: Number,
            required: true,
        },
        dorsalisPedisPulse: {
            type: Number,
            required: true,
        },
        postTibialPulse: {
            type: Number,
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
        edemaSide: {
            type: String,
            required: true,
        },
        edemafindingNotes: {
            type: String,
            required: true,
        },
        edemafindingGrade: {
            type: [String],
            required: false,
            default: []
        },
        edemafindingLocation: {
            type: [String],
            required: false,
            default: []
        },
        riskFindings: {
            type: [String],
            required: false,
            default: []
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
        respatoryRate: {
            type: Number,
            required: true
        },
        spo2: {
            type: Number,
            required: true
        },
        symmetry: {
            type: [String],
            required: false,
            default: []
        },
        effertsFindingNotes: {
            type: String,
            required: true,
        },
        effertsNormal: {
            type: [String],
            required: false,
            default: []
        },
        effertsIncreaseWorkOfBreathing: {
            type: [String],
            required: false,
            default: []
        },
        chestWallAbnormality: {
            type: [String],
            required: false,
            default: []
        },




        lungAuscultation: {
            type: String,
            required: true,
        },
        laNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        lungFindingsNotes: {
            type: String,
            required: true,
        },
        upperLR: {
            type: Number,
            required: true,
        },
        midLR: {
            type: Number,
            required: true,
        },
        baseLR: {
            type: Number,
            required: true,
        },
        lungNormal: {
            type: [String],
            required: false,
            default: []
        },
        adventitiousSounds: {
            type: [String],
            required: false,
            default: []
        },
        airwayDiminished: {
            type: [String],
            required: false,
            default: []
        }


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
        cranialNervesFindingNotes: {
            type: String,
            required: true,
        },
        pupilsEyeMovements: {
            type: [String],
            required: false,
            default: []
        },
        facialHearing: {
            type: [String],
            required: false,
            default: []
        },
        palateSpeechNeck: {
            type: [String],
            required: false,
            default: []
        },
        lateralizedFindings: [
            {
                facialDroop: {
                    type: String,
                    required: true,
                    default: "",
                },
                uvulaDeviation: {
                    type: String,
                    required: true,
                    default: "",
                },
                tongueDeviation: {
                    type: String,
                    required: true,
                    default: "",
                },
            },
        ],

        mentalStatusOrientation: {
            type: String,
            required: true,
        },
        msoNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        levelConsciousness: {
            type: String,
            required: true,
        },
        mentalOrientation: [
            {
                person: {
                    type: Boolean,
                    required: false,
                    default: false,
                },
                place: {
                    type: Boolean,
                    required: false,
                    default: false,
                },
                time: {
                    type: Boolean,
                    required: false,
                    default: false,
                },
                situation: {
                    type: Boolean,
                    required: false,
                    default: false,
                },
            },
        ],
        mentalFindingNote: {
            type: String,
            required: true,
            default: "",
        },
        mentalMoodBehavior: {
            type: [String],
            required: false,
            default: []
        },
        mentalSpeech: {
            type: [String],
            required: false,
            default: []
        },



        coordinationCerebellarFunction: {
            type: String,
            required: true,
        },
        ccfNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        gaitPattern: {
            type: String,
            required: true,
            default: "",
        },
        gaitFindings: [
            {
                rombergTest: {
                    type: String,
                    required: true,
                    enum: ["Negative", "Positive"],
                    default: "Negative"
                },

                tandemGait: {
                    type: String,
                    required: true,
                    enum: ["Normal", "Abnormal"],
                    default: "Normal"
                },

                dysmetria: {
                    type: String,
                    required: true,
                    enum: ["None", "L", "R"],
                    default: "None"
                },

                abnormalHeelToShin: {
                    type: String,
                    required: true,
                    enum: ["None", "L", "R"],
                    default: "None"
                }
            }
        ],
        coordinationCerebellarFindingNotes: {
            type: String,
            required: true,
            default: "",
        },
        rapidMovementsTremor: {
            type: [String],
            required: false,
            default: []
        },

        motorStrengthMatrix: {
            type: String,
            required: true,
        },
        msmNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        glasgowComaScale: [
            {
                eyeResponse: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                verbalResponse: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                motorResponse: {
                    type: Number,
                    required: true,
                    default: 0,
                },
            },
        ],
        muscleGroup: [
            {
                UpperExtL: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                UpperExtR: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                LowerExtL: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                LowerExtR: {
                    type: Number,
                    required: true,
                    default: 0,
                },
            },
        ],
        msmFindingNotes: {
            type: String,
            required: true,
        },
        toneDrift: {
            type: [String],
            required: false,
            default: []
        },
        globalPatterns: {
            type: [String],
            required: false,
            default: []
        },

        sensoryExam: {
            type: String,
            required: true,
        },
        seNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        sensoryExamination: [
            {
                extremity: {
                    type: String,
                    required: true,
                    enum: ["RUE", "LUE", "RLE", "LLE"]
                },
                lightTouch: {
                    type: String,
                    required: true,
                    enum: ["I", "D", "A"],
                    default: "I"
                },
                pinprick: {
                    type: String,
                    required: true,
                    enum: ["I", "D", "A"],
                    default: "I"
                },
                vibration: {
                    type: String,
                    required: true,
                    enum: ["I", "D", "A"],
                    default: "I"
                },
                proprioception: {
                    type: String,
                    required: true,
                    enum: ["I", "D", "A"],
                    default: "I"
                }
            }
        ],
        hemisensoryLoss: [
            {
                hemisensoryLoss: {
                    type: String,
                    enum: ['L', 'R', 'None'],
                    default: 'None'
                }
            }
        ],
        sensoryFindingNote: {
            type: String,
            required: true,
            default: "",
        },
        sensoryDistributionPattern: {
            type: [String],
            required: false,
            default: []
        },


        deepTendonReflexes: {
            type: String,
            required: true,
        },
        dtrNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        reflexes: [
            {
                biceps: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                triceps: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                brachioradialis: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                patellarLeft: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                patellarRight: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                achillesLeft: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
                achillesRight: {
                    type: Number,
                    enum: [0, 1, 2, 3, 4, 5],
                    required: true,
                    default: '2+',
                },
            },
        ],
        pathologicalReflexes: {
            babinski: {
                type: String,
                enum: ['L', 'R', 'None'],
                default: 'None'
            },
            sustainedClonus: {
                type: String,
                enum: ['L', 'R', 'None'],
                default: 'None'
            },
            hoffmansSign: {
                type: String,
                enum: ['L', 'R', 'None'],
                default: 'None'
            }
        },
        dtrFindingNotes: {
            type: String,
            required: true,
            default: "",
        }
    },
    {
        timestamps: true,
    }
)

const gastrointestinalSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        ppaNoFinding: {
            type: Boolean,
        },
        percussionAscitesAssessment: {
            type: String,
            required: true,
        },
        paaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        quadrantPercussionMap: {
            RUQ: {
                type: String,
                enum: ["Tympanic", "Dull"],
                default: "Tympanic",
            },
            LUQ: {
                type: String,
                enum: ["Tympanic", "Dull"],
                default: "Tympanic",
            },
            RLQ: {
                type: String,
                enum: ["Tympanic", "Dull"],
                default: "Tympanic",
            },
            LLQ: {
                type: String,
                enum: ["Tympanic", "Dull"],
                default: "Tympanic",
            },
        },
        findingsNotes: {
            type: String,
            default: "",
            trim: true,
        },
        ascitesSigns: [
            {
                type: String,
                enum: [
                    "Shifting Dullness Present",
                    "Positive Fluid Wave",
                    "Generalized Dullness",
                    "No Shifting Dullness",
                    "Negative Fluid Wave",
                ],
            },
        ],
        otherFindings: [
            {
                type: String,
                enum: [
                    "Hypertympanic (Gaseous Distension)",
                    "Suprapubic Dullness (Distended Bladder)",
                    "Normal Bladder Percussion",
                ],
            },
        ],

        ssNoFinding: {
            type: Boolean
        },
        specialAbdominalSigns: {
            type: String,
            required: true,
        },
        sasNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        ssFindingNotes: {
            type: String,
            required: false,
            default: ""
        },
        localizedSigns: {
            reboundTenderness: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            mcBurneyPointTenderness: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            murphySign: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            rovsingSign: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            psoasSign: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            obturatorSign: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            }
        },
        peritonealFindings: {
            type: [String],
            required: false,
            default: []
        },


        hssNoFinding: {
            type: Boolean,
        },
        herniaSurgicalScars: {
            type: String,
            required: false,
        },
        hssNormalAbnormal: {
            type: Boolean,
            required: false,
        },
        herniaTypes: {
            inguinalHernia: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            femoralHernia: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            umbilicalHernia: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },

            incisionalVentralHernia: {
                type: String,
                enum: ["Positive", "Negative"],
                default: "Negative",
            },
        },
        coughImpulse: {
            type: String,
            enum: ["Absent", "Present"],
            default: "Absent",
        },
        bowelSoundsatSite: {
            type: String,
            enum: ["Absent", "Present"],
            default: "Absent",
        },
        tenderness: {
            type: String,
            enum: ["None", "Present"],
            default: "None",
        },
        hssFindingNotes: {
            type: String,
            required: false,
        },

        scarNoFinding: {
            type: Boolean,
            default: false,
        },

        // Scar Location
        scarLocation: {
            RUQ: {
                type: Boolean,
                default: false,
            },
            LUQ: {
                type: Boolean,
                default: false,
            },
            RLQ: {
                type: Boolean,
                default: false,
            },
            LLQ: {
                type: Boolean,
                default: false,
            },
        },

        // Scar Character (Multiple Selection)
        scarCharacter: [
            {
                type: String,
                enum: [
                    "Well-Healed",
                    "Hypertrophic Scar",
                    "Keloid Formation",
                    "Scar Tenderness",
                    "Hardware Palpable",
                ],
            },
        ],

        // Wound Concerns (Multiple Selection)
        woundConcerns: [
            {
                type: String,
                enum: [
                    "Signs of Infection",
                    "Dehiscence",
                ],
            },
        ],

        // Findings Notes
        scarFindingsNotes: {
            type: String,
            trim: true,
            default: "",
        },


        anorectalRectalExamination: {
            type: String,
            required: false,
        },
        areNormalAbnormal: {
            type: Boolean,
            required: false,
        },
        // Sphincter Tone
        sphincterTone: {
            type: String,
            enum: [
                "Absent",
                "Decreased",
                "Normal",
                "Increased"
            ],
            default: "Normal",
        },

        // Gross Blood
        grossBlood: {
            type: String,
            enum: [
                "Absent",
                "Present"
            ],
            default: "Absent",
        },

        // Occult Blood Test
        occultBloodTest: {
            type: String,
            enum: [
                "Negative",
                "Positive"
            ],
            default: "Negative",
        },

        // External Inspection (Multi Select)
        externalInspection: [
            {
                type: String,
                enum: [
                    "No External Lesions",
                    "External Hemorrhoids",
                    "Thrombosed Hemorrhoid",
                    "Anal Fissure",
                    "Skin Tags",
                    "Rectal Prolapse",
                    "Fistula Opening"
                ]
            }
        ],

        // Digital Rectal Examination Findings (Multi Select)
        dreFindings: [
            {
                type: String,
                enum: [
                    "No Masses Palpated",
                    "Non-Tender",
                    "Mass Palpated",
                    "Tenderness on Exam",
                    "Internal Hemorrhoids Palpated"
                ]
            }
        ],

        // Prostate Examination (Multi Select)
        prostateFindings: [
            {
                type: String,
                enum: [
                    "Normal Size / Contour",
                    "Enlarged",
                    "Nodular / Irregular",
                    "Tender (Suggestive of Prostatitis)"
                ]
            }
        ],

        // Findings Notes
        areFindingsNotes: {
            type: String,
            trim: true,
            default: "",
        },

        reasonforDeferral: {
            type: String,
            trim: true,
            default: "",
        }

    },
    {
        timestamps: true,
    }
)

const heentSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        headNoFinding: {
            type: Boolean,
        },
        headAssessment: {
            type: String,
            required: true,
        },
        headNormalAbnormal: {
            type: Boolean,
            required: true,
        },

        eyesNoFinding: {
            type: Boolean,
        },
        eyesAssessment: {
            type: String,
            required: true,
        },
        eyesNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        eyesFindingsNotes: {
            type: String,
            trim: true,
            default: "",
        },
        pupilMovementChecklist: {
            type: [String],
            required: false,
            default: []
        },
        conjunctival: {
            redness: {
                type: String,
                enum: ["None", "L", "R", "Bilateral"],
                default: "None",
            },
        },
        eyesOtherFindings: {
            type: [String],
            required: false,
            default: []
        },


        earsNoFinding: {
            type: Boolean,
        },
        earsAssessment: {
            type: String,
            required: true,
        },
        earsNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        earsFindingNotes: {
            type: String,
            trim: true,
            default: "",
        },
        infection: {
            earCanalInfection: {
                type: String,
                enum: ["None", "L", "R", "Bilateral"],
                default: "None",
            },
            bulging: {
                type: String,
                enum: ["None", "L", "R", "Bilateral"],
                default: "None",
            },
        },
        earsOtherFindings: {
            type: [String],
            required: false,
            default: []
        },

        noseNoFinding: {
            type: Boolean,
        },
        noseAssessment: {
            type: String,
            required: true,
        },
        noseNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        noseFindingNote: {
            type: String,
            trim: true,
            default: "",
        },
        epistaxis: {
            type: String,
            trim: true,
            default: "",
        },



        throatNoFinding: {
            type: Boolean,
        },
        throatAssessment: {
            type: String,
            required: true,
        },
        throatNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        throatFindingNotes: {
            type: String,
            trim: true,
            default: "",
        },
        tonsilSize: {
            type: String,
            trim: true,
            default: "",
        }
    },
    {
        timestamps: true,
    }
)

const genitourinarySchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        urinaryAssessment: {
            type: String,
            required: true,
        },
        uaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        symptomsChecklist: {
            type: [String],
            required: false,
            default: []
        },
        bladderPalpationSuprapubic: {
            type: String,
            required: true,
        },
        urinaryFindingNotes: {
            type: String,
            required: true,
        },

        cvaAssessment: {
            type: String,
            required: true,
        },
        caNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        caRightCVA: {
            type: String,
            required: true,
        },
        caLeftCVA: {
            type: String,
            required: true,
        },
        kidneyPalpationFindings: {
            type: [String],
            required: false,
            default: []
        },
        caFindingNotes: {
            type: String,
            required: true,
        },



        reproductiveAssessment: {
            type: String,
            required: true,
        },
        raNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        raQuickSelectFindings: {
            type: [String],
            required: false,
            default: []
        },
        raEstimatedSize: {
            type: String,
            required: true,
        },
        raConsistency: {
            type: String,
            required: true,
        },
        raPalpationInspection: {
            type: [String],
            required: false,
            default: []
        },
        raTransillumination: {
            type: String,
            required: true,
        },


        pcuColor: {
            type: String,
            required: true,
        },
        pcuClarity: {
            type: String,
            required: true,
        },
        pcuSpecificGravity: {
            type: String,
            required: true,
        },
        dipstickParameters: {
            leukocytes: {
                type: String,
                enum: [
                    'Neg',
                    'Trace',
                    '1+',
                    '2+',
                    '3+',
                    '4+'
                ],
                default: 'Neg'
            },
            nitrites: {
                type: String,
                enum: ['Negative', 'Positive'],
                default: 'Negative'
            },
            protein: {
                type: String,
                enum: [
                    'Neg',
                    'Trace',
                    '1+',
                    '2+',
                    '3+',
                    '4+'
                ],
                default: 'Neg'
            },
            glucose: {
                type: String,
                enum: [
                    'Normal',
                    '50mg/dL',
                    '100mg/dL',
                    '>250mg/dL',
                ],
                default: 'Normal'
            },
            rbcBlood: {
                type: String,
                enum: [
                    'Neg',
                    'Trace',
                    '1+',
                    '2+',
                    '3+',
                    '4+'
                ],
                default: 'Neg'
            },
            ketones: {
                type: String,
                enum: [
                    'Neg',
                    'Trace',
                    'Small',
                    'Moderate',
                    'Large'
                ],
                default: 'Neg'
            }
        },
        urineCultureSensitivityOrdered: {
            type: String,
            enum: [
                'Yes',
                'No'
            ],
            default: 'No'
        },

        postVoidResidual: {
            volume: {
                type: Number,
                min: 0,
                default: null
            },
            indwellingCatheterPresent: {
                type: Boolean,
                default: false
            },
            catheterTypeAndSize: {
                type: String,
                trim: true,
                default: ""
            },
            urineOutputCharacter: {
                type: String,
                trim: true,
                default: ""
            },
            bedsideUltrasoundFindings: {
                type: String,
                trim: true,
                default: ""
            }
        }
    },
    {
        timestamps: true,
    }
)

const musculoskeletalExaminationSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        spineAssessment: {
            type: String,
            required: true,
        },
        saNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        regionsExamined: {
            type: [String],
            required: false,
            default: []
        },
        cervicalMotion: {
            type: String,
            required: true,
        },
        lumbarMotion: {
            type: String,
            required: true,
        },
        specialTest: {
            type: [String],
            required: false,
            default: []
        },


        upperExtremityAssessment: {
            type: String,
            required: true,
        },
        ueaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        upperJointsRegionsExamined: {
            type: [String],
            required: false,
            default: []
        },
        rotatorCuffShoulderProvocative: {
            type: [String],
            required: false,
            default: []
        },
        elbowHandNerveTests: {
            type: [String],
            required: false,
            default: []
        },

        lowerExtremityAssessment: {
            type: String,
            required: true,
        },
        leaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        lowerJointsRegionsExamined: {
            type: [String],
            required: false,
            default: []
        },
        kneeInstabilityMeniscalTests: {
            type: [String],
            required: false,
            default: []
        },
        hipFootVascularTests: {
            type: [String],
            required: false,
            default: []
        }
    },
    {
        timestamps: true,
    }
)

const skinExaminationSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        integrityAssessment: {
            type: String,
            required: true,
        },
        iaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        primaryLocationSite: {
            type: [String],
            required: false,
            default: []
        },
        pressureInjuryStaging: {
            type: String,
            required: true,
        },


        vascularAssessment: {
            type: String,
            required: true,
        },
        vaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        peripheralEdemaGrade: {
            type: String,
            required: true,
        },
        capillaryRefillTime: {
            type: String,
            required: true,
        },

        appendageAssessment: {
            type: String,
            required: true,
        },
        aaNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        nailBedAngle: {
            type: String,
            required: true,
        },
        hairDistribution: {
            type: String,
            required: true,
        },

        lesionsMoles: {
            type: [String],
            required: false,
            default: []
        },
        dermatoscopy: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const psychiatricSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true,
        },

        behaviorAssessment: {
            type: String,
            required: true,
        },
        baNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        statedMood: {
            type: String,
            required: true,
        },
        observedAffect: {
            type: String,
            required: true,
        },


        thoughtAssessment: {
            type: String,
            required: true,
        },
        taNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        safetyRiskAssessment: {
            type: [String],
            required: false,
            default: []
        },


        cognitionAssessment: {
            type: String,
            required: true,
        },
        caNormalAbnormal: {
            type: Boolean,
            required: true,
        },
        orientationDomains: {
            type: [String],
            required: false,
            default: []
        },


        diagnosticImpression: {
            type: String,
            required: true,
        },
        immediateDisposition: {
            type: String,
            required: true,
        },
        safetyPlan: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const physicalExaminationSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patients",
            required: true
        },
        generalSurvey: [generalSurveySchema],
        cardiovascular: [cardiovascularSchema],
        respiratory: [respiratorySchema],
        neurological: [neurologicalSchema],
        gastrointestinal: [gastrointestinalSchema],
        heent: [heentSchema],
        genitourinary: [genitourinarySchema],
        musculoskeletal: [musculoskeletalExaminationSchema],
        skin: [skinExaminationSchema],
        psychiatric: [psychiatricSchema],
    },
    {
        timestamps: true,
    }
);


export default physicalExaminationSchema;