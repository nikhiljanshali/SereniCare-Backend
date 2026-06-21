import DiseasesModel from "../models/diseases.model.js";

export const create_diseases = async (diseasesData) => {
    const diseases =
        await DiseasesModel.create(diseasesData);
    return diseases;
};

export const get_all_diseases = async () => {
    const diseasess = await DiseasesModel.find();
    return diseasess;
};

export const get_diseases_by_id = async (id) => {
    const diseases = await DiseasesModel.findById(id);
    return diseases;
};

export const update_diseases = async (id, diseasesData) => {
    const diseases = await DiseasesModel.findByIdAndUpdate(
        id,
        diseasesData,
        {
            returnDocument: 'after',
        },
    );
    return diseases;
};

export const delete_diseases = async (id) => {
    const diseases = await DiseasesModel.findByIdAndDelete(id);
    return diseases;
};

