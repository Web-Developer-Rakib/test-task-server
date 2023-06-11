const UsersModel = require("./usersModel");

const createUser = async (req, res) => {
  try {
    const newUser = await UsersModel.create({ sectors, singleSector });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getUser = async (req, res) => {
  try {
    const users = await UsersModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  createUser,
  getUser,
};
