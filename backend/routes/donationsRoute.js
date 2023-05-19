const express = require("express");
const router = express.Router();

const {
  createDonations,
  getAllDonations,
  getDonation,
  getAdonation,
  updateDonation,
} = require("../controllers/donationsController");

//add a donation
router.post("/", createDonations);

//get all donors
router.get("/", getAllDonations);

//get a single data
router.get("/byadonor/:donorid", getDonation);

//get a donation
router.get("/:id", getAdonation);

//update a donation
router.patch("/:id", updateDonation);

module.exports = router;
