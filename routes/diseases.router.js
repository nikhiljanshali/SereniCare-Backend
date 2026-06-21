import express from "express";
import {
    create_diseases_controller,
    get_all_diseases_controller,
    get_diseases_by_id_controller,
    update_diseases_controller,
    delete_diseases_controller,
} from "../controllers/diseases.controller.js";

const diseasesRouter = express.Router();

diseasesRouter.get("/getAlldiseases", get_all_diseases_controller);
diseasesRouter.get("/getdiseasesById/:id", get_diseases_by_id_controller);
diseasesRouter.post("/creatediseases", create_diseases_controller);
diseasesRouter.put("/updatediseases/:id", update_diseases_controller);
diseasesRouter.delete("/deletediseases/:id", delete_diseases_controller);

export default diseasesRouter;
