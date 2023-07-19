const express = require('express')
// creating route
const route = express.Router()

route.get('/', (req, res) => {
    res.send({ message: "hello testing render deploy" })
})

module.exports = route;