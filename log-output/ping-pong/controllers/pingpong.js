const pingpongRouter = require('express').Router()
const Counter = require('../models/counter')
const { checkConnection } = require('../utils/db')

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

pingpongRouter.get('/healthz', async (req, res) => {
  try {
    if (await checkConnection()) {
      console.log('Health check successful for ping-pong')
      return res.status(200).end()
    } else {
      console.error('Health check failed for ping-pong')
      return res.status(500).end()
    }
  } catch (error) {
    console.error('Health check failed for ping-pong: ', error)
    return res.status(500).end()
  }
})

module.exports = pingpongRouter
