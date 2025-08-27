import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import zodErrorHandler from "../errors/zodErrorHandler";

import AppError from "../errors/AppError";
import config from "../config";
import mongoose from "mongoose";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next,
) => {
  let message = err.message || "Something went wrong!";
  let statusCode = err.statusCode || 500;
  let error = err || null;
  let stack = err.stack || null;

  if (err instanceof ZodError) {
    const result = zodErrorHandler(err);
    statusCode = result.statusCode;
    message = result.message;
    error = result.error;
  } else if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "Invalid ID format";
    error = {
      path: err.path,
      value: err.value,
      kind: err.kind,
    };
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    error = null;
  } else if (err instanceof Error) {
    if (err.message) {
      message = err.message;
    } else {
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
    stack: config.NODE_ENV === "development" ? stack : null,
  });
};
