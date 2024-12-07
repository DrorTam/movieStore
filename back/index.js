import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/movies", movieRoute);

const port = 5555;

mongoose
  .connect(`${process.env.mongoDBURL}`)
  .then(() => {
    console.log("We are connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
