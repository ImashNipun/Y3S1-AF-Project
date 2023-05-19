const Donations = require("../models/donationsModel");
const mongoose = require("mongoose");

//get all donations
const getAllDonations = async (req, res) => {
  const donors = await Donations.find({}).sort({ createAt: -1 });
  res.status(200).json(donors);
};

//create a donations
const createDonations = async (req, res) => {
  //add data to the db
  const {
    donorid,
    donorname,
    food,
    quantity,
    unit,
    expiredate,
    currentdate,
    status,
    description,
  } = req.body;

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
      description,
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
  const donation = await Donations.find({ "donorid": donorid });

  if (!donation) {
    return res.status(404).json({ error: "no such donor" });
  }

  res.status(200).json(donation);
};

//get a donation
const getAdonation = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donations.findById(id);
    res.status(200).json(donation);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};


//update donations
const updateDonation = async (req, res) => {
  const id = req.params.id;

  const {status} = req.body;

  try {
    const update = await Donations.findOneAndUpdate({_id:id}, {status});
    res.status(200).json(update);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

module.exports = {
  createDonations,
  getAllDonations,
  getDonation,
  getAdonation,
  updateDonation,
};

