"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const config_1 = require("./config/config");
const startServer = async () => {
    const port = config_1.config.port;
    (0, db_1.default)()
        .then(() => {
        app_1.default.listen(port, () => {
            console.log(` Server is running at port : ${port}`);
        });
    })
        .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
};
startServer();
