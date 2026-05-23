import express from "express";
import {
  create_bloodGroup_controller,
  get_all_bloodGroup_controller,
  get_bloodGroup_by_id_controller,
  update_bloodGroup_controller,
  delete_bloodGroup_controller,
} from "../controllers/bloodgroup.controller.js";

const bloodGroupRouter = express.Router();

bloodGroupRouter.get("/getAllBloodGroup", get_all_bloodGroup_controller);
bloodGroupRouter.get("/getBloodGroupId/:id", get_bloodGroup_by_id_controller);
bloodGroupRouter.post("/createBloodGroup", create_bloodGroup_controller);
bloodGroupRouter.put("/updateBloodGroup/:id", update_bloodGroup_controller);
bloodGroupRouter.delete("/deleteBloodGroup/:id", delete_bloodGroup_controller);

export default bloodGroupRouter;
