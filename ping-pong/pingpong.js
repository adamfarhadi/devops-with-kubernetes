const pingpongRouter = require('express').Router()

var counter = 0

pingpongRouter.get('/ping', (req, res) => {
  res.send(`pong ${++counter}`)
})

module.exports = pingpongRouter