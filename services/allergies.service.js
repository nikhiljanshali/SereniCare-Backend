import AllergiesModel from "../models/allergies.model.js";

export const create_allergies = async (allergiesData) => {
  const allergies =
    await AllergiesModel.create(allergiesData);
  return allergies;
};

export const get_all_allergies = async () => {
  const allergiess = await AllergiesModel.find();
  return allergiess;
};

export const get_allergies_by_id = async (id) => {
  const allergies = await AllergiesModel.findById(id);
  return allergies;
};

export const update_allergies = async (id, allergiesData) => {
  const allergies = await AllergiesModel.findByIdAndUpdate(
    id,
    allergiesData,
    {
      returnDocument: 'after',
    },
  );
  return allergies;
};

export const delete_allergies = async (id) => {
  const allergies = await AllergiesModel.findByIdAndDelete(id);
  return allergies;
};

