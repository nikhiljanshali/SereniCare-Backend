import {
    create_surgery,
    get_all_surgery,
    get_surgery_by_id,
    update_surgery,
    delete_surgery,
} from "./../services/surgery.service.js";

export const create_surgery_controller = async (req, res) => {
    try {
        const result = await create_surgery(req.body);

        res.status(201).json({
            message: "surgery created successfully",
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

export const get_all_surgery_controller = async (req, res) => {
    try {
        const clinicTypes = await get_all_surgery();
        res.status(200).json({
            message: "surgery fetched successfully",
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

export const get_surgery_by_id_controller = async (req, res) => {
    try {
        const result = await get_surgery_by_id(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "surgery not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "surgery fetched successfully",
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

export const update_surgery_controller = async (req, res) => {
    try {
        const result = await update_surgery(req.params.id, req.body);

        if (!result) {
            return res.status(404).json({
                message: "surgery not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "surgery updated successfully",
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

export const delete_surgery_controller = async (req, res) => {
    try {
        const result = await delete_surgery(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "surgery not found",
                status: false,
            });
        }
        res.status(200).json({
            message: "surgery deleted successfully",
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
    create_surgery_controller,
    get_all_surgery_controller,
    get_surgery_by_id_controller,
    update_surgery_controller,
    delete_surgery_controller,
};
