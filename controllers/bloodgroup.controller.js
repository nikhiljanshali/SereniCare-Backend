import {
  create_bloodGroup,
  get_all_bloodGroup,
  get_bloodGroup_by_id,
  update_bloodGroup,
  delete_bloodGroup,
} from "./../services/bloodgroup.service.js";

export const create_bloodGroup_controller = async (req, res) => {
  try {
    const result = await create_bloodGroup(req.body);

    res.status(201).json({
      message: "Blood Group created successfully",
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

export const get_all_bloodGroup_controller = async (req, res) => {
  try {
    const clinicTypes = await get_all_bloodGroup();
    res.status(200).json({
      message: "Blood Group fetched successfully",
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

export const get_bloodGroup_by_id_controller = async (req, res) => {
  try {
    const result = await get_bloodGroup_by_id(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Blood Group not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Blood Group fetched successfully",
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

export const update_bloodGroup_controller = async (req, res) => {
  try {
    const result = await update_bloodGroup(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Blood Group not found",
        status: false,
      });
    }

    res.status(200).json({
      message: "Blood Group updated successfully",
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

export const delete_bloodGroup_controller = async (req, res) => {
  try {
    const result = await delete_bloodGroup(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Blood Group not found",
        status: false,
      });
    }
    res.status(200).json({
      message: "Blood Group deleted successfully",
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
  create_bloodGroup_controller,
  get_all_bloodGroup_controller,
  get_bloodGroup_by_id_controller,
  update_bloodGroup_controller,
  delete_bloodGroup_controller,
};
