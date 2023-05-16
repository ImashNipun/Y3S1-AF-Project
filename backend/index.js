const express = require('express');
const cors = require('cors');
require('dotenv').config();

//database connection
const connection = require('./dbconnection/dbconnection');

//routes
const recipeRoute = require("./routes/recipeRoute");
const donationRoute = require("./routes/donationsRoute");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recipe',recipeRoute);
app.use('/api/donations',donationRoute)

connection.once("open",()=>{
    console.log('The database connection is succeed!!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})