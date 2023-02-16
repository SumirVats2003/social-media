import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.patk37o.mongodb.net/Blog?retryWrites=true&w=majority`;

app.use("/api/user", router);
mongoose
  .connect(connectionString)
  .then(() => app.listen(PORT))
  .then(() => console.log(`App listening on port ${PORT}`))
  .catch((err) => console.log(err));
