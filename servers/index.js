const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors());

const userrouter = require('./routes/userRoute')


mongoose.connect(process.env.URI).then(() => {
    console.log("Connected successfully");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) console.log(err);
        console.log("running successfully at", process.env.PORT)
    })
}).catch((err) => {
    console.log("error-->", err)
})

app.use(userrouter)




