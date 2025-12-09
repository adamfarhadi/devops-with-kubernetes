const express = require('express')
const imageRouter = require('./controllers/image')
const middleware = require('./utils/middleware')

const app = express()
app.use(express.json())

app.use(express.static('dist'))

app.use(middleware.requestLogger)
app.use('/image', imageRouter)

module.exports = app
