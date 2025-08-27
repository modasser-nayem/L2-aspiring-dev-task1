import dotenv from "dotenv";
import path from "path";
import { requireEnv, requireNumberEnv } from "../utils/validateEnv";

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: path.join(process.cwd(), envFile) });

export default {
  NODE_ENV: requireEnv("NODE_ENV"),
  PORT: requireEnv("PORT"),
  DB_URL: requireEnv("DATABASE_URL"),
  FRONTEND_URL: requireEnv("FRONTEND_URL"),
};
