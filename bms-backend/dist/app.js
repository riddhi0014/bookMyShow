"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:5173"],
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
//ALL ROUTES
const index_1 = __importDefault(require("./routes/index"));
const error_middleware_1 = require("./middlewares/error.middleware");
app.use('/api/v1', index_1.default);
// Global error handler (MUST be after all routes)
app.use(error_middleware_1.globalErrorHandler);
app.get("/", (_, res) => {
    res.json({
        message: "Welcome to BookMyScreen API",
    });
});
exports.default = app;
