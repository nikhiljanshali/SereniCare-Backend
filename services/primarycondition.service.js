import PrimaryConditionModel from "../models/primarycondition.model.js";

export const create_primaryCondition = async (primaryConditionData) => {
  const primaryCondition = await PrimaryConditionModel.create(primaryConditionData);
  return primaryCondition;
};

export const get_all_primaryCondition = async () => {
  const primaryConditions = await PrimaryConditionModel.find();
  return primaryConditions;
};

export const get_primaryCondition_by_id = async (id) => {
  const primaryCondition = await PrimaryConditionModel.findById(id);
  return primaryCondition;
};

export const update_primaryCondition = async (id, primaryConditionData) => {
  const primaryCondition = await PrimaryConditionModel.findByIdAndUpdate(
    id,
    primaryConditionData,
    {
      returnDocument: 'after',
    },
  );
  return primaryCondition;
};

export const delete_primaryCondition = async (id) => {
  const primaryCondition = await PrimaryConditionModel.findByIdAndDelete(id);
  return primaryCondition;
};

