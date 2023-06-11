const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sectors: {
    type: [String],
    required: true,
  },
});

const UsersModel = mongoose.model("Users", userSchema);

module.exports = UsersModel;
