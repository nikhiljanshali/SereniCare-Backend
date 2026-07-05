import AllergiesModel from "../models/allergies.model.js";

export const create_allergies = async (allergiesData) => {
  try {
    // Check if data is array
    if (Array.isArray(allergiesData)) {
      const allergies = await AllergiesModel.insertMany(allergiesData);
      return allergies;
    }
    // Single object create
    const allergy = await AllergiesModel.create(allergiesData);
    return allergy;
  } catch (error) {
    throw new Error(error.message);
  }
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

