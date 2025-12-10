const express = require('express')
const todoRouter = require('./controllers/todos')
const middleware = require('./utils/middleware')
const { connectToDatabase } = require('./utils/db')

const app = express()

connectToDatabase()

app.use(express.json())

app.use(middleware.requestLogger)
app.use('/api/todos', todoRouter)

app.use(middleware.errorHandler)

module.exports = app