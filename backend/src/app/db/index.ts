import mongoose from "mongoose";
import config from "../config";
import logger from "../utils/logger";

export async function dbConnect() {
  await mongoose
    .connect(config.DB_URL)
    .then(() => {
      logger.info("Database Connected");
    })
    .catch(() => {
      logger.error("Database connection problem!");
    });
}
