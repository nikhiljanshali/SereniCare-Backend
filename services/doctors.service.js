import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import DoctorModel from "../models/doctors.model.js";
import AuthUserModel from "../models/authuser.model.js";
import ClinicModel from "../models/clinic.model.js";
import SpecialityModel from "../models/doctors.model.js";
import DoctorLeaveModel from "../models/doctorLeaves.model.js";
import DoctorEducationModel from "../models/doctorEducation.model.js";
import DoctorWorkExperienceModel from "../models/doctorWorkExperience.model.js";
import DoctorCertificationModel from "../models/doctorCertificaion.model.js";
import DoctorPublicationModel from "../models/doctorPublicaion.model.js"
import DoctorSlotConfigurationModel from "../models/doctorSlotConfiguration.model.js";
import DoctorAvailabilityModel from "../models/doctorAvailability.model.js";

export const createDoctorService = async (payload) => {
  let savedUser = null;
  let savedDoctor = null;

  try {
    const { doctorData, userData, clinics: clinicList } = payload;
    const workEmail = userData?.workEmail;
    const existingUser = await AuthUserModel.findOne({ workEmail });
    if (existingUser)
      throw new Error("User already exists with this workEmail.");
    const hashedPassword = await bcrypt.hash('Doctor@2026', 10);

    // 1. Create Auth User
    const user = new AuthUserModel({
      firstName: userData.firstName,
      lastName: userData.lastName,
      workEmail: userData.workEmail,
      phone: userData.phone,
      password: hashedPassword,
      role: userData.role,
    });
    savedUser = await user.save();

    // 2. Create Doctor
    const count = await DoctorModel.countDocuments();
    const doctorCode = `DOC-${String(count + 1).padStart(4, "0")}`;

    const doctor = new DoctorModel({
      ...doctorData,
      doctorCode,
      authUserId: savedUser._id,
      phone: userData.phone,
      email: userData.workEmail,
    });
    savedDoctor = await doctor.save();

    // 3. Create Clinics
    const clinicsToInsert = clinicList.map((clinic) => ({
      ...clinic,
      doctorId: savedDoctor._id,
      specializations: clinic.specializations ?? [],
    }));
    const savedClinics = await ClinicModel.insertMany(clinicsToInsert);

    return { savedUser, savedDoctor, savedClinics };
  } catch (error) {
    // 🧹 Manual rollback — clean up whatever was saved before the failure
    if (savedDoctor) await DoctorModel.deleteOne({ _id: savedDoctor._id });
    if (savedUser) await AuthUserModel.deleteOne({ _id: savedUser._id });
    throw error;
  }
};

/**
 * ✅ GET ALL DOCTORS
 */
export const getAllDoctorsService = async () => {
  return await DoctorModel.aggregate([
    {
      $lookup: {
        from: "clinics", // collection name
        localField: "_id", // doctor._id
        foreignField: "doctorId", // clinic.doctorId
        as: "clinicDetails",
      },
    },
    {
      $sort: { createdAt: -1 },
    },
  ]);
};

/**
 * ✅ GET ALL DOCTORS WITH LIMITED FIELDS (for dropdowns, etc.)
 */
export const getAllDoctorsLimitedService = async () => {
  return await DoctorModel.find({}, { _id: 1, firstName: 1, lastName: 1 }).sort({ createdAt: -1 });
};
/**
 * ✅ GET DOCTOR BY ID (with clinics)
 */
export const getDoctorByIdService = async (doctorId) => {
  const doctor = await DoctorModel.findById(doctorId)
    .populate("authUserId")
    .lean();

  if (!doctor) throw new Error("Doctor not found");

  const clinics = await ClinicModel.find({ doctorId }).lean();

  return {
    ...doctor,
    clinics,
  };
};

/**
 * ✅ UPDATE DOCTOR
 */
