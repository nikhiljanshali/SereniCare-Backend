import mongoose from "mongoose";

import roleSchema from "../schemas/role.schema.js";

const RoleModel = mongoose.model("roles", roleSchema);

export default RoleModel;
