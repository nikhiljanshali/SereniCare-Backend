import SurgeryModel from "../models/surgery.model.js";

export const create_surgery = async (surgeryData) => {
    const surgery =
        await SurgeryModel.create(surgeryData);
    return surgery;
};

export const get_all_surgery = async () => {
    const surgerys = await SurgeryModel.find();
    return surgerys;
};

export const get_surgery_by_id = async (id) => {
    const surgery = await SurgeryModel.findById(id);
    return surgery;
};

export const update_surgery = async (id, surgeryData) => {
    const surgery = await SurgeryModel.findByIdAndUpdate(
        id,
        surgeryData,
        {
            returnDocument: 'after',
        },
    );
    return surgery;
};

export const delete_surgery = async (id) => {
    const surgery = await SurgeryModel.findByIdAndDelete(id);
    return surgery;
};

