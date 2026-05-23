import express from "express";
import {
    create_clinic_type_controller,
    get_all_clinic_type_controller,
    get_clinic_type_by_id_controller,
    update_clinic_type_controller,
    delete_clinic_type_controller,
} from "../controllers/clinic-type.controller.js";


const clinicTypeRouter = express.Router();

clinicTypeRouter.get("/getAllClinicTypes", get_all_clinic_type_controller);
clinicTypeRouter.get("/getClinicTypeById/:id", get_clinic_type_by_id_controller);
clinicTypeRouter.post("/createClinicType", create_clinic_type_controller);
clinicTypeRouter.put("/updateClinicType/:id", update_clinic_type_controller);
clinicTypeRouter.delete("/deleteClinicType/:id", delete_clinic_type_controller);

export default clinicTypeRouter;