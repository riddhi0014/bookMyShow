"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShowById = exports.getShowsByMovieDateLocation = exports.createShow = void 0;
const index_1 = require("../../utils/index");
const show_model_1 = require("./show.model");
const mongoose_1 = require("mongoose");
//1. Create a show
const createShow = async (showData) => {
    const seatLayout = (0, index_1.generateSeatLayout)();
    const newShow = await show_model_1.Show.create({ ...showData, seatLayout });
    return;
};
exports.createShow = createShow;
//2. get shows by movie date and location
const getShowsByMovieDateLocation = async (movieId, date, location) => {
    const query = {
        movie: new mongoose_1.Types.ObjectId(movieId),
        location: { $regex: new RegExp(location, "i") },
    };
    if (date) {
        query.date = date;
    }
    const shows = await show_model_1.Show.find(query)
        .populate("movie theatre")
        .sort({ startTime: 1 });
    const groupedShows = (0, index_1.groupShowsByTheatreAndMovie)(shows);
    return groupedShows;
};
exports.getShowsByMovieDateLocation = getShowsByMovieDateLocation;
//3. get show by id
const getShowById = async (showId) => {
    return await show_model_1.Show.findById(showId).populate("movie theatre");
};
exports.getShowById = getShowById;
//4.update seat status
