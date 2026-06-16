import RoleModel from "../models/role.model.js";

export const getAllRoles = async () => {
  const roles = await RoleModel.find();
  return roles;
};

export const getRoleById = async (id) => {
  const role = await RoleModel.findById(id);
  return role;
};

export const createRole = async (roleData) => {
  const role = await RoleModel.create(roleData);
  return role;
};

export const updateRole = async (id, roleData) => {
  const role = await RoleModel.findByIdAndUpdate(
    id,
    roleData,
    {
      returnDocument: 'after',
    },
  );
  return role;
};

export const deleteRole = async (id) => {
  const role = await RoleModel.findByIdAndDelete(id);
  return role;
};

