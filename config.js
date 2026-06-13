import dotenv from "dotenv";
import path from "path";

const envMode = process.env.NODE_ENV || "development";
const envPath = path.resolve(process.cwd(), `.env.${envMode}`);

dotenv.config({ path: envPath });

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const PORT = Number(process.env.PORT) || 5000;
export const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || "";
export const NODE_ENV = envMode;
export const JWT_SECRET = process.env.JWT_SECRET || "ShreeHari#486248";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
export const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "gmail";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
