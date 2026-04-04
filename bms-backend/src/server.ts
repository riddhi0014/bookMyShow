import app from "./app";
import connectDB from "./config/db";
import {config} from "./config/config";


const startServer = async () => {
  const port = config.port;


  connectDB()
.then(() => {
  app.listen(port, () => {
      console.log(` Server is running at port : ${port}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})
};

startServer();