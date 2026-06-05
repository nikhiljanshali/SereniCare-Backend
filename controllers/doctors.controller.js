import {
  getAllDoctorsService,
  getAllDoctorsLimitedService,
  getDoctorByIdService,
  createDoctorService,
  updateDoctorService,
  deleteDoctorService,

  addDoctorLeaveService,
  updateDoctorLeaveService,
  deleteDoctorLeaveService,
  getAllDoctorLeavesService,
  getDoctorLeavesByDoctorIdService,
  getDoctorLeaveByIdService,

  addDoctorEducationService,
  updateDoctorEducationService,
  deleteDoctorEducationService,
  getAllDoctorEducationService,
  getDoctorEducationByIdService,
  getDoctorEducationByDoctorIdService,

  addDoctorWorkExperienceService,
  updateDoctorWorkExperienceService,
  deleteDoctorWorkExperienceService,
  getAllDoctorWorkExperienceService,
  getDoctorWorkExperienceByIdService,
  getDoctorWorkExperienceByDoctorIdService,

  addDoctorCertificationService,
  updateDoctorCertificationService,
  deleteDoctorCertificationService,
  getAllDoctorCertificationService,
  getDoctorCertificationByIdService,
  getDoctorCertificationByDoctorIdService,

  addDoctorPublicationService,
  updateDoctorPublicationService,
  deleteDoctorPublicationService,
  getAllDoctorPublicationService,
  getDoctorPublicationByDoctorIdService,
  getDoctorPublicationByIdService,

  addDoctorSlotConfigurationService,
  updateDoctorSlotConfigurationService,
  deleteDoctorSlotConfigurationService,
  getDoctorSlotConfigurationByDoctorIdService,

  addDoctorAvailabilityService,
  updateDoctorAvailabilityService,
  deleteDoctorAvailabilityService,
  getAllDoctorAvailabilityService,
  getDoctorAvailabilityByIdService,
  getDoctorAvailabilityByDoctorIdService,
  getDoctorAvailabilityByDayService,
  toggleDoctorAvailabilityStatusService,
} from "../services/doctors.service.js";

/**
 * ✅ GET ALL DOCTORS
 */
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await getAllDoctorsService();
    res.status(200).json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

/**
 * ✅ GET ALL DOCTORS WITH LIMITED FIELDS (for dropdowns, etc.)
 */
