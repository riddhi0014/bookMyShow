"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheatresByCity = exports.getTheatreById = exports.getAllTheatres = exports.createTheatre = void 0;
const theatre_model_1 = require("./theatre.model");
//1. Create a theatre
const createTheatre = async (theatreData) => {
    try {
        const theatre = await theatre_model_1.Theatre.create(theatreData);
        return theatre;
    }
    catch (error) {
        throw new Error('Failed to create theatre');
    }
};
exports.createTheatre = createTheatre;
//2. Get all theatres
const getAllTheatres = async () => {
    try {
        const theatres = await theatre_model_1.Theatre.find();
        return theatres;
    }
    catch (error) {
        throw new Error('Failed to fetch theatres');
    }
};
exports.getAllTheatres = getAllTheatres;
//3. Get theatre by id
const getTheatreById = async (id) => {
    try {
        const theatre = await theatre_model_1.Theatre.findById(id);
        return theatre;
    }
    catch (error) {
        throw new Error('Failed to fetch theatre');
    }
};
exports.getTheatreById = getTheatreById;
//4. Get theatre by city 
const getTheatresByCity = async (city) => {
    try {
        const theatres = await theatre_model_1.Theatre.find({ city });
        return theatres;
    }
    catch (error) {
        throw new Error('Failed to fetch theatres');
    }
};
exports.getTheatresByCity = getTheatresByCity;
