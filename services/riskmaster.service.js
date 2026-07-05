import RiskMasterModel from "../models/riskmaster.model.js";

export const create_riskmaster = async (riskmasterData) => {
    try {
        // Check if data is array
        if (Array.isArray(riskmasterData)) {
            const riskmaster = await RiskMasterModel.insertMany(riskmasterData);
            return riskmaster;
        }
        // Single object create
        const allergy = await RiskMasterModel.create(riskmasterData);
        return allergy;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const get_all_riskmaster = async () => {
    const riskmasters = await RiskMasterModel.find();
    return riskmasters;
};

export const get_riskmaster_by_id = async (id) => {
    const riskmaster = await RiskMasterModel.findById(id);
    return riskmaster;
};

export const update_riskmaster = async (id, riskmasterData) => {
    const riskmaster = await RiskMasterModel.findByIdAndUpdate(
        id,
        riskmasterData,
        {
            returnDocument: 'after',
        },
    );
    return riskmaster;
};

export const delete_riskmaster = async (id) => {
    const riskmaster = await RiskMasterModel.findByIdAndDelete(id);
    return riskmaster;
};

