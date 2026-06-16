import ClinicTypeModel from "../models/clinic-type.model.js";

export const create_clinic_type = async (clinicTypeData) => {
  const clinicType = await ClinicTypeModel.create(clinicTypeData);
  return clinicType;
};

export const getAll_clinic_types = async () => {
  const clinicTypes = await ClinicTypeModel.find();
  return clinicTypes;
};

export const get_clinic_type_by_id = async (id) => {
  const clinicType = await ClinicTypeModel.findById(id);
  return clinicType;
};

export const update_clinic_type = async (id, clinicTypeData) => {
  const clinicType = await ClinicTypeModel.findByIdAndUpdate(
    id,
    clinicTypeData,
    {
      returnDocument: 'after',
    },
  );
  return clinicType;
};

export const delete_clinic_type = async (id) => {
  const clinicType = await ClinicTypeModel.findByIdAndDelete(id);
  return clinicType;
};
