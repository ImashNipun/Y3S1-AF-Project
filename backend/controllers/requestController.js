const Requests = require("../models/requestModel");
const mongoose = require("mongoose");

//create a request
const createRequest = async (req, res) => {
  //add data to the db
  const { organization, donor, donation, food, quantity, unit, time } = req.body;

  try {
    const requests = await Requests.create({
      organization,
      donor,
      donation,
      food,
      quantity,
      unit,
      time,
    });
    res.status(200).json("Request is created");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//get a request according to donor
const getRequest = async (req, res) => {
  const { donor } = req.params;

  if (!mongoose.Types.ObjectId.isValid(donor)) {
    return res.status(404).json({ error: "no such donor" });
  }
  const request = await Requests.find({ "donor": donor });

  if (!request) {
    return res.status(404).json({ error: "no such donor" });
  }

  res.status(200).json(request);
};

module.exports = {createRequest,getRequest};
