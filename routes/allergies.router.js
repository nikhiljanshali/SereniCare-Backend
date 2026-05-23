import express from "express";
import {
  create_allergies_controller,
  get_all_allergies_controller,
  get_allergies_by_id_controller,
  update_allergies_controller,
  delete_allergies_controller,
} from "../controllers/allergies.controller.js";

const allergiesRouter = express.Router();

allergiesRouter.get("/getAllAllergies", get_all_allergies_controller);
allergiesRouter.get("/getAllergiesById/:id", get_allergies_by_id_controller);
allergiesRouter.post("/createAllergies", create_allergies_controller);
allergiesRouter.put("/updateAllergies/:id", update_allergies_controller);
allergiesRouter.delete("/deleteAllergies/:id", delete_allergies_controller);

export default allergiesRouter;
