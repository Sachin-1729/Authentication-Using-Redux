const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');
require('dotenv').config();
const userRoute = require("./router/Userroute");


app.use(express.json());

app.use(cors()); 

mongoose.connect(process.env.URI).then(() => {
    console.log("connected to db")
    app.listen(process.env.PORT, () => {
        console.log("server running on port" , process.env.PORT)
    }) 
}).catch((err) => {
    console.log(err)
})

// Routes 

app.use("/users", userRoute)

