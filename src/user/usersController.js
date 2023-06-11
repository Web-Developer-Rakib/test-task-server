const UsersModel = require("./usersModel");

const createUser = async (req, res) => {
  const { name, sectors } = req.body;
  try {
    const newUser = await UsersModel.create({ name, sectors });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  createUser,
};
