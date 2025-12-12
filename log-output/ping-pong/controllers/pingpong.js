const pingpongRouter = require('express').Router()
const Counter = require('../models/counter')

pingpongRouter.get('/', async (req, res) => {
  const counter = await Counter.findByPk('TRUE')
  if (counter) {
    counter.value = counter.value + 1
    await counter.save()
    res.send(`pong ${counter.value}`)
  } else {
    res.status(404).end()
  }
})

pingpongRouter.get('/pings', async (req, res) => {
  const counter = await Counter.findByPk('TRUE')
  if (counter) {
    res.send(counter.value)
  } else {
    res.status(204).end()
  }
})

module.exports = pingpongRouter
