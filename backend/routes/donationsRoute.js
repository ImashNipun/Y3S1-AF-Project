const express = require("express");
const router = express.Router();

const {createDonations,getAllDonations,getDonation} = require("../controllers/donationsController");

//add a donation
router.post("/", createDonations);

//get all donors
router.get("/", getAllDonations);

//get a single data
router.get('/:donorid',getDonation)


module.exports = router;
