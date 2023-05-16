const mongoose = require("mongoose");

const DonationsSchema = mongoose.Schema({
  donation: {
    donorid: {
      type: String,
      required: true,
    },
    donorname: {
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
    expiredate: {
      type: String,
      required: true,
    },
    currentdate: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Donations", DonationsSchema);
