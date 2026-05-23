import {
  getAllSpecialities,
  getSpecialityById,
  createSpeciality,
  updateSpeciality,
  deleteSpeciality,
} from "../services/speciality.service.js";

export const get_all_speciality_controller = async (req, res) => {
  try {
    const specialities = await getAllSpecialities();
    res.status(200).json({
      message: "Speciality fetched successfully",
      status: true,
      data: specialities,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const get_speciality_by_id_controller = async (req, res) => {
  try {
    const speciality = await getSpecialityById(req.params.id);
    res.status(200).json(speciality);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create_speciality_controller = async (req, res) => {
  try {
    const speciality = await createSpeciality(req.body);
    res.status(201).json(speciality);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update_speciality_controller = async (req, res) => {
  try {
    const speciality = await updateSpeciality(req.params.id, req.body);
    res.status(200).json(speciality);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delete_speciality_controller = async (req, res) => {
  try {
    const speciality = await deleteSpeciality(req.params.id);
    res.status(200).json(speciality);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
