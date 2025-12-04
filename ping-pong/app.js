const express = require('express')
const pingpongRouter = require('./controllers/pingpong')
const middleware = require('./utils/middleware')

const app = express()

app.use(express.json())

app.use(middleware.requestLogger)
app.use('/api/pingpong', pingpongRouter)

module.exports = app