export const getAllDoctorsLimited = async (req, res) => {
  try {
    const doctors = await getAllDoctorsLimitedService();
    res.status(200).json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

/**
 * ✅ GET DOCTOR BY ID
 */
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await getDoctorByIdService(id);

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ CREATE DOCTOR
 */
export const createDoctor = async (req, res) => {
  try {
    // Extract authUserId from authenticated user
    const authUserId = req.user?.id || req.user?._id;

    if (!authUserId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: authUserId not found in token",
      });
    }

    // Add authUserId to doctorData from request
    const payload = {
      ...req.body,
      doctorData: {
        ...req.body.doctorData,
        authUserId,
      },
    };

    const result = await createDoctorService(payload);

    res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      data: result,
    });
  } catch (error) {
    const statusCode =
      error.message.includes("required") || error.message.includes("authUserId")
        ? 400
        : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ UPDATE DOCTOR
 */
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDoctor = await updateDoctorService(id, req.body);
    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ DELETE DOCTOR
 */
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteDoctorService(id);

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.message === "Doctor not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Add Doctor Leave
 */
export const addDoctorLeave = async (req, res) => {
  try {
    const result = await addDoctorLeaveService(req.body);

    res.status(201).json({
      success: true,
      message: "Doctor leave added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update Doctor Leave
 */
export const updateDoctorLeave = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await updateDoctorLeaveService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Doctor leave updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.message === "Doctor leave not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Doctor Leave
 */
export const deleteDoctorLeave = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteDoctorLeaveService(id);

    res.status(200).json({
      success: true,
      message: "Doctor leave deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.message === "Doctor leave not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Doctor Leaves
 */
export const getAllDoctorLeaves = async (req, res) => {
  try {
    const result = await getAllDoctorLeavesService();

    res.status(200).json({
      success: true,
      message: "Doctor leave list fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Doctor Leaves By Doctor Id
 */
export const getDoctorLeavesByDoctorId = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const result = await getDoctorLeavesByDoctorIdService(doctorId);

    res.status(200).json({
      success: true,
      message: "Doctor leave list fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Single Doctor Leave By Id
 */
export const getDoctorLeaveById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getDoctorLeaveByIdService(id);

    res.status(200).json({
      success: true,
      message: "Doctor leave fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.message === "Doctor leave not found" ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};


/* -------------------------------------------------------------------------- */
/*                        Add Doctor Education Controller                      */
/* -------------------------------------------------------------------------- */

export const addDoctorEducation = async (req, res) => {
  try {
    const result = await addDoctorEducationService(req.body);

    res.status(201).json({
      success: true,
      message: "Doctor education added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                      Update Doctor Education Controller                     */
/* -------------------------------------------------------------------------- */

export const updateDoctorEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await updateDoctorEducationService(
      id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Doctor education updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message === "Doctor education not found" ? 404 : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                      Delete Doctor Education Controller                     */
/* -------------------------------------------------------------------------- */

export const deleteDoctorEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteDoctorEducationService(id);

    res.status(200).json({
      success: true,
      message: "Doctor education deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message === "Doctor education not found" ? 404 : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                    Get All Doctor Education Controller                      */
/* -------------------------------------------------------------------------- */

export const getAllDoctorEducation = async (req, res) => {
  try {
    const result = await getAllDoctorEducationService();

    res.status(200).json({
      success: true,
      message: "Doctor education list fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Get Doctor Education By Id Controller                      */
/* -------------------------------------------------------------------------- */

export const getDoctorEducationById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getDoctorEducationByIdService(id);

    res.status(200).json({
      success: true,
      message: "Doctor education fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message === "Doctor education not found" ? 404 : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*             Get Doctor Education By Doctor Id Controller                    */
/* -------------------------------------------------------------------------- */

export const getDoctorEducationByDoctorId = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const result = await getDoctorEducationByDoctorIdService(
      doctorId
    );

    res.status(200).json({
      success: true,
      message: "Doctor education list fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* -------------------------------------------------------------------------- */
/*                  Add Doctor Work Experience Controller                      */
/* -------------------------------------------------------------------------- */

export const addDoctorWorkExperience = async (
  req,
  res
) => {
  try {
    const result =
      await addDoctorWorkExperienceService(req.body);

    res.status(201).json({
      success: true,
      message:
        "Doctor work experience added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                Update Doctor Work Experience Controller                     */
/* -------------------------------------------------------------------------- */

export const updateDoctorWorkExperience = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await updateDoctorWorkExperienceService(
        id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Doctor work experience updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor work experience not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                Delete Doctor Work Experience Controller                     */
/* -------------------------------------------------------------------------- */

export const deleteDoctorWorkExperience = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await deleteDoctorWorkExperienceService(id);

    res.status(200).json({
      success: true,
      message:
        "Doctor work experience deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor work experience not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*              Get All Doctor Work Experience Controller                      */
/* -------------------------------------------------------------------------- */

export const getAllDoctorWorkExperience = async (
  req,
  res
) => {
  try {
    const result =
      await getAllDoctorWorkExperienceService();

    res.status(200).json({
      success: true,
      message:
        "Doctor work experience list fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*            Get Doctor Work Experience By Id Controller                      */
/* -------------------------------------------------------------------------- */

export const getDoctorWorkExperienceById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await getDoctorWorkExperienceByIdService(id);

    res.status(200).json({
      success: true,
      message:
        "Doctor work experience fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor work experience not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*       Get Doctor Work Experience By Doctor Id Controller                    */
/* -------------------------------------------------------------------------- */

export const getDoctorWorkExperienceByDoctorId =
  async (req, res) => {
    try {
      const { doctorId } = req.params;

      const result =
        await getDoctorWorkExperienceByDoctorIdService(
          doctorId
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor work experience list fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


/* -------------------------------------------------------------------------- */
/*                    Add Doctor Certification Controller                      */
/* -------------------------------------------------------------------------- */

export const addDoctorCertification = async (
  req,
  res
) => {
  try {
    const result =
      await addDoctorCertificationService(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "Doctor certification added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Certification Controller                     */
/* -------------------------------------------------------------------------- */

export const updateDoctorCertification = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await updateDoctorCertificationService(
        id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Doctor certification updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor certification not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Certification Controller                     */
/* -------------------------------------------------------------------------- */

export const deleteDoctorCertification =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await deleteDoctorCertificationService(
          id
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor certification deleted successfully",
        data: result,
      });
    } catch (error) {
      res.status(
        error.message ===
          "Doctor certification not found"
          ? 404
          : 500
      ).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*                Get All Doctor Certifications Controller                     */
/* -------------------------------------------------------------------------- */

export const getAllDoctorCertification =
  async (req, res) => {
    try {
      const result =
        await getAllDoctorCertificationService();

      res.status(200).json({
        success: true,
        message:
          "Doctor certifications fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Doctor Certification By Id Controller                     */
/* -------------------------------------------------------------------------- */

export const getDoctorCertificationById =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await getDoctorCertificationByIdService(
          id
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor certification fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(
        error.message ===
          "Doctor certification not found"
          ? 404
          : 500
      ).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*         Get Doctor Certifications By Doctor Id Controller                   */
/* -------------------------------------------------------------------------- */

export const getDoctorCertificationByDoctorId =
  async (req, res) => {
    try {
      const { doctorId } = req.params;

      const result =
        await getDoctorCertificationByDoctorIdService(
          doctorId
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor certifications fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



/* -------------------------------------------------------------------------- */
/*                    Add Doctor Publicaion Controller                      */
/* -------------------------------------------------------------------------- */

export const addDoctorPublication = async (
  req,
  res
) => {
  try {
    const result =
      await addDoctorPublicationService(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "Doctor Publicaion added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Publicaion Controller                     */
/* -------------------------------------------------------------------------- */

export const updateDoctorPublication = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await updateDoctorPublicationService(
        id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Doctor Publicaion updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor Publicaion not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Publicaion Controller                     */
/* -------------------------------------------------------------------------- */

export const deleteDoctorPublication =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await deleteDoctorPublicationService(
          id
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor Publicaion deleted successfully",
        data: result,
      });
    } catch (error) {
      res.status(
        error.message ===
          "Doctor Publicaion not found"
          ? 404
          : 500
      ).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*                Get All Doctor Publicaions Controller                     */
/* -------------------------------------------------------------------------- */

export const getAllDoctorPublication =
  async (req, res) => {
    try {
      const result =
        await getAllDoctorPublicationService();

      res.status(200).json({
        success: true,
        message:
          "Doctor Publicaions fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*               Get Doctor Publicaion By Id Controller                     */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await getDoctorPublicationByIdService(
        id
      );

    res.status(200).json({
      success: true,
      message:
        "Doctor Publicaion fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(
      error.message ===
        "Doctor Publicaion not found"
        ? 404
        : 500
    ).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*         Get Doctor Publicaions By Doctor Id Controller                   */
/* -------------------------------------------------------------------------- */

export const getDoctorPublicationByDoctorId =
  async (req, res) => {
    try {
      const { doctorId } = req.params;

      const result =
        await getDoctorPublicationByDoctorIdService(
          doctorId
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor Publicaions fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



export const addDoctorSlotConfiguration = async (req, res) => {
  try {
    const result = await addDoctorSlotConfigurationService(req.body);
    res.status(201).json({
      success: true,
      message: "Doctor slots added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDoctorSlotConfiguration = async (req, res) => {
  try {
    const result = await updateDoctorSlotConfigurationService(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Doctor slots updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDoctorSlotConfiguration = async (req, res) => {
  try {
    const result = await deleteDoctorSlotConfigurationService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Doctor slots deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDoctorSlotConfigurationByDoctorId = async (req, res) => {
  try {
    const result = await getDoctorSlotConfigurationByDoctorIdService(req.params.doctorId);
    res.status(200).json({
      success: true,
      message: "Doctor slots fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};







/* -------------------------------------------------------------------------- */
/*                    Add Doctor Availability Controller                       */
/* -------------------------------------------------------------------------- */

export const addDoctorAvailability = async (
  req,
  res
) => {
  try {
    const result =
      await addDoctorAvailabilityService(
        req.body
      );

    res.status(201).json({
      success: true,
      message:
        "Doctor availability added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                  Update Doctor Availability Controller                      */
/* -------------------------------------------------------------------------- */

export const updateDoctorAvailability =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await updateDoctorAvailabilityService(
          id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor availability updated successfully",
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

/* -------------------------------------------------------------------------- */
/*                  Delete Doctor Availability Controller                      */
/* -------------------------------------------------------------------------- */

export const deleteDoctorAvailability =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await deleteDoctorAvailabilityService(
          id
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor availability deleted successfully",
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

/* -------------------------------------------------------------------------- */
/*                Get All Doctor Availability Controller                       */
/* -------------------------------------------------------------------------- */

export const getAllDoctorAvailability =
  async (req, res) => {
    try {
      const result =
        await getAllDoctorAvailabilityService();

      res.status(200).json({
        success: true,
        message:
          "Doctor availability list fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*              Get Doctor Availability By Id Controller                       */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityById =
  async (req, res) => {
    try {
      const { id } = req.params;

      const result =
        await getDoctorAvailabilityByIdService(
          id
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

/* -------------------------------------------------------------------------- */
/*         Get Doctor Availability By Doctor Id Controller                     */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityByDoctorId =
  async (req, res) => {
    try {
      const { doctorId } = req.params;

      const result =
        await getDoctorAvailabilityByDoctorIdService(
          doctorId
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor availability list fetched successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*          Get Doctor Availability By Day Controller                          */
/* -------------------------------------------------------------------------- */

export const getDoctorAvailabilityByDay =
  async (req, res) => {
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
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* -------------------------------------------------------------------------- */
/*          Toggle Doctor Availability Status Controller                       */
/* -------------------------------------------------------------------------- */

export const toggleDoctorAvailabilityStatus =
  async (req, res) => {
    try {
      const { id } = req.params;
      const { isAvailable } = req.body;

      const result =
        await toggleDoctorAvailabilityStatusService(
          id,
          isAvailable
        );

      res.status(200).json({
        success: true,
        message:
          "Doctor availability status updated successfully",
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