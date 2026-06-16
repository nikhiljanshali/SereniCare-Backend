export const NODE_ENV = "development";
export const PORT = Number(process.env.PORT) || 5000;
export const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/SereniCare";
export const JWT_SECRET = process.env.JWT_SECRET || "ShreeHari#486248";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
export const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "gmail";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
