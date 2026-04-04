"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheatreSchema = void 0;
const zod_1 = require("zod");
exports.TheatreSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    location: zod_1.z.string().min(1, "Location is required"),
    logoUrl: zod_1.z.string().url("Logo must be a valid URL").optional(),
    city: zod_1.z.string().min(1, "City is required"),
    state: zod_1.z.string().min(1, "State is required"),
});
