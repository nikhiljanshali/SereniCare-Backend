import express from "express";
import {
  create_primaryCondition_controller,
  get_all_primaryCondition_controller,
  get_primaryCondition_by_id_controller,
  update_primaryCondition_controller,
  delete_primaryCondition_controller,
} from "../controllers/primarycondition.controller.js";

const primaryConditionRouter = express.Router();

primaryConditionRouter.get("/getAllPrimaryCondition", get_all_primaryCondition_controller);
primaryConditionRouter.get("/getPrimaryConditionId/:id", get_primaryCondition_by_id_controller);
primaryConditionRouter.post("/createPrimaryCondition", create_primaryCondition_controller);
primaryConditionRouter.put("/updatePrimaryCondition/:id", update_primaryCondition_controller);
primaryConditionRouter.delete("/deletePrimaryCondition/:id", delete_primaryCondition_controller);

export default primaryConditionRouter;
