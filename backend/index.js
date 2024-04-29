import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middleware
app.use(express.json());

//middleware for cors policy
app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to the ShoeShop home page");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`);
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.log(error);
  });
