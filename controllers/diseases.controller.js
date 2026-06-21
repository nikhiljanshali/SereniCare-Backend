import {
    create_diseases,
    get_all_diseases,
    get_diseases_by_id,
    update_diseases,
    delete_diseases,
} from "./../services/diseases.service.js";

export const create_diseases_controller = async (req, res) => {
    try {
        const result = await create_diseases(req.body);

        res.status(201).json({
            message: "diseases created successfully",
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

export const get_all_diseases_controller = async (req, res) => {
    try {
        const clinicTypes = await get_all_diseases();
        res.status(200).json({
            message: "diseases fetched successfully",
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

export const get_diseases_by_id_controller = async (req, res) => {
    try {
        const result = await get_diseases_by_id(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "diseases not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "diseases fetched successfully",
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

export const update_diseases_controller = async (req, res) => {
    try {
        const result = await update_diseases(req.params.id, req.body);

        if (!result) {
            return res.status(404).json({
                message: "diseases not found",
                status: false,
            });
        }

        res.status(200).json({
            message: "diseases updated successfully",
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

export const delete_diseases_controller = async (req, res) => {
    try {
        const result = await delete_diseases(req.params.id);

        if (!result) {
            return res.status(404).json({
                message: "diseases not found",
                status: false,
            });
        }
        res.status(200).json({
            message: "diseases deleted successfully",
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
    create_diseases_controller,
    get_all_diseases_controller,
    get_diseases_by_id_controller,
    update_diseases_controller,
    delete_diseases_controller,
};
