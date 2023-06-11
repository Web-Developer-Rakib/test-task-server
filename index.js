require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/user/usersRoutes.js");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;
// MiddleWares
app.use(bodyParser.json());
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
// Routes
app.use("/users", userRoutes);
// App listning to the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
