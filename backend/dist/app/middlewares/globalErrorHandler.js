"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const zodErrorHandler_1 = __importDefault(require("../errors/zodErrorHandler"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const config_1 = __importDefault(require("../config"));
const mongoose_1 = __importDefault(require("mongoose"));
const globalErrorHandler = (err, _req, res, _next) => {
    let message = err.message || "Something went wrong!";
    let statusCode = err.statusCode || 500;
    let error = err || null;
    let stack = err.stack || null;
    if (err instanceof zod_1.ZodError) {
        const result = (0, zodErrorHandler_1.default)(err);
        statusCode = result.statusCode;
        message = result.message;
        error = result.error;
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        statusCode = 400;
        message = "Invalid ID format";
        error = {
            path: err.path,
            value: err.value,
            kind: err.kind,
        };
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        error = null;
    }
    else if (err instanceof Error) {
        if (err.message) {
            message = err.message;
        }
        else {
            message =
                statusCode === 400
                    ? "Bad Request"
                    : statusCode === 404
                        ? "Not Found"
                        : statusCode === 401
                            ? "Unauthorized Access"
                            : statusCode === 403
                                ? "Forbidden Access"
                                : statusCode === 500
                                    ? "Server Error"
                                    : "Something went wrong";
        }
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        errors: error,
        stack: config_1.default.NODE_ENV === "development" ? stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
