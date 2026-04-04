

import { IShow } from "./show.interface";
import { generateSeatLayout,groupShowsByTheatreAndMovie} from "../../../utils/index";
import {Show} from "./show.model";
import { Types } from "mongoose";


//1. Create a show
export const createShow = async (showData: IShow) =>
{
  const seatLayout=generateSeatLayout();
  const newShow = await Show.create({...showData,seatLayout})
  return;
}

//2. get shows by movie date and location

export const getShowsByMovieDateLocation = async (
  movieId?: string,
  date?: string,
  location?: string
) => {
  const query: any = {};

  // ✅ Safe movieId handling
  if (movieId?.trim()) {
    try {
      query.movie = new Types.ObjectId(movieId.trim());
    } catch (error) {
      throw new Error("Invalid movieId");
    }
  }

  // ✅ Safe location handling (case-insensitive)
  if (location?.trim()) {
    query.location = {
      $regex: new RegExp(`^${location.trim()}$`, "i"),
    };
  }

  // ✅ Safe date handling
  if (date?.trim()) {
    query.date = date.trim();
  }

  const shows = await Show.find(query)
    .populate("movie theatre")
    .sort({ startTime: 1 });

  const groupedShows = groupShowsByTheatreAndMovie(
    shows as IShow[]
  );

  return groupedShows;
};
//3. get show by id
export const getShowById = async (showId: string) => {
  return await Show.findById(showId).populate("movie theatre");
};

//4.update seat status
export const updateSeatStatus = async (showId: string, row: string, seatNumber: string, status: "AVAILABLE" | "BOOKED" | "BLOCKED") => {
  const show = await Show.findById(showId);
  if (!show) {
    throw new Error("Show not found");
  }

  const seatRow = show.seatLayout.find((layout) => layout.row === row);
  if (!seatRow) {
    throw new Error("Row not found");
  }

  const seat = seatRow.seats.find((s) => s.seatNumber === seatNumber);
  if (!seat) {
    throw new Error("Seat not found");
  }

  seat.status = status;
  await show.save();
}

