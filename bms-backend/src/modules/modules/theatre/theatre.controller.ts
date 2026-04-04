import {Request,Response,NextFunction} from 'express';
import * as TheatreService from './theatre.service';
import {ITheatre} from './theatre.interface';


//1. Create a theatre
export const createTheatre=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const theatre=await TheatreService.createTheatre(req.body);
        res.status(201).json({theatre});
    } catch (error) {
        throw new Error('Failed to create theatre');
    }
}


//2.merged controller for fetching all theatres and fetching theatre by city
export const getTheatres=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const city=req.query.city as string;
        let theatres:ITheatre[];
        if(city){
            theatres=await TheatreService.getTheatresByCity(city);
        }else{
            theatres=await TheatreService.getAllTheatres();
        }
        res.status(200).json({theatres});
    } catch (error) {
        throw new Error('Failed to fetch theatres');
    }
}
