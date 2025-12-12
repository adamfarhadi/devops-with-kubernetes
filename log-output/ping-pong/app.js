const express = require('express')
const pingpongRouter = require('./controllers/pingpong')
const middleware = require('./utils/middleware')
const { connectToDatabase } = require('./utils/db')

const app = express()

connectToDatabase()

app.use(express.json())

app.use(middleware.requestLogger)

app.use('/', pingpongRouter)

module.exports = app
