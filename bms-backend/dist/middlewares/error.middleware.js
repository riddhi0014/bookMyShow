"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    // default response
    let statusCode = 500;
    let message = "Internal Server Error";
    let errors = [];
    // Zod error handling
    if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = "Validation Error";
        errors = err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));
    }
    else if (err instanceof Error) {
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};
exports.globalErrorHandler = globalErrorHandler;
