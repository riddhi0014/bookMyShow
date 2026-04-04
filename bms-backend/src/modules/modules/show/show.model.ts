import mongoose from "mongoose";
import { IShow } from "./show.interface";

const showSchema = new mongoose.Schema<IShow>({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  theatre: { type: mongoose.Schema.Types.ObjectId, ref: "Theatre", required: true },
  location: { type: String, required: true },
  format: { type: String, enum: ["2D", "3D", "IMAX", "PVR PXL"], required: true },
  audioType:{type:String,default:"Dolby Atmos"},
  startTime: { type: String, required: true },
  date:{type:String,required:true},
  priceMap:{type:Map,of:Number,required:true,default:{}},
  seatLayout:[
    {
      row:{type:String,required:true},
      seats:[
        {
          seatNumber:{type:String,required:true},
          status:{type:String,enum:["AVAILABLE","BOOKED","BLOCKED"],required:true}
        }
      ]
    }
  ]
},{timestamps:true});

export const Show = mongoose.model<IShow>("Show", showSchema);