const express = require("express");
const router = express.Router();

const {createRequest,getRequest} = require("../controllers/requestController");

//add a donation
router.post("/", createRequest);

//get request according to donor
router.get("/byadonor/:donor",getRequest);

module.exports = router;
