import BloodGroupModel from "../models/bloodgroup.model.js";

export const create_bloodGroup = async (bloodGroupData) => {
  const bloodGroup = await BloodGroupModel.create(bloodGroupData);
  return bloodGroup;
};

export const get_all_bloodGroup = async () => {
  const bloodGroups = await BloodGroupModel.find();
  return bloodGroups;
};

export const get_bloodGroup_by_id = async (id) => {
  const bloodGroup = await BloodGroupModel.findById(id);
  return bloodGroup;
};

export const update_bloodGroup = async (id, bloodGroupData) => {
  const bloodGroup = await BloodGroupModel.findByIdAndUpdate(
    id,
    bloodGroupData,
    {
      new: true,
    },
  );
  return bloodGroup;
};

export const delete_bloodGroup = async (id) => {
  const bloodGroup = await BloodGroupModel.findByIdAndDelete(id);
  return bloodGroup;
};
