"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const logger_1 = __importDefault(require("./app/utils/logger"));
const notFound_1 = require("./app/middlewares/notFound");
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const config_1 = __importDefault(require("./app/config"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)({
    origin: config_1.default.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// request logger
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.url}`);
    next();
});
// routes
app.get("/", (req, res) => {
    res
        .status(200)
        .send('<div style="height:80vh; width:100vw; display:flex; justify-content:center;align-items:center;font-size:4rem;font-style: oblique;font-weight: bold;font-family:system-ui;color:purple;">Blogger API Server is Running...</div>');
});
app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "Server Health is Ok",
    });
});
app.use("/api", routes_1.default);
// error handlers
app.use(notFound_1.notfound);
app.use(globalErrorHandler_1.globalErrorHandler);
// // connect database
// dbConnect().catch((err) => {
//   console.error("Database connection failed:", err);
// });
exports.default = app;
