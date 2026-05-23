import express from "express";
import {
    create_speciality_controller,
    get_all_speciality_controller,
    get_speciality_by_id_controller,
    update_speciality_controller,
    delete_speciality_controller,
} from "../controllers/speciality.controller.js";


const specialityRouter = express.Router();

specialityRouter.get("/getAllSpeciality", get_all_speciality_controller);
specialityRouter.get("/getSpecialityById/:id", get_speciality_by_id_controller);
specialityRouter.post("/createSpeciality", create_speciality_controller);
specialityRouter.put("/updateSpeciality/:id", update_speciality_controller);
specialityRouter.delete("/deleteSpeciality/:id", delete_speciality_controller);

export default specialityRouter;