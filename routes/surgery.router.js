import express from "express";
import {
    create_surgery_controller,
    get_all_surgery_controller,
    get_surgery_by_id_controller,
    update_surgery_controller,
    delete_surgery_controller,
} from "../controllers/surgery.controller.js";

const surgeryRouter = express.Router();

surgeryRouter.get("/getAllsurgery", get_all_surgery_controller);
surgeryRouter.get("/getsurgeryById/:id", get_surgery_by_id_controller);
surgeryRouter.post("/createsurgery", create_surgery_controller);
surgeryRouter.put("/updatesurgery/:id", update_surgery_controller);
surgeryRouter.delete("/deletesurgery/:id", delete_surgery_controller);

export default surgeryRouter;
