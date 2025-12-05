const express = require('express')
const todoRouter = require('./controllers/todos')
const middleware = require('./utils/middleware')

const app = express()

app.use(express.json())

app.use(middleware.requestLogger)
app.use('/api/todos', todoRouter)

module.exports = app