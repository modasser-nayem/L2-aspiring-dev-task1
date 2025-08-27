import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./app/utils/logger";
import { notfound } from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import config from "./app/config";
import router from "./app/routes";

const app = express();

// middlewares
app.use(
  cors({
    origin: config.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// request logger
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<div style="height:80vh; width:100vw; display:flex; justify-content:center;align-items:center;font-size:4rem;font-style: oblique;font-weight: bold;font-family:system-ui;color:purple;">Blogger API Server is Running...</div>',
    );
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Server Health is Ok",
  });
});

app.use("/api/", router);

// error handlers
app.use(notfound);
app.use(globalErrorHandler);

// // connect database
// dbConnect().catch((err) => {
//   console.error("Database connection failed:", err);
// });

export default app;
