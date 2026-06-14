import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envMode = process.env.NODE_ENV?.trim() || "development";
const baseEnvPath = path.resolve(__dirname, ".env");
const modeEnvPath = path.resolve(__dirname, `.env.${envMode}`);

dotenv.config({ path: baseEnvPath });

dotenv.config({ path: modeEnvPath, override: true });

export const PORT = Number(process.env.PORT) || 5000;
export const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || "";
export const NODE_ENV = envMode;
export const JWT_SECRET = process.env.JWT_SECRET || "ShreeHari#486248";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
export const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "gmail";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
