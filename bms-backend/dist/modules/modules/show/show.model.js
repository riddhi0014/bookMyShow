"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const showSchema = new mongoose_1.default.Schema({
    movie: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Movie", required: true },
    theatre: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Theatre", required: true },
    location: { type: String, required: true },
    format: { type: String, enum: ["2D", "3D", "IMAX", "PVR PXL"], required: true },
    audioType: { type: String, default: "Dolby Atmos" },
    startTime: { type: String, required: true },
    date: { type: String, required: true },
    priceMap: { type: Map, of: Number, required: true, default: {} },
    seatLayout: [
        {
            row: { type: String, required: true },
            seats: [
                {
                    seatNumber: { type: String, required: true },
                    status: { type: String, enum: ["available", "booked", "blocked"], required: true }
                }
            ]
        }
    ]
}, { timestamps: true });
exports.Show = mongoose_1.default.model("Show", showSchema);
