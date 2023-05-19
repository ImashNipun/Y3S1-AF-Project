const express = require("express");
const router = express.Router();

const {
  createDonor,
  getAllDonors,
  getOneDonor,
  updateDonor,
} = require("../controllers/donorContoller");

//get a donor
router.get("/:id", getOneDonor);

//get all donors
router.get("/", getAllDonors);

//add a donors
router.post("/", createDonor);

//update a donor
router.patch("/:id", updateDonor);

module.exports = router;
