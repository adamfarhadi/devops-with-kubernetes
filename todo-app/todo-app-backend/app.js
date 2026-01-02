const express = require('express')
const todoRouter = require('./controllers/todos')
const middleware = require('./utils/middleware')
const { connectToDatabase, checkConnection } = require('./utils/db')

const app = express()

connectToDatabase()

app.use(express.json())

app.use(middleware.requestLogger)

app.get('/', (req, res) => res.sendStatus(200)) // required for GKE health check

app.get('/healthz', async (req, res) => {
  try {
    if (await checkConnection()) {
      console.log('Health check successful for todo-app-backend')
      return res.status(200).end()
    } else {
      console.error('Health check failed for todo-app-backend')
      return res.status(500).end()
    }
  } catch (error) {
    console.error('Health check failed for todo-app-backend: ', error)
    return res.status(500).end()
  }
})

app.use('/api/todos', todoRouter)

app.use(middleware.errorHandler)

module.exports = app