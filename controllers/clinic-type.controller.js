import {
  create_clinic_type,
  getAll_clinic_types,
  get_clinic_type_by_id,
  update_clinic_type,
  delete_clinic_type,
} from "./../services/clinic-type.service.js";

export const create_clinic_type_controller = async (req, res) => {
  try {
    const result = await create_clinic_type(req.body);

    res.status(201).json({
      message: "Clinic Type created successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

export const get_all_clinic_type_controller = async (req, res) => {
  try {
    const clinicTypes = await getAll_clinic_types();
    res.status(200).json({
      message: "Clinic types fetched successfully",
      status: true,
      data: clinicTypes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const get_clinic_type_by_id_controller = async (req, res) => {
  try {
    const result = await get_clinic_type_by_id(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Clinic Type not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic Type fetched successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const update_clinic_type_controller = async (req, res) => {
  try {
    const result = await update_clinic_type(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Clinic Type not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Clinic Type updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

export const delete_clinic_type_controller = async (req, res) => {
  try {
    const result = await delete_clinic_type(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Clinic Type not found",
        status: false,
      });
    }
    res.status(200).json({
      message: "Clinic Type deleted successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export default {
  create_clinic_type_controller,
  get_all_clinic_type_controller,
  get_clinic_type_by_id_controller,
  update_clinic_type_controller,
  delete_clinic_type_controller,
};
