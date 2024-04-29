import express from "express";
import "dotenv";

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to blog post.");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`);
});
