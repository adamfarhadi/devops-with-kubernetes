const express = require('express')
const imageRouter = require('./controllers/image')
const middleware = require('./utils/middleware')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
}

// app.use(express.static('dist'))

app.use(middleware.requestLogger)
app.use('/image', imageRouter)

module.exports = app
