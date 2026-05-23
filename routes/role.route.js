import express from "express";
import {
    create_role_controller,
    get_all_role_controller,
    get_role_by_id_controller,
    update_role_controller,
    delete_role_controller,
} from "../controllers/role.controller.js";


const roleRouter = express.Router();

roleRouter.get("/getAllrole", get_all_role_controller);
roleRouter.get("/getroleById/:id", get_role_by_id_controller);
roleRouter.post("/createrole", create_role_controller);
roleRouter.put("/updaterole/:id", update_role_controller);
roleRouter.delete("/deleterole/:id", delete_role_controller);

export default roleRouter;