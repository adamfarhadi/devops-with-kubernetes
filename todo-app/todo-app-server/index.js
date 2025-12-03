const express = require('express')
const fs = require('fs')
const todoRouter = require('./controllers/todo')

const app = express()
const port = process.env.PORT || 3001

app.use(express.static('dist'))
app.use('/api/todo', todoRouter)

app.listen(port, () => {
  console.log(`[${new Date().toISOString()}] Server started in port ${port}`)
})
