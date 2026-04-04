import mongoose from "mongoose";
import {IMovie} from "./movie.interface";

const movieSchema=new mongoose.Schema<IMovie>(
  {
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
    director: {               //
      type: String,
      required: false,
    },
    cast: {
      type: [String],          //
      required: false ,
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
  },
  {
    timestamps: true,
  }
);

export const MovieModel= mongoose.model<IMovie>('Movie', movieSchema);