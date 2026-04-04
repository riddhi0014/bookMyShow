"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheatres = exports.createTheatre = void 0;
const TheatreService = __importStar(require("./theatre.service"));
//1. Create a theatre
const createTheatre = async (req, res, next) => {
    try {
        const theatre = await TheatreService.createTheatre(req.body);
        res.status(201).json({ theatre });
    }
    catch (error) {
        throw new Error('Failed to create theatre');
    }
};
exports.createTheatre = createTheatre;
//2.merged controller for fetching all theatres and fetching theatre by city
const getTheatres = async (req, res, next) => {
    try {
        const city = req.query.city;
        let theatres;
        if (city) {
            theatres = await TheatreService.getTheatresByCity(city);
        }
        else {
            theatres = await TheatreService.getAllTheatres();
        }
        res.status(200).json({ theatres });
    }
    catch (error) {
        throw new Error('Failed to fetch theatres');
    }
};
exports.getTheatres = getTheatres;
