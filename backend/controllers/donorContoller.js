const Donors = require("../models/donorModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all donors
const getAllDonors = async (req, res) => {
  const donors = await Donors.find({}).sort({ createAt: -1 });
  res.status(200).json(donors);
};

//geta single Donors
const getOneDonor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such a Donor" });
  }

  const oneDonor = await Donors.findById(id);

  if (!oneDonor) {
    return res.status(400).json({ error: "No such a Donor" });
  }
  res.status(200).json(oneDonor);
};

//create a donor
const createDonor = async (req, res) => {
  //add data to the db
  const { name, email, password, address, location, phonea, phoneb } = req.body;
  const success = Array();

  try {
    const donor = await Donors.create({
      //donor
      name,
      email,
      password,
      address,
      location,
      phonea,
      phoneb
    });
    try {
      //user
      const user = await User.create({
        email,
        password,
      });
      success[0] = "User is created successfully";
    } catch (error) {
      //user
      console.log(error);
      res.status(400).json({ error: error });
    }
    success[1] = "Donor is created successfully";
    res.status(200).json({
      //user
      success: success,
    });
  } catch (error) {
    //donor
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//update donor
const updateDonor = async (req, res) => {
  const id = req.params.id;

  const { password, address, location, phonea, phoneb  } = req.body;

  try {
    const update = await Donors.findByIdAndUpdate(id, {
      password,
      address,
      location,
      phonea,
      phoneb
    });
    res.status(200).json("Updated");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

//delete a donor
// router.delete('/:id',deleteDonor)

module.exports = { createDonor, getAllDonors, getOneDonor, updateDonor };
