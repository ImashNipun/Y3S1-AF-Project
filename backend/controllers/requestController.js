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

module.exports = createRequest;
