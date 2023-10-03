import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json()); //to accept raw object
app.use("/books", booksRoutes);
// app.use(
//   cors({
//     origin: ["http://localhost:5173/", "*"],
//     credentials: true,
//   })
// );

app.get("/", (req, res) => {
  res.status(234).send("Welcome to the Server.");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => console.log(`App listening at ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