export const updateDoctorService = async (doctorId, payload) => {
  try {
    const { doctorData, userData, clinics } = payload;

    // Update Doctor fields (officeStatus, qualifications, experience, etc.)
    const doctor = await DoctorModel.findByIdAndUpdate(doctorId, doctorData, {
      returnDocument: 'after',
      runValidators: true, // Ensure schema validation is applied
    });
    if (!doctor) throw new Error("Doctor not found");

    // Update User (AuthUser)
    if (userData) {
      await AuthUserModel.findByIdAndUpdate(
        doctor.authUserId,
        userData,
        { returnDocument: 'after' }
      );
    }

    // Replace Clinics (simple approach)
    if (clinics && clinics.length > 0) {
      await ClinicModel.deleteMany({ doctorId });
      await ClinicModel.insertMany(
        clinics.map((c) => ({
          ...c,
          doctorId,
        })),
      );
    }

    // Re-fetch updated doctor with populated references
    const updatedDoctor = await DoctorModel.findById(doctorId)
      .populate("authUserId")
      .lean();

    return updatedDoctor;
  } catch (error) {
    throw error;
  }
};

/**
 * ✅ DELETE DOCTOR (cascade delete)
 */
export const deleteDoctorService = async (doctorId) => {
  try {
    const doctor = await DoctorModel.findById(doctorId);

    if (!doctor) throw new Error("Doctor not found");

    // Delete clinics
    await ClinicModel.deleteMany({ doctorId });

    // Delete doctor
    await DoctorModel.findByIdAndDelete(doctorId);

    // Delete user (use AuthUserModel instead of UserModel)
    await AuthUserModel.findByIdAndDelete(doctor.authUserId);

    return { message: "Doctor deleted successfully" };
  } catch (error) {
    throw error;
  }
};


/**
 * Add Doctor Leave
 */
