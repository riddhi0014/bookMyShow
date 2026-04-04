import { ITheatre } from "./theatre.interface";
import { Theatre } from "./theatre.model";

//1. Create a theatre
export const createTheatre=async (theatreData:ITheatre):Promise<ITheatre>=>{
    try {
        const theatre=await Theatre.create(theatreData);
        return theatre;
    } catch (error) {
        throw new Error('Failed to create theatre');
    }
}
//2. Get all theatres
export const getAllTheatres=async ():Promise<ITheatre[]>=>{
    try {
        const theatres=await Theatre.find();
        return theatres;
    } catch (error) {
        throw new Error('Failed to fetch theatres');
    }
}
//3. Get theatre by id
export const getTheatreById=async (id:string):Promise<ITheatre | null>=>{
    try {
        const theatre=await Theatre.findById(id);
        return theatre;
    } catch (error) {
        throw new Error('Failed to fetch theatre');
    }
}
//4. Get theatre by city 
export const getTheatresByCity=async (city:string):Promise<ITheatre[]>=>{
    try {
        const theatres=await Theatre.find({city});
        return theatres;
    } catch (error) {
        throw new Error('Failed to fetch theatres');
    }
}
