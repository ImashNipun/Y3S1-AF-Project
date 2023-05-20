const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = async (req, res) => {
    try {

      const user = await User.findOne({ email: req.body.email });
      console.log(req.body);
      if (!user)
        return res.status(401).send({ message: "Invalid Email or Password" });
  
      if ( req.body.password != user.password)
        return res.status(401).send({ message: "Invalid Email or Password" });
  
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: user.email,
            roles: user.type,
          },
        },
        "eL6Jadh6jBThpztk",
        { expiresIn: "1d" }
      );
  
    //     res.cookie('jwt', refreshToken, {
    //       httpOnly: true, //accessible only by web server
    //       // secure: true, //https
    //       // sameSite: 'None', //cross-site cookie
    //      // maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    //   });
  
      res.status(200).send({
        data: user,
        accesstoken: accessToken,
        message: "Login is successfully",
      });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
      console.log(error);
    }
  };

  module.exports = {
    authenticateUser
  }