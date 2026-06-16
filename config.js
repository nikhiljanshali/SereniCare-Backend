import * as productionConfig from "./config.production.js";
import * as localConfig from "./config.local.js";

const envMode = process.env.NODE_ENV?.trim() || "development";
const config = envMode === "development" ? localConfig : productionConfig;

export default config;

export const PORT = config.PORT;
export const MONGODB_URI = config.MONGODB_URI;
export const NODE_ENV = config.NODE_ENV;
export const JWT_SECRET = config.JWT_SECRET;
export const JWT_EXPIRES_IN = config.JWT_EXPIRES_IN;
export const EMAIL_SERVICE = config.EMAIL_SERVICE;
export const EMAIL_USER = config.EMAIL_USER;
export const EMAIL_PASSWORD = config.EMAIL_PASSWORD;
