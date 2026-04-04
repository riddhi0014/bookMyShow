"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    languages: {
        type: [String],
        required: true,
    },
    certification: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    director: {
        type: String,
        required: false,
    },
    cast: {
        type: [String], //
        required: false,
    },
    duration: {
        type: String,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
    },
    format: {
        type: [String],
        required: false,
        default: ["2D"], // Default format is 2D if not specified
    },
}, {
    timestamps: true,
});
exports.MovieModel = mongoose_1.default.model('Movie', movieSchema);
