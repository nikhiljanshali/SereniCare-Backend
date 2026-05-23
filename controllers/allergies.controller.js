import {
  create_allergies,
  get_all_allergies,
  get_allergies_by_id,
  update_allergies,
  delete_allergies,
} from "./../services/allergies.service.js";

export const create_allergies_controller = async (req, res) => {
  try {
    const result = await create_allergies(req.body);

    res.status(201).json({
      message: "Allergies created successfully",
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

export const get_all_allergies_controller = async (req, res) => {
  try {
    const clinicTypes = await get_all_allergies();
    res.status(200).json({
      message: "Allergies fetched successfully",
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

export const get_allergies_by_id_controller = async (req, res) => {
  try {
    const result = await get_allergies_by_id(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Allergies not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Allergies fetched successfully",
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

export const update_allergies_controller = async (req, res) => {
  try {
    const result = await update_allergies(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Allergies not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Allergies updated successfully",
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

export const delete_allergies_controller = async (req, res) => {
  try {
    const result = await delete_allergies(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Allergies not found",
        status: false,
      });
    }
    res.status(200).json({
      message: "Allergies deleted successfully",
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
  create_allergies_controller,
  get_all_allergies_controller,
  get_allergies_by_id_controller,
  update_allergies_controller,
  delete_allergies_controller,
};
