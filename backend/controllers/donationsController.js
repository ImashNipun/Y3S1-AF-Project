const Donations = require("../models/donationsModel")
const mongoose = require("mongoose");

//get all donations
const getAllDonations = async (req, res) => {
  const donors = await Donations.find({}).sort({ createAt: -1 });
  res.status(200).json(donors);
};

//create a donations
const createDonations = async (req, res) => {
  //add data to the db
  const { donorid,donorname,food,quantity,unit,expiredate,currentdate,status,description } = req.body;

  try {
    const donations = await Donations.create({
      donorid,
      donorname,
      food,
      quantity,
      unit,
      expiredate,
      currentdate,
      status,
      description
      
    });
    res.status(200).json(donations);
  } catch (error) {
    //donation
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//get donations according donor
const getDonation = async (req, res) => {
  const { donorid } = req.params;

  if (!mongoose.Types.ObjectId.isValid(donorid)) {
    return res.status(404).json({ error: "no such donor" });
  }
  const donation = await Donations.find({"donation.donorid":donorid});

  if (!donation) {
    return res.status(404).json({ error: "no such donor" });
  }

  res.status(200).json(donation);
};

module.exports = { createDonations, getAllDonations, getDonation };
