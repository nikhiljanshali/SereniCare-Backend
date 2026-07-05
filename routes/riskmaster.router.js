import express from "express";
import {
    create_riskmaster_controller,
    get_all_riskmaster_controller,
    get_riskmaster_by_id_controller,
    update_riskmaster_controller,
    delete_riskmaster_controller,
} from "../controllers/riskmaster.controller.js";

const riskMasterRouter = express.Router();

riskMasterRouter.get("/getAllRiskMaster", get_all_riskmaster_controller);
riskMasterRouter.get("/getRiskMasterById/:id", get_riskmaster_by_id_controller);
riskMasterRouter.post("/createRiskMaster", create_riskmaster_controller);
riskMasterRouter.put("/updateRiskMaster/:id", update_riskmaster_controller);
riskMasterRouter.delete("/deleteRiskMaster/:id", delete_riskmaster_controller);

export default riskMasterRouter;
