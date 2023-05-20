const express = require("express");
const router = express.Router();

const {
    authenticateUser
} = require("../controllers/userAuthentication");

//add a donation
router.post("/", authenticateUser);


module.exports = router;
