const mongoose = require("mongoose");

const sectorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sectors: {
    type: [String],
    required: true,
  },
});

const SectorsModel = mongoose.model("Sectors", sectorsSchema);

export default SectorsModel;
