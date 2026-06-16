import SpecialityModel from "../models/speciality.model.js";

export const getAllSpecialities = async () => {
    const specialities = await SpecialityModel.find();
    return specialities;
};

export const getSpecialityById = async (id) => {
    const speciality = await SpecialityModel.findById(id);
    return speciality;
};

export const createSpeciality = async (specialityData) => {
    const speciality = await SpecialityModel.create(specialityData);
    return speciality;
};

export const updateSpeciality = async (id, specialityData) => {
    const speciality = await SpecialityModel.findByIdAndUpdate(
        id,
        specialityData,
        {
            returnDocument: 'after',
        }
    );
    return speciality;
};


export const deleteSpeciality = async (id) => {
    const speciality = await SpecialityModel.findByIdAndDelete(id);
    return speciality;
};
