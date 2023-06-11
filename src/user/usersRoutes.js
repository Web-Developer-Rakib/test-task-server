const express = require("express");
const usersController = require("./usersController");
const userRoutes = express.Router();

userRoutes.post("/post", usersController.createUser);

module.exports = userRoutes;
