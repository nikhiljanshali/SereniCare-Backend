import {
  create_primaryCondition,
  get_all_primaryCondition,
  get_primaryCondition_by_id,
  update_primaryCondition,
  delete_primaryCondition,
} from "./../services/primarycondition.service.js";

export const create_primaryCondition_controller = async (req, res) => {
  try {
    const result = await create_primaryCondition(req.body);

    res.status(201).json({
      message: "Primary Condition created successfully",
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

export const get_all_primaryCondition_controller = async (req, res) => {
  try {
    const clinicTypes = await get_all_primaryCondition();
    res.status(200).json({
      message: "Primary Condition fetched successfully",
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

export const get_primaryCondition_by_id_controller = async (req, res) => {
  try {
    const result = await get_primaryCondition_by_id(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Primary Condition not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Primary Condition fetched successfully",
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

export const update_primaryCondition_controller = async (req, res) => {
  try {
    const result = await update_primaryCondition(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Primary Condition not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Primary Condition updated successfully",
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

export const delete_primaryCondition_controller = async (req, res) => {
  try {
    const result = await delete_primaryCondition(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Primary Condition not found",
        status: false,
      });
    }
    res.status(200).json({
      message: "Primary Condition deleted successfully",
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
  create_primaryCondition_controller,
  get_all_primaryCondition_controller,
  get_primaryCondition_by_id_controller,
  update_primaryCondition_controller,
  delete_primaryCondition_controller,
};
