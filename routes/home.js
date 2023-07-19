const express = require('express')
// creating route
const route = express.Router()

route.get('/', (req, res) => {
    res.send({ message: "this is home" })
})

module.exports = route;