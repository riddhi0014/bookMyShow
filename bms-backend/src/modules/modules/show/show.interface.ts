
import { Types } from "mongoose";

export interface IShow{
  _id?: string;
  movie: Types.ObjectId;
  theatre: Types.ObjectId;
  location: string;
  format: "2D" | "3D" | "IMAX"| "PVR PXL";
  audioType?:string;
  startTime: string;
  date: string;                   //why write string instead of String?
  priceMap:Record<string, number>;
  seatLayout:{
    row:string;
    seats:
    {
      seatNumber:string;
      status:"AVAILABLE" | "BOOKED" | "BLOCKED";
    }[];
  }[];
  createdAt?: Date;
  updatedAt?: Date;
  
}