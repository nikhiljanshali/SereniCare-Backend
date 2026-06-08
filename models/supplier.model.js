import mongoose from "mongoose";
import supplierSchema from "../schemas/supplier.schema.js";

export const SupplierModel = mongoose.model("supplier", supplierSchema);
export default SupplierModel;
