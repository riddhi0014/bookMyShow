"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_route_1 = __importDefault(require("../modules/modules/movie/movie.route"));
const theatre_route_1 = __importDefault(require("../modules/modules/theatre/theatre.route"));
const router = express_1.default.Router();
router.use('/movies', movie_route_1.default);
router.use('/theatres', theatre_route_1.default);
exports.default = router;
