const mongoose = require("mongoose");

const Donorschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phonea: {
    type: String,
    required: true,
  },
  phoneb: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Donors", Donorschema);
