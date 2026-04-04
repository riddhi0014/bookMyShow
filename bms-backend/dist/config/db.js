"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose_1.default.connect(config_1.config.databaseUrl);
        console.log(`Connected to MongoDB successfully. DB Host=${connectionInstance.connection.host}`);
    }
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit process with failure
    }
};
exports.default = connectDB;
