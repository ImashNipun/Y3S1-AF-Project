const mongoose = require("mongoose");

const DonationRequestSchema = mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  donor:{
    type: String,
    required: true,
  },
  donation:{
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("donation_request", DonationRequestSchema);
