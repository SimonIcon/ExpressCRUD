// loading env variables
require('dotenv').config()


// importing dependancies
const express = require('express')
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect')
const home = require('./routes/home')
const post = require('./routes/post')

// creating application
const app = express()

// data transfer middleware
app.use(bodyParser.json())

// routes middleware
app.use('/', home)
app.use('/post', post)

// mongoose connection
dbConnect()


app.listen(process.env.PORT, () => {
    console.log("server started")
})