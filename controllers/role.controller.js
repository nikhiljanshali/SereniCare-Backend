import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../services/role.service.js";

export const get_all_role_controller = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json({
      message: "Roles fetched successfully",
      status: true,
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const get_role_by_id_controller = async (req, res) => {
  try {
    const role = await getRoleById(req.params.id);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create_role_controller = async (req, res) => {
  try {
    const role = await createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update_role_controller = async (req, res) => {
  try {
    const role = await updateRole(req.params.id, req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delete_role_controller = async (req, res) => {
  try {
    const role = await deleteRole(req.params.id);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
