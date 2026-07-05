import {
    create_riskmaster,
    get_all_riskmaster,
    get_riskmaster_by_id,
    update_riskmaster,
    delete_riskmaster,
} from "./../services/riskmaster.service.js";

export const create_riskmaster_controller = async (req, res) => {
    try {
        const result = await create_riskmaster(req.body);

        res.status(201).json({
            message: "riskmaster created successfully",
            status: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: false,
        });
    }
};

export const get_all_riskmaster_controller = async (req, res) => {
    try {
        const clinicTypes = await get_all_riskmaster();
        res.status(200).json({
            message: "riskmaster fetched successfully",
            status: true,
            data: clinicTypes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
};

export const get_riskmaster_by_id_controller = async (req, res) => {
    try {
        const result = await get_riskmaster_by_id(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "riskmaster not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "riskmaster fetched successfully",
            status: true,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
};

export const update_riskmaster_controller = async (req, res) => {
    try {
        const result = await update_riskmaster(req.params.id, req.body);

        if (!result) {
            return res.status(404).json({
                message: "riskmaster not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "riskmaster updated successfully",
            status: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: false,
        });
    }
};

export const delete_riskmaster_controller = async (req, res) => {
    try {
        const result = await delete_riskmaster(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "riskmaster not found",
                status: false,
            });
        }
        res.status(200).json({
            message: "riskmaster deleted successfully",
            status: true,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
};

export default {
    create_riskmaster_controller,
    get_all_riskmaster_controller,
    get_riskmaster_by_id_controller,
    update_riskmaster_controller,
    delete_riskmaster_controller,
};
