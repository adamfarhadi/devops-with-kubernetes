const pingpongRouter = require('express').Router()

var counter = 0

pingpongRouter.get('/pingpong', (req, res) => {
  res.send(`pong ${++counter}`)
})

pingpongRouter.get('/pings', (req, res) => {
  res.send(counter.toString())
})

module.exports = pingpongRouter