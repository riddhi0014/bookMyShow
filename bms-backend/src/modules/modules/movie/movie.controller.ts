import {Request,Response,NextFunction} from 'express';
import * as MovieService from './movie.service';

export const createMovie = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const movie = await MovieService.createMovie(req.body);
    res.status(201).json({movie});
  } catch (error) {
    next(error);
  }
};//

export const getAllMovies = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const movies = await MovieService.getAllMovies();
    res.status(200).json({movies});
  } catch (error) {
    next(error);
  }
};

export const getMovieById = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const movie = await MovieService.getMovieById(req.params.id);
    if (!movie) {
    res.status(404).json({ message: 'Movie not found' });
    return;
    }
    res.status(200).json({movie});
  } catch (error) {
    next(error);
  }
};

export const getTopMoviesByVotes = async(req:Request,res:Response,next:NextFunction)=>{ 
  try {
    const movies = await MovieService.getTopMoviesByVotes(5);
    res.status(200).json({movies});    
  } catch (error) {
    next(error);
  }
}