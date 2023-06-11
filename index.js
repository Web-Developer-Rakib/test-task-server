import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// MiddleWares
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
// Connect mongoDB
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lgdlhyd.mongodb.net/`;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
