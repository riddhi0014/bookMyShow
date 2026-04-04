import {Request,Response,NextFunction} from 'express';
import * as   showService from './show.service';
import {stat} from 'fs';

export const createShow = async (req:Request,res:Response,next:NextFunction)=>{
  try{
    await showService.createShow(req.body);
    res.status(201).json({message:"Show created successfully"});
  }catch(error){
    next(error);
  }
}


export const getShowsByMovieDateLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const movieId = (req.query.movieId as string)?.trim();
    const date = (req.query.date as string)?.trim();
    const location = (req.query.location as string)?.trim();

    if (!movieId || !location || !date) {
      res.status(400).json({
        message: "movieId, location and date are required",
      })
      return ;
    }
    console.log({ movieId, date, location }); // debug

    const shows = await showService.getShowsByMovieDateLocation(
      movieId,
      date,
      location
    );

    res.status(200).json({ shows });
  } catch (error) {
    next(error);
  }
};

export const getShowById = async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const show=await showService.getShowById(req.params.id);
    res.status(200).json(show);
  }catch(error){
    next(error);
  }
}

export const updateSeatStatus = async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const {row,seatNumber,status}=req.query;
    
   const updatedShow= await showService.updateSeatStatus(req.params.id as string,row as string,seatNumber as string,status as "AVAILABLE" | "BOOKED" | "BLOCKED");
    res.status(200).json(updatedShow);
  }catch(error){
    next(error);
  }
}
