import dotenv from "dotenv";

// Decide which env file to load based on how the app was started
const envMode = process.env.NODE_ENV?.trim() || "development";
const envFile = envMode === "production" ? ".env.production" : ".env.local";

dotenv.config({ path: envFile });

export const NODE_ENV = process.env.NODE_ENV || envMode;
export const PORT = Number(process.env.PORT) || 5000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
export const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "gmail";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";

console.log(MONGODB_URI)


const config = {
    NODE_ENV,
    PORT,
    MONGODB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    EMAIL_SERVICE,
    EMAIL_USER,
    EMAIL_PASSWORD,
};

export default config;