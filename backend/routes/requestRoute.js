const express = require("express");
const router = express.Router();

const createRequest = require("../controllers/requestController");

//add a donation
router.post("/", createRequest);

module.exports = router;
