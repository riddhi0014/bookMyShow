import mongoose from "mongoose";
import {config} from "./config";

const connectDB = async () => {
  try{

    const connectionInstance=await mongoose.connect(config.databaseUrl as string);
    console.log(`Connected to MongoDB successfully. DB Host=${connectionInstance.connection.host}`);

  }
  catch(err){
    console.error("Error connecting to MongoDB:",err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;