export const addDoctorLeaveService = async (leaveData) => {
  try {
    const doctorLeave = await DoctorLeaveModel.create(leaveData);

    return {
      message: "Doctor leave added successfully",
      data: doctorLeave,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Update Doctor Leave
 */
export const updateDoctorLeaveService = async (leaveId, updateData) => {
  try {
    const updatedLeave = await DoctorLeaveModel.findByIdAndUpdate(
      leaveId,
      updateData,
      {
        returnDocument: 'after',
        runValidators: true,
      }
    );

    if (!updatedLeave) {
      throw new Error("Doctor leave not found");
    }

    return {
      message: "Doctor leave updated successfully",
      data: updatedLeave,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Delete Doctor Leave
 */
export const deleteDoctorLeaveService = async (leaveId) => {
  try {
    const deletedLeave = await DoctorLeaveModel.findByIdAndDelete(leaveId);

    if (!deletedLeave) {
      throw new Error("Doctor leave not found");
    }

    return {
      message: "Doctor leave deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get All Doctor Leaves
 */
export const getAllDoctorLeavesService = async () => {
  try {
    const leaves = await DoctorLeaveModel.find()
      .populate("doctorId")
      .sort({ createdAt: -1 });

    return leaves;
  } catch (error) {
    throw error;
  }
};

/**
 * Get Doctor Leaves By Doctor Id
 */
export const getDoctorLeavesByDoctorIdService = async (doctorId) => {
  try {
    const leaves = await DoctorLeaveModel.find({ doctorId })
      // .populate("doctorId")
      .sort({ leaveStartDate: -1 });

    return leaves;
  } catch (error) {
    throw error;
  }
};

/**
 * Get Single Doctor Leave By Id
 */
export const getDoctorLeaveByIdService = async (leaveId) => {
  try {
    const leave = await DoctorLeaveModel.findById(leaveId).populate(
      "doctorId"
    );

    if (!leave) {
      throw new Error("Doctor leave not found");
    }

    return leave;
  } catch (error) {
    throw error;
  }
};



/* -------------------------------------------------------------------------- */
/*                         Add Doctor Education Service                        */
/* -------------------------------------------------------------------------- */

export const addDoctorEducationService = async (educationData) => {
  try {
    const education = await DoctorEducationModel.create(educationData);

    return {
      message: "Doctor education added successfully",
      data: education,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                       Update Doctor Education Service                       */
/* -------------------------------------------------------------------------- */

export const updateDoctorEducationService = async (
  educationId,
  updateData
) => {
  try {
    const updatedEducation =
      await DoctorEducationModel.findByIdAndUpdate(
        educationId,
        updateData,
        {
          returnDocument: 'after',
          runValidators: true,
        }
      );

    if (!updatedEducation) {
      throw new Error("Doctor education not found");
    }

    return {
      message: "Doctor education updated successfully",
      data: updatedEducation,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                       Delete Doctor Education Service                       */
/* -------------------------------------------------------------------------- */

export const deleteDoctorEducationService = async (educationId) => {
  try {
    const deletedEducation =
      await DoctorEducationModel.findByIdAndDelete(educationId);

    if (!deletedEducation) {
      throw new Error("Doctor education not found");
    }

    return {
      message: "Doctor education deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                     Get All Doctor Education Service                        */
/* -------------------------------------------------------------------------- */

export const getAllDoctorEducationService = async () => {
  try {
    const educations = await DoctorEducationModel.find()
      .populate("doctorId")
      .sort({ displayOrder: 1, startYear: -1 });

    return educations;
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                   Get Doctor Education By Id Service                        */
/* -------------------------------------------------------------------------- */

export const getDoctorEducationByIdService = async (educationId) => {
  try {
    const education = await DoctorEducationModel.findById(
      educationId
    ).populate("doctorId");

    if (!education) {
      throw new Error("Doctor education not found");
    }

    return education;
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*               Get Doctor Education By Doctor Id Service                     */
/* -------------------------------------------------------------------------- */

export const getDoctorEducationByDoctorIdService = async (
  doctorId
) => {
  try {
    const educations = await DoctorEducationModel.find({
      doctorId: doctorId,
    })
      // .populate("doctorId")
      .sort({ displayOrder: 1, startYear: -1 });

    return educations;
  } catch (error) {
    throw error;
  }
};



/* -------------------------------------------------------------------------- */
/*                    Add Doctor Work Experience Service                       */
/* -------------------------------------------------------------------------- */

export const addDoctorWorkExperienceService = async (
  experienceData
) => {
  try {
    const experience =
      await DoctorWorkExperienceModel.create(experienceData);

    return {
      message: "Doctor work experience added successfully",
      data: experience,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Work Experience Service                      */
/* -------------------------------------------------------------------------- */

export const updateDoctorWorkExperienceService = async (
  experienceId,
  updateData
) => {
  try {
    const updatedExperience =
      await DoctorWorkExperienceModel.findByIdAndUpdate(
        experienceId,
        updateData,
        {
          returnDocument: 'after',
          runValidators: true,
        }
      );

    if (!updatedExperience) {
      throw new Error("Doctor work experience not found");
    }

    return {
      message: "Doctor work experience updated successfully",
      data: updatedExperience,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Work Experience Service                      */
/* -------------------------------------------------------------------------- */

export const deleteDoctorWorkExperienceService = async (
  experienceId
) => {
  try {
    const deletedExperience =
      await DoctorWorkExperienceModel.findByIdAndDelete(
        experienceId
      );

    if (!deletedExperience) {
      throw new Error("Doctor work experience not found");
    }

    return {
      message: "Doctor work experience deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                 Get All Doctor Work Experience Service                      */
/* -------------------------------------------------------------------------- */

export const getAllDoctorWorkExperienceService = async () => {
  try {
    const experiences =
      await DoctorWorkExperienceModel.find()
        .populate("doctorId")
        .sort({ displayOrder: 1, startDate: -1 });

    return experiences;
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*               Get Doctor Work Experience By Id Service                      */
/* -------------------------------------------------------------------------- */

export const getDoctorWorkExperienceByIdService = async (
  experienceId
) => {
  try {
    const experience =
      await DoctorWorkExperienceModel.findById(
        experienceId
      ).populate("doctorId");

    if (!experience) {
      throw new Error("Doctor work experience not found");
    }

    return experience;
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*           Get Doctor Work Experience By Doctor Id Service                   */
/* -------------------------------------------------------------------------- */

export const getDoctorWorkExperienceByDoctorIdService =
  async (doctorId) => {
    try {
      const experiences =
        await DoctorWorkExperienceModel.find({ doctorId: doctorId, })
          // .populate("doctorId")
          .sort({ displayOrder: 1, startDate: -1 });

      return experiences;
    } catch (error) {
      throw error;
    }
  };


/* -------------------------------------------------------------------------- */
/*                    Add Doctor Certification Service                         */
/* -------------------------------------------------------------------------- */

export const addDoctorCertificationService = async (
  certificationData
) => {
  try {
    const certification =
      await DoctorCertificationModel.create(
        certificationData
      );

    return {
      message: "Doctor certification added successfully",
      data: certification,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Certification Service                        */
/* -------------------------------------------------------------------------- */

export const updateDoctorCertificationService = async (
  certificationId,
  updateData
) => {
  try {
    const updatedCertification =
      await DoctorCertificationModel.findByIdAndUpdate(
        certificationId,
        updateData,
        {
          returnDocument: 'after',
          runValidators: true,
        }
      );

    if (!updatedCertification) {
      throw new Error(
        "Doctor certification not found"
      );
    }

    return {
      message:
        "Doctor certification updated successfully",
      data: updatedCertification,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Certification Service                        */
/* -------------------------------------------------------------------------- */

export const deleteDoctorCertificationService =
  async (certificationId) => {
    try {
      const deletedCertification =
        await DoctorCertificationModel.findByIdAndDelete(
          certificationId
        );

      if (!deletedCertification) {
        throw new Error(
          "Doctor certification not found"
        );
      }

      return {
        message:
          "Doctor certification deleted successfully",
      };
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*                 Get All Doctor Certifications Service                       */
/* -------------------------------------------------------------------------- */

export const getAllDoctorCertificationService =
  async () => {
    try {
      const certifications =
        await DoctorCertificationModel.find()
          .populate("doctorId")
          .sort({
            issuedDate: -1,
            createdAt: -1,
          });

      return certifications;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Doctor Certification By Id Service                        */
/* -------------------------------------------------------------------------- */

export const getDoctorCertificationByIdService =
  async (certificationId) => {
    try {
      const certification =
        await DoctorCertificationModel.findById(
          certificationId
        ).populate("doctorId");

      if (!certification) {
        throw new Error(
          "Doctor certification not found"
        );
      }

      return certification;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*          Get Doctor Certifications By Doctor Id Service                     */
/* -------------------------------------------------------------------------- */

export const getDoctorCertificationByDoctorIdService =
  async (doctorId) => {
    try {
      const certifications =
        await DoctorCertificationModel.find({
          doctorId,
        }).sort({
          issuedDate: -1,
          createdAt: -1,
        });

      return certifications;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Expired Certifications Service                            */
/* -------------------------------------------------------------------------- */

export const getExpiredCertificationsService =
  async () => {
    try {
      return await DoctorCertificationModel.find({
        isLifetime: false,
        expiryDate: { $lt: new Date() },
      }).populate("doctorId");
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*            Get Certifications Due For Renewal Service                       */
/* -------------------------------------------------------------------------- */

export const getRenewalDueCertificationsService =
  async () => {
    try {
      const today = new Date();

      const next90Days = new Date();
      next90Days.setDate(
        next90Days.getDate() + 90
      );

      return await DoctorCertificationModel.find({
        isLifetime: false,
        expiryDate: {
          $gte: today,
          $lte: next90Days,
        },
      }).populate("doctorId");
    } catch (error) {
      throw error;
    }
  };


/* -------------------------------------------------------------------------- */
/*                    Add Doctor Publication Service                           */
/* -------------------------------------------------------------------------- */

export const addDoctorPublicationService = async (
  publicationData
) => {
  try {
    const publication =
      await DoctorPublicationModel.create(
        publicationData
      );

    return {
      message: "Doctor publication added successfully",
      data: publication,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Publication Service                          */
/* -------------------------------------------------------------------------- */

export const updateDoctorPublicationService = async (
  publicationId,
  updateData
) => {
  try {
    const updatedPublication =
      await DoctorPublicationModel.findByIdAndUpdate(
        publicationId,
        updateData,
        {
          returnDocument: 'after',
          runValidators: true,
        }
      );

    if (!updatedPublication) {
      throw new Error(
        "Doctor publication not found"
      );
    }

    return {
      message:
        "Doctor publication updated successfully",
      data: updatedPublication,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Publication Service                          */
/* -------------------------------------------------------------------------- */

export const deleteDoctorPublicationService =
  async (publicationId) => {
    try {
      const deletedPublication =
        await DoctorPublicationModel.findByIdAndDelete(
          publicationId
        );

      if (!deletedPublication) {
        throw new Error(
          "Doctor publication not found"
        );
      }

      return {
        message:
          "Doctor publication deleted successfully",
      };
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*                 Get All Doctor Publications Service                         */
/* -------------------------------------------------------------------------- */

export const getAllDoctorPublicationService =
  async () => {
    try {
      const publications =
        await DoctorPublicationModel.find()
          .populate("doctorId")
          .sort({
            publicationYear: -1,
            createdAt: -1,
          });

      return publications;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Doctor Publication By Id Service                          */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationByIdService =
  async (publicationId) => {
    try {
      const publication =
        await DoctorPublicationModel.findById(
          publicationId
        ).populate("doctorId");

      if (!publication) {
        throw new Error(
          "Doctor publication not found"
        );
      }

      return publication;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*          Get Doctor Publications By Doctor Id Service                       */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationByDoctorIdService =
  async (doctorId) => {
    try {
      const publications =
        await DoctorPublicationModel.find({
          doctorId,
        }).sort({
          publicationYear: -1,
          createdAt: -1,
        });

      return publications;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*             Get Publications By Author Role Service                         */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationsByAuthorRoleService = async (authorRole) => {
  try {
    const publications =
      await DoctorPublicationModel.find({
        authorRole,
      })
        .populate("doctorId")
        .sort({
          publicationYear: -1,
        });

    return publications;
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*           Get Publications By Publication Year Service                      */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationsByYearService = async (publicationYear) => {
  try {
    const publications =
      await DoctorPublicationModel.find({
        publicationYear,
      })
        .populate("doctorId")
        .sort({
          createdAt: -1,
        });

    return publications;
  } catch (error) {
    throw error;
  }
};



/* -------------------------------------------------------------------------- */
/*               Add Doctor Slot Configuration Service                         */
/* -------------------------------------------------------------------------- */

export const addDoctorSlotConfigurationService = async (configurationData) => {
  try {
    const configuration =
      await DoctorSlotConfigurationModel.create(
        configurationData
      );

    return {
      message:
        "Doctor slot configuration added successfully",
      data: configuration,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*             Update Doctor Slot Configuration Service                        */
/* -------------------------------------------------------------------------- */

export const updateDoctorSlotConfigurationService = async (configurationId, updateData) => {
  try {
    const updatedConfiguration =
      await DoctorSlotConfigurationModel.findByIdAndUpdate(
        configurationId,
        updateData,
        {
          returnDocument: 'after',
          runValidators: true,
        }
      );

    if (!updatedConfiguration) {
      throw new Error(
        "Doctor slot configuration not found"
      );
    }

    return {
      message:
        "Doctor slot configuration updated successfully",
      data: updatedConfiguration,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*             Delete Doctor Slot Configuration Service                        */
/* -------------------------------------------------------------------------- */

export const deleteDoctorSlotConfigurationService = async (configurationId) => {
  try {
    const deletedConfiguration =
      await DoctorSlotConfigurationModel.findByIdAndDelete(
        configurationId
      );

    if (!deletedConfiguration) {
      throw new Error(
        "Doctor slot configuration not found"
      );
    }

    return {
      message:
        "Doctor slot configuration deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*            Get Doctor Slot Configuration By Doctor Id                       */
/* -------------------------------------------------------------------------- */

export const getDoctorSlotConfigurationByDoctorIdService = async (doctorId) => {
  try {
    return await DoctorSlotConfigurationModel.findOne({ doctorId, });
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                    Add Doctor Availability Service                          */
/* -------------------------------------------------------------------------- */
export const addDoctorAvailabilityService = async (availabilityData) => {
  try {
    const { doctorId, dayOfWeek } = availabilityData;
    // Required field validation
    if (!doctorId) {
      throw new Error("Doctor ID is required");
    }

    if (!dayOfWeek) {
      throw new Error("Day of week is required");
    }

    // Check for existing availability
    const existingAvailability = await DoctorAvailabilityModel.findOne({
      doctorId,
      dayOfWeek,
    });

    if (existingAvailability) {
      throw new Error(
        `Availability already exists for ${dayOfWeek}`
      );
    }

    const availability = await DoctorAvailabilityModel.create(
      availabilityData
    );

    return {
      message: "Doctor availability added successfully",
      data: availability,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Availability Service                         */
/* -------------------------------------------------------------------------- */

export const updateDoctorAvailabilityService = async (availabilityId, updateData) => {
  try {
    const updatedAvailability = await DoctorAvailabilityModel.findByIdAndUpdate(availabilityId, updateData, { returnDocument: 'after', runValidators: true, });
    if (!updatedAvailability) {
      throw new Error(
        "Doctor availability not found"
      );
    }
    return {
      message:
        "Doctor availability updated successfully",
      data: updatedAvailability,
    };
  } catch (error) {
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Availability Service                         */
/* -------------------------------------------------------------------------- */

export const deleteDoctorAvailabilityService =
  async (availabilityId) => {
    try {
      const deletedAvailability =
        await DoctorAvailabilityModel.findByIdAndDelete(
          availabilityId
        );

      if (!deletedAvailability) {
        throw new Error(
          "Doctor availability not found"
        );
      }

      return {
        message:
          "Doctor availability deleted successfully",
      };
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*                 Get All Doctor Availability Service                         */
/* -------------------------------------------------------------------------- */

export const getAllDoctorAvailabilityService =
  async () => {
    try {
      const availabilities =
        await DoctorAvailabilityModel.find()
          .populate("doctorId")
          .sort({
            dayOfWeek: 1,
            createdAt: -1,
          });

      return availabilities;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Doctor Availability By Id Service                         */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityByIdService =
  async (availabilityId) => {
    try {
      const availability =
        await DoctorAvailabilityModel.findById(
          availabilityId
        ).populate("doctorId");

      if (!availability) {
        throw new Error(
          "Doctor availability not found"
        );
      }

      return availability;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*           Get Doctor Availability By Doctor Id Service                      */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityByDoctorIdService =
  async (doctorId) => {
    try {
      const availabilities =
        await DoctorAvailabilityModel.find({
          doctorId,
        }).sort({
          createdAt: -1,
        });

      return availabilities;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*          Get Doctor Availability By Day Service                             */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityByDayService =
  async (doctorId, dayOfWeek) => {
    try {
      const availability =
        await DoctorAvailabilityModel.findOne({
          doctorId,
          dayOfWeek,
        });

      return availability;
    } catch (error) {
      throw error;
    }
  };

/* -------------------------------------------------------------------------- */
/*          Toggle Doctor Availability Status Service                          */
/* -------------------------------------------------------------------------- */

export const toggleDoctorAvailabilityStatusService =
  async (availabilityId, isAvailable) => {
    try {
      const availability =
        await DoctorAvailabilityModel.findByIdAndUpdate(
          availabilityId,
          { isAvailable },
          {
            returnDocument: 'after',
            runValidators: true,
          }
        );

      if (!availability) {
        throw new Error(
          "Doctor availability not found"
        );
      }

      return {
        message:
          "Doctor availability status updated successfully",
        data: availability,
      };
    } catch (error) {
      throw error;
    }
  };
