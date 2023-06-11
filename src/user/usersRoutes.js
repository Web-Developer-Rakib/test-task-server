const express = require("express");
const usersController = require("./usersController");
const userRoutes = express.Router();

userRoutes.post("/post", usersController.createUser);
userRoutes.get("/get", usersController.getUser);

module.exports = userRoutes;
